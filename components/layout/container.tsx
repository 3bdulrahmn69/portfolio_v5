import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div
      className={`w-full max-w-7xl xl:max-w-350 px-6 sm:px-8 md:px-12 mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
