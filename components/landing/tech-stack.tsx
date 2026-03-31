import { techStack } from '@/data/tech-tool';

export default function TechStack() {
  return (
    <section className="w-full border-y border-border bg-background overflow-hidden py-10 relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

      <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8 text-center font-bold relative z-20">
        Core Technologies I Use as a React & Next.js Developer
      </h2>

      {/* Infinite Moving Marquee Container */}
      <div className="flex whitespace-nowrap overflow-hidden group">
        <div className="flex gap-16 sm:gap-24 animate-marquee items-center px-8 transition-opacity duration-300">
          {/* Render tech stack twice for seamless looping */}
          {[...techStack, ...techStack].map((tech, i) => {
            // Map predictable colorful classes base on index
            const colors = [
              'hover:text-blue-500',
              'hover:text-yellow-500',
              'hover:text-sky-500',
              'hover:text-green-500',
              'hover:text-pink-500',
              'hover:text-purple-500',
              'hover:text-orange-500',
              'hover:text-red-500',
              'hover:text-cyan-500',
              'hover:text-lime-500',
              'hover:text-emerald-500',
              'hover:text-violet-500',
            ];
            const hoverColor = colors[i % colors.length];

            return (
              <div
                key={i}
                className={`flex items-center gap-3 text-muted-foreground transition-colors duration-300 ${hoverColor} cursor-pointer`}
              >
                <tech.icon className="text-4xl" />
                <span className="font-semibold text-xl">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
