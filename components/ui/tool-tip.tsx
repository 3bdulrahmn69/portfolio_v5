import { ReactNode } from 'react';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: TooltipPosition;
}

export default function Tooltip({
  children,
  content,
  position = 'top',
}: TooltipProps) {
  const positionClasses = {
    top: 'bottom-full mb-2 flex-col items-center',
    bottom: 'top-full mt-2 flex-col-reverse items-center',
    left: 'right-full mr-2 flex-row-reverse items-center',
    right: 'left-full ml-2 flex-row items-center',
  };

  const arrowClasses = {
    top: 'w-2 h-2 bg-foreground rotate-45 -mt-1',
    bottom: 'w-2 h-2 bg-foreground rotate-45 -mb-1',
    left: 'w-2 h-2 bg-foreground rotate-45 -ml-1',
    right: 'w-2 h-2 bg-foreground rotate-45 -mr-1',
  };

  return (
    <div className="group/tooltip relative inline-flex justify-center items-center">
      {children}

      <div
        className={`absolute opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none z-50 flex ${positionClasses[position]}`}
      >
        <div className="bg-foreground text-background text-xs font-bold px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap">
          {content}
        </div>

        {/* Arrow */}
        <div className={arrowClasses[position]} />
      </div>
    </div>
  );
}
