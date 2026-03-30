import { Technology } from '@/lib/definitions';

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
        {visible.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-background border border-border text-foreground"
          >
            {tech}
          </span>
        ))}

        {remaining > 0 && (
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary border border-border text-secondary-foreground">
            +{remaining}
          </span>
        )}
      </div>
    </div>
  );
}
