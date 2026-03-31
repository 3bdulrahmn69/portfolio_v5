'use client';

import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@/components/ui/button';

type ContactFormState = {
  name: string;
  email: string;
  message: string;
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
      className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xl space-y-5"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Name
        </label>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-xl border px-4 py-3 outline-none transition-colors ${
            errors.name
              ? 'border-destructive'
              : 'border-input focus:border-primary'
          }`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Email
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-xl border px-4 py-3 outline-none transition-colors ${
            errors.email
              ? 'border-destructive'
              : 'border-input focus:border-primary'
          }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-xl border px-4 py-3 outline-none transition-colors resize-y ${
            errors.message
              ? 'border-destructive'
              : 'border-input focus:border-primary'
          }`}
          placeholder="Tell me about your project or idea..."
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message}</p>
        )}
      </div>

      {/* Status */}
      {status.type && (
        <p
          className={`text-sm font-medium ${
            status.type === 'success' ? 'text-success' : 'text-destructive'
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
