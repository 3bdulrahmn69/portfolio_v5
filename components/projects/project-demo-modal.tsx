'use client';

import { useEffect, useMemo, useState } from 'react';
import Button from '@/components/ui/button';

import { FaCirclePlay, FaXmark } from 'react-icons/fa6';

type ProjectDemoModalProps = {
  demoUrl: string;
  title: string;
};

function toYouTubeEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('youtu.be')) {
      const videoId = parsed.pathname.replace('/', '');
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (parsed.hostname.includes('youtube.com')) {
      const videoId = parsed.searchParams.get('v');
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }

      if (parsed.pathname.startsWith('/embed/')) {
        return url;
      }
    }
  } catch {
    return url;
  }

  return url;
}

export default function ProjectDemoModal({
  demoUrl,
  title,
}: ProjectDemoModalProps) {
  const [open, setOpen] = useState(false);
  const embedUrl = useMemo(() => toYouTubeEmbedUrl(demoUrl), [demoUrl]);

  // Close on ESC + lock scroll
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="secondary"
        size="md"
        className="font-bold "
      >
        <FaCirclePlay /> Watch Demo
      </Button>

      {open && (
        <div className="fixed inset-0 z-80 flex items-center justify-center p-4 sm:p-8">
          {/* Overlay (separate element) */}
          <div
            className="absolute inset-0 bg-overlay/75 backdrop-blur-sm animate-in fade-in"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-5xl rounded-3xl border border-border bg-card shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <p className="text-sm sm:text-base font-semibold text-foreground truncate pr-4">
                {title} - Demo
              </p>
              <Button
                onClick={() => setOpen(false)}
                variant="destructive"
                size="icon"
                aria-label="Close demo modal"
                className="text-base"
              >
                <FaXmark />
              </Button>
            </div>

            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={embedUrl}
                title={`${title} demo video`}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
