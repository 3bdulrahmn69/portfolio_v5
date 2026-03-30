import { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
}

export default function Tooltip({ children, content }: TooltipProps) {
  return (
    <div className="group/tooltip relative inline-flex justify-center items-center">
      {children}
      <div className="absolute bottom-full mb-2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none z-50 flex flex-col items-center">
        <div className="bg-foreground text-background text-xs font-bold px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap">
          {content}
        </div>
        {/* Tooltip Arrow */}
        <div className="w-2 h-2 bg-foreground transform rotate-45 -mt-1" />
      </div>
    </div>
  );
}
