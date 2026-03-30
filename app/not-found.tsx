import Button from '@/components/ui/button';
import { FaArrowLeft } from 'react-icons/fa6';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-background text-center px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <h1 className="text-9xl font-black text-primary mb-6 animate-float">
        404
      </h1>
      <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
        Page Not Found
      </h2>
      <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed z-10">
        I couldn&apos;t find the page you&apos;re looking for. It might have
        been moved or doesn&apos;t exist.
      </p>

      <Button
        href="/"
        variant="primary"
        size="lg"
        className="font-bold text-lg shadow-xl z-10"
      >
        <FaArrowLeft /> Return Home
      </Button>
    </div>
  );
}
