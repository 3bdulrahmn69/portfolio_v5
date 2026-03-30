'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/button';

import { FaBars, FaXmark } from 'react-icons/fa6';

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show when scrolling up or at the very top, hide when scrolling down past 100px
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsMobileOpen(false); // Close mobile menu when scrolling down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500 rounded-full border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl ${
          isVisible ? 'top-6 opacity-100' : '-top-32 opacity-0'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 sm:px-8">
          {/* Part 1: Name */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-foreground hover:text-muted-foreground transition-colors shrink-0"
          >
            Abdulrahman.
          </Link>

          {/* Part 2: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className={`hover:text-foreground hover:scale-105 transition-all ${pathname === '/' ? 'text-primary font-bold' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:text-foreground hover:scale-105 transition-all ${pathname === '/about' ? 'text-primary font-bold' : ''}`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`hover:text-foreground hover:scale-105 transition-all ${pathname === '/projects' ? 'text-primary font-bold' : ''}`}
            >
              Projects
            </Link>
          </nav>

          {/* Part 3: Contact & Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex font-bold"
            >
              Contact Me
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 origin-top transform ${
          isMobileOpen && isVisible
            ? 'scale-y-100 opacity-100 visible'
            : 'scale-y-0 opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center p-8 gap-6 text-lg font-bold text-foreground">
          <Link
            href="/"
            className={`hover:text-primary transition-colors w-full text-center py-2 ${pathname === '/' ? 'text-primary' : ''}`}
            onClick={() => setIsMobileOpen(false)}
          >
            Home
          </Link>
          <div className="h-px w-full bg-border/50" />
          <Link
            href="/about"
            className={`hover:text-primary transition-colors w-full text-center py-2 ${pathname === '/about' ? 'text-primary' : ''}`}
            onClick={() => setIsMobileOpen(false)}
          >
            About
          </Link>
          <div className="h-px w-full bg-border/50" />
          <Link
            href="/projects"
            className={`hover:text-primary transition-colors w-full text-center py-2 ${pathname === '/projects' ? 'text-primary' : ''}`}
            onClick={() => setIsMobileOpen(false)}
          >
            Projects
          </Link>
          <div className="h-px w-full bg-border/50 mt-2" />
          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="w-full mt-4 font-bold shadow-md"
            onClick={() => setIsMobileOpen(false)}
          >
            Contact Me
          </Button>
        </nav>
      </div>
    </>
  );
}
