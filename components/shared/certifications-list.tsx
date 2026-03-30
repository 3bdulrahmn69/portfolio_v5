import Link from 'next/link';
import Image from 'next/image';
import { certifications } from '@/data/certifications';
import { SectionTitle } from '@/components/shared/section-title';

export function CertificationsList() {
  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="Credentials" title="Certifications" />
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/2"
          >
            <div className="relative aspect-video">
              {typeof item.image === 'string' ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-soft">{item.issuer}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-muted">
                Issued {item.issueDate}
              </p>
              {item.credentialUrl ? (
                <Link
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.12em] text-soft"
                >
                  Verify
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
