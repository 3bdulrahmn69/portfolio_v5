import Link from 'next/link';
import { projects, works } from '@/data';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

interface ProjectNavigationProps {
  currentSlug: string;
}

export default function ProjectNavigation({
  currentSlug,
}: ProjectNavigationProps) {
  const allProjects = [...works, ...projects];
  const index = allProjects.findIndex(
    (project) => project.slug === currentSlug,
  );
  const prev = index > 0 ? allProjects[index - 1] : undefined;
  const next =
    index >= 0 && index < allProjects.length - 1
      ? allProjects[index + 1]
      : undefined;

  if (!prev && !next) {
    return null;
  }

  return (
    <nav
      aria-label="Browse more projects"
      className="mt-16 grid gap-4 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
        >
          <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Previous
          </span>
          <span className="text-lg font-bold transition-colors group-hover:text-primary">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="group rounded-2xl border border-border bg-card p-5 text-right transition-colors hover:border-primary/50"
        >
          <span className="mb-2 flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Next
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </span>
          <span className="text-lg font-bold transition-colors group-hover:text-primary">
            {next.title}
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  );
}
