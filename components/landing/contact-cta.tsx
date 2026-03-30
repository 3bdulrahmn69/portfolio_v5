import ContactDetails from '@/components/contact/contact-details';
import ContactForm from '@/components/contact/contact-form';
import Container from '@/components/layout/container';
import { siteConfig } from '@/lib/site';

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="w-full bg-secondary text-secondary-foreground relative border-t border-border"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.12] pointer-events-none" />

      <Container className="py-28 sm:py-32 relative z-10">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-6xl font-black mb-5 tracking-tight">
            Let&apos;s Build Something Clean.
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl leading-relaxed">
            Send a direct message for collaboration, freelance work, or frontend
            architecture consultation. I reply as quickly as possible.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Primary email: {siteConfig.email}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-start">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
