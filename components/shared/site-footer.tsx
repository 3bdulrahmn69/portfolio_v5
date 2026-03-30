import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Abdulrahman Moussa
          </p>
          <p className="max-w-md text-sm leading-7 text-soft">
            {siteConfig.description}
          </p>
        </div>

        <div className="space-y-3 sm:justify-self-end sm:text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Social
          </p>
          <div className="flex flex-wrap gap-3 sm:justify-end">
            {siteConfig.socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-soft transition hover:border-white/40 hover:text-white"
              >
                {social.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted">
            {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
