import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.RESEND_FROM_EMAIL ?? 'Tripknot <onboarding@resend.dev>';
const ADMIN_EMAIL = 'hello@tripknot.in';

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid input.' }, { status: 400 });
  }

  try {
    await Promise.all([
      // Confirmation to user
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "You're on the Tripknot early access list 🌍",
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:560px;margin:auto;color:#1a1a18">
            <img src="https://tripknot.in/logo.svg" alt="Tripknot" width="130" style="margin-bottom:32px;filter:invert(1)" />
            <h1 style="font-size:28px;font-weight:700;margin:0 0 12px">Hi ${name}, you're in. ✈️</h1>
            <p style="font-size:16px;color:#555;line-height:1.6;margin:0 0 24px">
              Thanks for joining the Tripknot early access list. We're building something special — smart itineraries, hidden gems, and travel that fits the way you actually move.
            </p>
            <p style="font-size:16px;color:#555;line-height:1.6;margin:0 0 32px">
              We'll reach out as soon as a spot opens up. Until then, keep exploring.
            </p>
            <p style="font-size:14px;color:#999;border-top:1px solid #eee;padding-top:20px;margin:0">
              The Tripknot team · <a href="https://tripknot.in" style="color:#0D7A7B;text-decoration:none">tripknot.in</a>
            </p>
          </div>
        `,
      }),
      // Notification to admin
      resend.emails.send({
        from: FROM,
        to: ADMIN_EMAIL,
        subject: `New early access signup — ${name}`,
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:480px;margin:auto;color:#1a1a18">
            <h2 style="font-size:20px;margin:0 0 16px">New early access signup</h2>
            <table style="width:100%;border-collapse:collapse;font-size:15px">
              <tr><td style="padding:8px 0;color:#888;width:80px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#0D7A7B">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#888">Time</td><td style="padding:8px 0">${new Date().toUTCString()}</td></tr>
            </table>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
