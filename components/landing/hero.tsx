'use client';

import Image from 'next/image';
import { FaArrowRight, FaTerminal } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt';
import Container from '@/components/layout/container';
import Button from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Container className="pt-24 pb-12 sm:pt-28 sm:pb-16 flex flex-col md:flex-row items-center justify-between min-h-[80vh] gap-12 md:gap-14">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl z-10 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground text-sm mb-6 pointer-events-none">
            <FaTerminal size={14} />
            <h2>Frontend Engineer & React Developer</h2>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]">
            Hi, I&apos;m{' '}
            <span className="text-primary hover:text-primary/80 transition-colors">
              Abdulrahman Moussa.
            </span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
            I craft fast, scalable, and responsive web applications,
            specializing in React, Next.js, and modern TypeScript architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              href="#projects"
              variant="primary"
              size="md"
              className="font-medium w-full sm:w-auto"
            >
              Selected Works <FaArrowRight size={14} />
            </Button>

            <Button
              href="/contact"
              variant="outline"
              size="md"
              className="font-medium w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE - PREMIUM IMAGE */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.15}
          scale={1.03}
          transitionSpeed={1500}
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          className="relative w-full max-w-[320px] sm:max-w-sm aspect-3/4 shrink-0 z-10 group"
        >
          {/* Moving Lines */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl z-0 pointer-events-none">
            <div className="absolute inset-0 flex justify-around">
              <span className="line" />
              <span className="line" />
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </div>
          </div>

          {/* Gradient Glow */}
          <div className="absolute -inset-6 bg-linear-to-tr from-primary/40 via-accent/30 to-transparent rounded-4xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-700" />

          {/* Glass Border */}
          <div className="absolute inset-0 rounded-3xl z-10 border border-white/10 backdrop-blur-xl bg-white/5" />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 rounded-3xl bg-[url('/grid.svg')] opacity-40 mix-blend-overlay pointer-events-none z-20" />

          {/* Image */}
          <div className="relative w-full h-full z-10">
            <Image
              src="/my.webp"
              alt="Abdulrahman Moussa"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </Tilt>
      </Container>
    </section>
  );
}
