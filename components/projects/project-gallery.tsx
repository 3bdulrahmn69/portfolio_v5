'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import Button from '@/components/ui/button';
import Tooltip from '@/components/ui/tool-tip';

import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaXmark,
} from 'react-icons/fa6';

type ProjectGalleryProps = {
  title: string;
  image: string | StaticImageData;
  gallery?: (string | StaticImageData)[];
};

export default function ProjectGallery({
  title,
  image,
  gallery,
}: ProjectGalleryProps) {
  const images = useMemo(() => {
    const base = gallery && gallery.length > 0 ? gallery : [image];
    return Array.from(new Set(base));
  }, [gallery, image]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const activeImage = images[activeIndex] ?? image;

  const canNavigate = images.length > 1;

  function goToPrev() {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  function goToNext() {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }

  function openLightbox() {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setLightboxOpen(true);
  }

  // Close on ESC, arrow-key navigation, scroll lock, focus management
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen]);

  return (
    <section>
      <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-border bg-muted shadow-2xl">
        <button
          type="button"
          onClick={openLightbox}
          aria-label={`View ${title} image ${activeIndex + 1} fullscreen`}
          className="absolute inset-0 cursor-zoom-in focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-primary"
        >
          <Image
            src={activeImage}
            alt={`${title} gallery image ${activeIndex + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-cover"
            priority
          />
        </button>

        <div className="absolute top-4 left-4 rounded-full bg-background/85 border border-border backdrop-blur-md p-1.5 text-muted-foreground">
          <FaExpand size={12} />
        </div>

        {canNavigate && (
          <div className="absolute top-4 right-4 rounded-full px-3 py-1.5 text-xs font-semibold bg-background/85 border border-border backdrop-blur-md">
            {activeIndex + 1} / {images.length}
          </div>
        )}

        {canNavigate && (
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4">
            <Tooltip content="Previous Image" position="right">
              <Button
                onClick={goToPrev}
                variant="icon"
                size="icon"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </Button>
            </Tooltip>

            <Tooltip content="Next Image" position="left">
              <Button
                onClick={goToNext}
                variant="icon"
                size="icon"
                aria-label="Next image"
              >
                <FaChevronRight />
              </Button>
            </Tooltip>
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {images.map((galleryImage, index) => (
            <Button
              key={`${galleryImage}-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-video rounded-xl overflow-hidden border transition-all ${index === activeIndex
                ? 'border-primary ring-2 ring-primary/50'
                : 'border-border hover:border-primary/40'
                } h-auto w-auto p-0 min-h-0 min-w-0`}
              variant="ghost"
              size="icon"
              aria-label={`Open gallery image ${index + 1}`}
            >
              <Image
                src={galleryImage}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                sizes="160px"
                className="object-cover"
              />
            </Button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <div className="fixed inset-0 z-(--z-modal) flex items-center justify-center p-4 sm:p-8">
          <div
            className="absolute inset-0 bg-overlay/85 backdrop-blur-sm animate-fade-in"
            onClick={() => setLightboxOpen(false)}
          />

          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} image viewer`}
            tabIndex={-1}
            className="relative w-full max-w-6xl outline-none animate-zoom-in"
          >
            <div className="flex items-center justify-between pb-4">
              <p className="text-sm sm:text-base font-semibold text-foreground">
                {title}
                {canNavigate && (
                  <span className="ml-3 text-muted-foreground font-normal">
                    {activeIndex + 1} / {images.length}
                  </span>
                )}
              </p>
              <Button
                onClick={() => setLightboxOpen(false)}
                variant="destructive"
                size="icon"
                aria-label="Close image viewer"
              >
                <FaXmark />
              </Button>
            </div>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-muted shadow-2xl">
              <Image
                src={activeImage}
                alt={`${title} image ${activeIndex + 1} fullscreen`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {canNavigate && (
              <div className="mt-4 flex items-center justify-between">
                <Tooltip content="Previous Image" position="right">
                  <Button
                    onClick={goToPrev}
                    variant="icon"
                    size="icon"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </Button>
                </Tooltip>

                <Tooltip content="Next Image" position="left">
                  <Button
                    onClick={goToNext}
                    variant="icon"
                    size="icon"
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </Button>
                </Tooltip>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
