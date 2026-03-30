'use client';

import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import Button from '@/components/ui/button';
import Tooltip from '@/components/ui/tool-tip';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

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

  const activeImage = images[activeIndex] ?? image;

  const canNavigate = images.length > 1;

  function goToPrev() {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  function goToNext() {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }

  return (
    <section>
      <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-border bg-muted shadow-2xl">
        <Image
          src={activeImage}
          alt={`${title} gallery image ${activeIndex + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover"
          loading="eager"
        />

        {canNavigate && (
          <div className="absolute top-4 right-4 rounded-full px-3 py-1.5 text-xs font-semibold bg-background/85 border border-border backdrop-blur-md">
            {activeIndex + 1} / {images.length}
          </div>
        )}

        {canNavigate && (
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4">
            <Tooltip content="Previous Image">
              <Button
                onClick={goToPrev}
                variant="icon"
                size="icon"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </Button>
            </Tooltip>

            <Tooltip content="Next Image">
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
              className={`relative aspect-video rounded-xl overflow-hidden border transition-all ${
                index === activeIndex
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
    </section>
  );
}
