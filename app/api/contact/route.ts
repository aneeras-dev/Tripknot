import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.RESEND_FROM_EMAIL ?? 'Tripknot <onboarding@resend.dev>';
const ADMIN_EMAIL = 'hello@tripknot.in';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (
    !name?.trim() ||
    !subject?.trim() ||
    !message?.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ error: 'Invalid input.' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: FROM,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `[Contact] ${subject} — ${name}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px;margin:auto;color:#1a1a18">
          <h2 style="font-size:20px;margin:0 0 20px">New contact message</h2>
          <table style="width:100%;border-collapse:collapse;font-size:15px">
            <tr><td style="padding:8px 0;color:#888;width:90px;vertical-align:top">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;vertical-align:top">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#0D7A7B">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;vertical-align:top">Subject</td><td style="padding:8px 0">${subject}</td></tr>
            <tr><td style="padding:8px 0;color:#888;vertical-align:top">Message</td><td style="padding:8px 0;white-space:pre-wrap">${message}</td></tr>
            <tr><td style="padding:8px 0;color:#888;vertical-align:top">Time</td><td style="padding:8px 0">${new Date().toUTCString()}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}