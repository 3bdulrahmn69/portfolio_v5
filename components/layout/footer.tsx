import Container from '@/components/layout/container';
import Button from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8 mt-auto relative z-10 w-full">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Abdulrahman Moussa. All rights
          reserved.
        </p>
        <Button href="/contact" variant="ghost" size="sm">
          Contact
        </Button>
      </Container>
    </footer>
  );
}
