'use client';

import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@/components/ui/button';

type ContactFormState = {
  name: string;
  email: string;
  message: string;
  website: string; // honeypot
};

type ErrorsState = {
  name: string;
  email: string;
  message: string;
};

const initialState: ContactFormState = {
  name: '',
  email: '',
  message: '',
  website: '',
};

const initialErrors: ErrorsState = {
  name: '',
  email: '',
  message: '',
};

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<ErrorsState>(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // ---------------- Validation ----------------
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2)
          return 'Name must be at least 2 characters';
        if (value.trim().length > 50)
          return 'Name must be less than 50 characters';
        return '';

      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return 'Please enter a valid email address';
        return '';

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10)
          return 'Message must be at least 10 characters';
        if (value.trim().length > 1000)
          return 'Message must be less than 1000 characters';
        return '';

      default:
        return '';
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      message: validateField('message', form.message),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  // ---------------- Handlers ----------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ErrorsState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // ---------------- Submit ----------------
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: null, message: '' });

    if (!validateForm()) return;

    // Honeypot: silently accept submissions that fill the hidden field
    if (form.website) {
      setStatus({
        type: 'success',
        message:
          'Your message was sent successfully. I will get back to you soon.',
      });
      setForm(initialState);
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message:
          'Contact form is not configured right now. Please email me directly instead.',
      });
      return;
    }

    try {
      setIsSubmitting(true);

      await emailjs.send(
        serviceId!,
        templateId!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        { publicKey },
      );

      setStatus({
        type: 'success',
        message:
          'Your message was sent successfully. I will get back to you soon.',
      });

      setForm(initialState);
      setErrors(initialErrors);
    } catch {
      setStatus({
        type: 'error',
        message:
          'Could not send your message right now. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 5000);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xl space-y-5"
    >
      {/* Honeypot - hidden from users, catches bots */}
      <div
        aria-hidden="true"
        className="absolute opacity-0 h-0 overflow-hidden pointer-events-none"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={`w-full rounded-xl border px-4 py-3 outline-none transition-colors bg-background focus-visible:ring-2 focus-visible:ring-ring ${errors.name
            ? 'border-destructive'
            : 'border-input focus:border-primary'
            }`}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="contact-name-error" className="text-sm text-destructive mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={`w-full rounded-xl border px-4 py-3 outline-none transition-colors bg-background focus-visible:ring-2 focus-visible:ring-ring ${errors.email
            ? 'border-destructive'
            : 'border-input focus:border-primary'
            }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p id="contact-email-error" className="text-sm text-destructive mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? 'contact-message-error' : undefined
          }
          className={`w-full rounded-xl border px-4 py-3 outline-none transition-colors resize-y bg-background focus-visible:ring-2 focus-visible:ring-ring ${errors.message
            ? 'border-destructive'
            : 'border-input focus:border-primary'
            }`}
          placeholder="Tell me about your project or idea..."
        />
        {errors.message && (
          <p
            id="contact-message-error"
            className="text-sm text-destructive mt-1"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Status */}
      {status.type && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm font-medium ${status.type === 'success' ? 'text-success' : 'text-destructive'
            }`}
        >
          {status.message}
        </p>
      )}

      <Button type="submit" variant="primary" size="md" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
