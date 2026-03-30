import Link from 'next/link';
import { cn } from '@/lib/utils';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'icon'
  | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
};

type LinkButtonProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
    prefetch?: boolean;
  };

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-primary-foreground border border-primary/70 shadow-md shadow-primary/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25',
  secondary:
    'bg-secondary text-secondary-foreground border border-border hover:bg-muted hover:border-primary/30 hover:-translate-y-0.5',
  outline:
    'bg-background text-foreground border border-border hover:border-primary/50 hover:text-primary hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-foreground border border-transparent hover:bg-muted/70 hover:border-border',
  icon: 'bg-secondary text-secondary-foreground border border-border shadow-sm hover:bg-muted hover:border-primary/40 hover:text-primary hover:-translate-y-0.5',
  destructive:
    'bg-destructive text-destructive-foreground border border-destructive/70 shadow-md shadow-destructive/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-destructive/25',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-base',
  icon: 'h-12 w-12 p-0',
};

function isExternalHref(href: string): boolean {
  return /^(https?:\/\/|mailto:|tel:)/.test(href);
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    'relative inline-flex items-center justify-center gap-2 rounded-full font-semibold',
    'transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'overflow-hidden before:pointer-events-none before:absolute before:inset-y-0 before:-left-1/3 before:w-1/3 before:-skew-x-12 before:bg-white/20 before:opacity-0 hover:before:animate-[button-shine_650ms_ease-out_forwards]',
    'disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ('href' in props && typeof props.href === 'string') {
    const { href, prefetch, target, rel, ...anchorProps } = props;
    const external = isExternalHref(href) || href.startsWith('#');

    if (disabled) {
      return (
        <span aria-disabled className={classes}>
          {children}
        </span>
      );
    }

    if (external) {
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? (rel ?? 'noopener noreferrer') : rel}
          className={classes}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        prefetch={prefetch}
        className={classes}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  const { type, ...buttonProps } = props as NativeButtonProps;

  return (
    <button
      type={type ?? 'button'}
      disabled={disabled}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
