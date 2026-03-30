import Button from '@/components/ui/button';
import Tooltip from '@/components/ui/tool-tip';

import { FaGithub, FaInfo, FaLink } from 'react-icons/fa6';

type ProjectActionButtonsProps = {
  title: string;
  liveUrl?: string;
  githubUrl?: string;
  detailsHref?: string;
  showDetails?: boolean;
  className?: string;
};

export default function ProjectActionButtons({
  title,
  liveUrl,
  githubUrl,
  detailsHref,
  showDetails = true,
  className,
}: ProjectActionButtonsProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        {liveUrl ? (
          <Tooltip content="Live Demo">
            <Button
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="icon"
              size="icon"
              aria-label={`Open live demo for ${title}`}
              className="text-lg bg-primary text-primary-foreground border-primary/60"
            >
              <FaLink />
            </Button>
          </Tooltip>
        ) : (
          <Tooltip content="No Live Demo">
            <Button
              disabled
              variant="icon"
              size="icon"
              aria-label={`No live demo for ${title}`}
              className="text-lg bg-muted text-muted-foreground"
            >
              <FaLink />
            </Button>
          </Tooltip>
        )}

        {githubUrl ? (
          <Tooltip content="Source Code">
            <Button
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="icon"
              size="icon"
              aria-label={`Open source code for ${title}`}
              className="text-lg"
            >
              <FaGithub />
            </Button>
          </Tooltip>
        ) : (
          <Tooltip content="Private Source">
            <Button
              disabled
              variant="icon"
              size="icon"
              aria-label={`Source code is private for ${title}`}
              className="text-lg bg-background text-muted-foreground"
            >
              <FaGithub />
            </Button>
          </Tooltip>
        )}

        {showDetails &&
          (detailsHref ? (
            <Tooltip content="Project Details">
              <Button
                href={detailsHref}
                variant="icon"
                size="icon"
                aria-label={`View details for ${title}`}
                className="text-lg"
              >
                <FaInfo />
              </Button>
            </Tooltip>
          ) : (
            <Tooltip content="No Details Available">
              <Button
                disabled
                variant="icon"
                size="icon"
                aria-label={`No details available for ${title}`}
                className="text-lg bg-background text-muted-foreground"
              >
                <FaInfo />
              </Button>
            </Tooltip>
          ))}
      </div>
    </div>
  );
}
