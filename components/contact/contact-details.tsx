import type { ReactNode } from 'react';
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa6';
import { siteConfig } from '@/lib/site';
import Button from '@/components/ui/button';
import SocialLinks from '@/components/shared/social-links';
import CopyEmailButton from '@/components/contact/copy-email-button';

const whatsappUrl = `https://wa.me/${siteConfig.phone.replace(/\D/g, '')}`;

type ContactDetailsProps = {
  className?: string;
};

function ContactRow({
  icon,
  label,
  value,
  note,
  actions,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  note?: string;
  actions: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 p-5 transition-colors hover:bg-secondary/40 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3 min-w-0">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="text-sm sm:text-base font-semibold text-foreground break-all">
            {value}
          </p>
          {note && (
            <p className="text-sm text-muted-foreground mt-0.5">{note}</p>
          )}
        </div>
      </div>
      <div className="flex shrink-0 flex-wrap gap-2 ps-13 sm:ps-0">
        {actions}
      </div>
    </div>
  );
}

export default function ContactDetails({ className }: ContactDetailsProps) {
  return (
    <div className={className}>
      <div className="mb-5 rounded-2xl border border-border bg-card/80 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Prefer a quick message? Reach me by email, phone, or social channels.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm divide-y divide-border/60">
        <ContactRow
          icon={<FaEnvelope />}
          label="Email"
          value={siteConfig.email}
          actions={
            <>
              <CopyEmailButton />
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="outline"
                size="sm"
              >
                <FaEnvelope /> Send
              </Button>
            </>
          }
        />

        <ContactRow
          icon={<FaPhone />}
          label="Phone & WhatsApp"
          value={siteConfig.phone}
          actions={
            <>
              <Button
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                variant="outline"
                size="sm"
              >
                <FaPhone /> Call
              </Button>
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                className="border-[#25d366]/50 text-[#25d366] hover:bg-[#25d366]/10 hover:border-[#25d366] hover:text-[#128c7e]"
              >
                <FaWhatsapp /> WhatsApp
              </Button>
            </>
          }
        />

        <ContactRow
          icon={<FaLocationDot />}
          label="Location"
          value={siteConfig.location}
          note="Available for remote and on-site work."
          actions={
            <Button
              href="https://maps.google.com/?q=Cairo%2C%20Egypt"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <FaLocationDot /> Map
            </Button>
          }
        />
      </div>

      <SocialLinks className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-sm" />
    </div>
  );
}
