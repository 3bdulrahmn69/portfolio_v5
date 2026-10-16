import Link from 'next/link';
import Container from '@/components/layout/container';
import Button from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8 mt-auto relative z-(--z-content) w-full">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Abdulrahman Moussa. All rights
          reserved.
        </p>
        <nav
          aria-label="Footer"
          className="flex items-center gap-6 text-sm font-semibold text-muted-foreground"
        >
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
        </nav>
        <Button href="/contact" variant="ghost" size="sm">
          Contact
        </Button>
      </Container>
    </footer>
  );
}
