'use client';

import { FormEvent, useState } from 'react';

type Status = 'idle' | 'sending' | 'success';

type ContactFormProps = {
  compact?: boolean;
};

export function ContactForm({ compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    window.setTimeout(() => {
      setStatus('success');
      event.currentTarget.reset();
    }, 550);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-label="Contact form"
    >
      <div className={compact ? 'grid gap-3' : 'grid gap-4 sm:grid-cols-2'}>
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-muted">
            Name
          </span>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-accent"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-muted">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-accent"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="space-y-2 block">
        <span className="text-xs uppercase tracking-[0.14em] text-muted">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={compact ? 4 : 6}
          className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-accent"
          placeholder="Tell me about your project or idea"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-full border border-accent bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-accent-soft disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>

      <p
        className="min-h-6 text-xs text-muted"
        role="status"
        aria-live="polite"
      >
        {status === 'success'
          ? 'Thanks. Message captured in demo mode.'
          : 'I usually reply within 24 hours.'}
      </p>
    </form>
  );
}
