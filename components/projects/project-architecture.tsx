import { ReactNode } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import type { ProjectPart } from '@/lib/definitions';
import { cn } from '@/lib/utils';

type ProjectArchitectureProps = {
  parts: ProjectPart[];
};

function AccessBadge({ access }: { access: ProjectPart['access'] }) {
  if (!access) return null;

  return (
    <span
      className={cn(
        'rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide',
        access === 'public'
          ? 'bg-primary/15 text-primary'
          : 'border border-border bg-secondary text-muted-foreground',
      )}
    >
      {access}
    </span>
  );
}

function PartNode({
  part,
  highlight = false,
}: {
  part: ProjectPart;
  highlight?: boolean;
}) {
  const Icon = part.icon;

  return (
    <div
      className={cn(
        'flex flex-col items-center gap-2.5 rounded-xl border px-5 py-4 text-center shadow-lg',
        highlight
          ? 'border-primary/50 bg-primary/5 shadow-primary/10'
          : 'border-border bg-card',
      )}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="text-lg text-primary" />}
        <span className="font-bold">{part.label}</span>
      </div>
      <AccessBadge access={part.access} />
      {part.subtitle && (
        <span className="max-w-44 text-center text-xs text-muted-foreground">
          {part.subtitle}
        </span>
      )}
    </div>
  );
}

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-wrap justify-center gap-3">{children}</div>
    </div>
  );
}

function Connector() {
  return (
    <div aria-hidden="true" className="flex flex-col items-center py-1">
      <div className="h-7 w-px bg-border" />
      <FaChevronDown className="text-primary" />
    </div>
  );
}

export default function ProjectArchitecture({ parts }: ProjectArchitectureProps) {
  const clients = parts.filter((part) => part.role === 'client');
  const cores = parts.filter((part) => part.role === 'core');
  const services = parts.filter((part) => part.role === 'service');

  if (!cores.length || (!clients.length && !services.length)) {
    return null;
  }

  return (
    <div className="mb-10 rounded-2xl border border-border bg-background/50 p-6 sm:p-8">
      {clients.length > 0 && (
        <>
          <Group label="Client-facing apps">
            {clients.map((part) => (
              <PartNode key={part.label} part={part} />
            ))}
          </Group>
          <Connector />
        </>
      )}

      <Group label="Core platform">
        {cores.map((part) => (
          <PartNode key={part.label} part={part} highlight />
        ))}
      </Group>

      {services.length > 0 && (
        <>
          <Connector />
          <Group label="Supporting services">
            {services.map((part) => (
              <PartNode key={part.label} part={part} />
            ))}
          </Group>
        </>
      )}
    </div>
  );
}
