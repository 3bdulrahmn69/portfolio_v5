import { FaTerminal } from 'react-icons/fa6';
import Container from '@/components/layout/container';

export default function About() {
  return (
    <section className="w-full bg-secondary text-secondary-foreground py-24 relative overflow-hidden">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border text-muted-foreground text-sm font-medium">
            <h2>About Me</h2>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Passionate about building scalable digital experiences.
          </h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hello! I&apos;m Abdulrahman Moussa. I am a dedicated Frontend
            Developer based in Egypt. I enjoy creating things that live on the
            internet, whether that be websites, enterprise applications, or
            anything in between. My goal is to always build products that
            provide pixel-perfect, highly-performant React and Next.js
            experiences.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            With a strong foundation in modern web technologies involving
            JavaScript, TypeScript, and state management, I bridge the gap
            between complex logic and beautiful user interfaces.
          </p>
        </div>
        <div className="relative aspect-square w-full max-w-sm mx-auto animate-float">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute inset-4 bg-background border border-border flex flex-col justify-center p-8 rounded-3xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Core Focus
            </h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <FaTerminal className="text-primary" /> Frontend Architecture
              </li>
              <li className="flex items-center gap-3">
                <FaTerminal className="text-primary" /> Responsive Design
                Systems
              </li>
              <li className="flex items-center gap-3">
                <FaTerminal className="text-primary" /> Web Performance
              </li>
              <li className="flex items-center gap-3">
                <FaTerminal className="text-primary" /> Accessible UI/UX
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
