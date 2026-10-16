'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/site';
import Button from '@/components/ui/button';
import { FaCheck, FaRegCopy } from 'react-icons/fa6';

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — user can still select the text below
    }
  }

  return (
    <Button
      onClick={copy}
      variant="outline"
      size="sm"
      className="shrink-0 whitespace-nowrap"
      aria-live="polite"
    >
      {copied ? (
        <>
          <FaCheck /> Copied
        </>
      ) : (
        <>
          <FaRegCopy /> Copy
        </>
      )}
    </Button>
  );
}
