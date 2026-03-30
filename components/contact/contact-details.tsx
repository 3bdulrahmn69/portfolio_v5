import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { siteConfig } from '@/lib/site';
import Button from '@/components/ui/button';
import SocialLinks from '@/components/shared/social-links';

type ContactDetailsProps = {
  className?: string;
};

export default function ContactDetails({ className }: ContactDetailsProps) {
  return (
    <div className={className}>
      <div className="mb-5 rounded-2xl border border-border bg-card/80 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Prefer a quick message? Reach me by email, phone, or social channels.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <article className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                <FaEnvelope />
              </span>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </p>
            </div>
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="outline"
              size="sm"
              className="shrink-0 whitespace-nowrap"
            >
              <FaEnvelope /> Send Email
            </Button>
          </div>
          <p className="text-sm sm:text-base font-semibold text-foreground break-all leading-relaxed">
            {siteConfig.email}
          </p>
        </article>

        <article className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                <FaPhone />
              </span>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Phone
              </p>
            </div>
            <Button
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              variant="outline"
              size="sm"
              className="shrink-0 whitespace-nowrap"
            >
              <FaPhone /> Call
            </Button>
          </div>
          <p className="text-sm sm:text-base font-semibold text-foreground">
            {siteConfig.phone}
          </p>
        </article>

        <article className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all sm:col-span-2">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                <FaLocationDot />
              </span>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Location
              </p>
            </div>
            <Button
              href="https://maps.google.com/?q=Cairo%2C%20Egypt"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              className="shrink-0 whitespace-nowrap"
            >
              <FaLocationDot /> Open Map
            </Button>
          </div>
          <p className="text-sm sm:text-base font-semibold text-foreground">
            {siteConfig.location}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Available for remote and on-site work.
          </p>
        </article>
      </div>

      <SocialLinks className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-sm" />
    </div>
  );
}
