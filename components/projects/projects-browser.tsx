'use client';

import { useState } from 'react';
import type { Project } from '@/lib/definitions';
import { cn } from '@/lib/utils';
import ProjectCard from '@/components/projects/project-card';

type ProjectFilter = 'all' | Project['type'];

const FILTERS: { value: ProjectFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'professional', label: 'Professional' },
  { value: 'personal', label: 'Personal' },
];

interface ProjectsBrowserProps {
  projects: Project[];
}

export default function ProjectsBrowser({ projects }: ProjectsBrowserProps) {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const filtered =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by type"
        className="mb-14 flex flex-wrap items-center gap-3"
      >
        {FILTERS.map((item) => {
          const count =
            item.value === 'all'
              ? projects.length
              : projects.filter((project) => project.type === item.value)
                  .length;
          const isActive = filter === item.value;
          return (
            <button
              key={item.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(item.value)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                isActive
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-secondary text-secondary-foreground hover:border-primary/50',
              )}
            >
              {item.label}
              <span
                className={cn(
                  'rounded-full px-2 py-0.5 text-xs font-bold',
                  isActive ? 'bg-primary-foreground/20' : 'bg-background',
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-24" aria-live="polite">
        {filtered.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} idx={idx} />
        ))}
      </div>
    </div>
  );
}
