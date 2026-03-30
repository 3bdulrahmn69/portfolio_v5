import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/2 px-6 py-12 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="text-3xl font-semibold text-white">Page not found</h1>
      <p className="text-sm leading-7 text-soft">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="rounded-full border border-accent bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black"
      >
        Back Home
      </Link>
    </section>
  );
}
