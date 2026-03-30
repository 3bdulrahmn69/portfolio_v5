'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/button';
import { FaArrowUp } from 'react-icons/fa6';

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 260);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed right-5 bottom-5 sm:right-8 sm:bottom-8 z-40">
      <Button
        aria-label="Go to top"
        variant="icon"
        size="icon"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-primary text-primary-foreground border-primary/50 shadow-lg shadow-primary/25"
      >
        <FaArrowUp />
      </Button>
    </div>
  );
}
