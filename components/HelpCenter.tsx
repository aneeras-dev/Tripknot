'use client';

import { useState } from 'react';
import { FAQ_SECTIONS } from '@/lib/faqs';

// ─── Types ────────────────────────────────────────────────────────────────────

type FormState = 'idle' | 'loading' | 'success' | 'error';

// ─── Sub-components ──────────────────────────────────────────────────────────

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function inputClass(extra = '') {
  return `w-full rounded-xl border border-ink/[0.12] bg-bg px-4 py-3 text-[14px] text-ink placeholder:text-muted/60 outline-none focus:border-teal transition-colors ${extra}`;
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

function FaqSection() {
  const [open, setOpen] = useState<string | null>(null);

  function toggle(key: string) {
    setOpen((prev) => (prev === key ? null : key));
  }

  return (
    <section className="py-16 border-b border-ink/[0.08]">
      <div className="container-x">
        <p className="eyebrow mb-3">FAQ</p>
        <h2 className="display text-[30px] md:text-[38px] text-ink mb-12">Frequently asked questions</h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {FAQ_SECTIONS.map((section, si) => (
            <div key={section.category}>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-teal mb-4">
                {section.category}
              </h3>
              <div className="flex flex-col divide-y divide-ink/[0.08]">
                {section.items.map((item, ii) => {
                  const key = `${si}-${ii}`;
                  const isOpen = open === key;
                  return (
                    <div key={key}>
                      <button
                        onClick={() => toggle(key)}
                        className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      >
                        <span className={`text-[15px] font-medium transition-colors ${isOpen ? 'text-teal' : 'text-ink'}`}>
                          {item.q}
                        </span>
                        <ChevronIcon open={isOpen} />
                      </button>
                      {isOpen && (
                        <p className="pb-4 text-[14px] leading-[1.7] text-muted">
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormState>('idle');

  function set(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-ink/[0.08] bg-bg p-8 flex flex-col items-start gap-3">
        <span className="text-[22px]">✉️</span>
        <h3 className="text-[18px] font-semibold text-ink">Message sent</h3>
        <p className="text-[14px] text-muted leading-relaxed">
          Thanks for reaching out. We'll get back to you at <strong>{form.email}</strong> within 1–2 business days.
        </p>
        <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }} className="mt-2 text-[13px] text-teal underline underline-offset-2">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-ink/[0.08] bg-bg p-8">
      <h3 className="text-[20px] font-semibold text-ink mb-1">Contact us</h3>
      <p className="text-[14px] text-muted mb-6">General questions, feedback, or partnership enquiries.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input required placeholder="Your name" value={form.name} onChange={set('name')} className={inputClass()} />
          <input required type="email" placeholder="Email address" value={form.email} onChange={set('email')} className={inputClass()} />
        </div>
        <select required value={form.subject} onChange={set('subject')} className={inputClass()}>
          <option value="" disabled>Select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Account Issue">Account Issue</option>
          <option value="Feature Request">Feature Request</option>
          <option value="Partnership">Partnership</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          required
          placeholder="How can we help?"
          rows={5}
          value={form.message}
          onChange={set('message')}
          className={inputClass('resize-none')}
        />
        {status === 'error' && (
          <p className="text-[13px] text-rust">Something went wrong. Please try again or email us directly at hello@tripknot.in.</p>
        )}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn btn-primary self-start px-6 py-3 disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </div>
  );
}

// ─── Bug Report Form ──────────────────────────────────────────────────────────

const PLATFORMS = ['iOS', 'Android',] as const;
type Platform = (typeof PLATFORMS)[number];

function BugReportForm() {
  const [form, setForm] = useState({ name: '', email: '', title: '', description: '', platform: '' as Platform | '' });
  const [status, setStatus] = useState<FormState>('idle');

  function set(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/bug-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-ink/[0.08] bg-bg p-8 flex flex-col items-start gap-3">
        <span className="text-[22px]">🐛</span>
        <h3 className="text-[18px] font-semibold text-ink">Bug report received</h3>
        <p className="text-[14px] text-muted leading-relaxed">
          Thanks for helping us improve Tripknot. Our team will look into this and follow up at <strong>{form.email}</strong> if needed.
        </p>
        <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', title: '', description: '', platform: '' }); }} className="mt-2 text-[13px] text-teal underline underline-offset-2">
          Report another bug
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-ink/[0.08] bg-bg p-8">
      <h3 className="text-[20px] font-semibold text-ink mb-1">Report a bug</h3>
      <p className="text-[14px] text-muted mb-6">Found something broken? Let us know and we'll fix it.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input required placeholder="Your name" value={form.name} onChange={set('name')} className={inputClass()} />
          <input required type="email" placeholder="Email address" value={form.email} onChange={set('email')} className={inputClass()} />
        </div>
        <input required placeholder="Bug title (e.g. App crashes on map view)" value={form.title} onChange={set('title')} className={inputClass()} />
        <textarea
          required
          placeholder="Describe what happened and the steps to reproduce it…"
          rows={4}
          value={form.description}
          onChange={set('description')}
          className={inputClass('resize-none')}
        />
        <div>
          <p className="text-[13px] text-muted mb-2">Platform</p>
          <div className="flex gap-3 flex-wrap">
            {PLATFORMS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, platform: p }))}
                className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-colors ${
                  form.platform === p
                    ? 'bg-ink text-white border-ink'
                    : 'border-ink/[0.12] text-muted hover:border-ink/30'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        {status === 'error' && (
          <p className="text-[13px] text-rust">Something went wrong. Please try again or email us at hello@tripknot.in.</p>
        )}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn btn-primary self-start px-6 py-3 disabled:opacity-60"
        >
          {status === 'loading' ? 'Submitting…' : 'Submit report'}
        </button>
      </form>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HelpCenter() {
  return (
    <div className="bg-bg">
      {/* Hero */}
      <section className="border-b border-ink/[0.08] py-20">
        <div className="container-x">
          <p className="eyebrow mb-4">Tripknot</p>
          <h1 className="display text-[40px] md:text-[56px] text-ink mb-4">Help Center</h1>
          <p className="text-[17px] text-muted max-w-xl leading-relaxed">
            Find answers to common questions, get in touch with our team, or report something that isn't working right.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">Contact us</a>
            <a href="#bug-report" className="btn btn-outline">Report a bug</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* Forms */}
      <section className="py-20">
        <div className="container-x">
          <p className="eyebrow mb-3">Still need help?</p>
          <h2 className="display text-[30px] md:text-[38px] text-ink mb-12">Get in touch</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div id="contact"><ContactForm /></div>
            <div id="bug-report"><BugReportForm /></div>
          </div>
          <p className="mt-10 text-[13px] text-muted">
            You can also reach us directly at{' '}
            <a href="mailto:hello@tripknot.in" className="text-teal underline underline-offset-2">hello@tripknot.in</a>
            {' '}or{' '}
            <a href="mailto:support@aneeras.com" className="text-teal underline underline-offset-2">support@aneeras.com</a>
            . We typically respond within 1–2 business days.
          </p>
        </div>
      </section>
    </div>
  );
}