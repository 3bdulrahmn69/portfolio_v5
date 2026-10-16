import type { Technology } from '@/lib/definitions';
import { fallbackTechMeta, techMeta } from '@/lib/tech-meta';

type ProjectTechStackProps = {
  techStack: Technology[];
  maxVisible?: number;
  className?: string;
};

export default function ProjectTechStack({
  techStack,
  maxVisible = 5,
  className,
}: ProjectTechStackProps) {
  const visible = techStack.slice(0, maxVisible);
  const remaining = Math.max(0, techStack.length - maxVisible);

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2">
        {visible.map((tech) => {
          const meta = techMeta[tech] ?? fallbackTechMeta;
          const Icon = meta.icon;
          return (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-background border border-border text-foreground inline-flex items-center gap-1.5"
            >
              <Icon
                aria-hidden="true"
                style={{ color: meta.color ?? 'currentColor' }}
              />
              {tech}
            </span>
          );
        })}

        {remaining > 0 && (
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary border border-border text-secondary-foreground">
            +{remaining}
          </span>
        )}
      </div>
    </div>
  );
}
