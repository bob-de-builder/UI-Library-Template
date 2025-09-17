import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { Loader } from '../loader';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    defaultVariants: {
      intent: 'primary',
      size: 'default',
    },
    variants: {
      intent: {
        danger:
          'border-red-600 bg-red-600 hover:bg-red-600/70 disabled:bg-red-600/70 text-white font-bold',
        'danger-outlined':
          'border border-red-600 text-red-600 hover:opacity-80 disabled:opacity-60',
        default: 'shadow  text-black',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary-500 underline-offset-4 hover:underline',
        neutral:
          'border border-primary-600 bg-white text-gray-900  focus-visible:outline-primary-600',
        outline:
          'border border-primary-600 text-primary-700 bg-white shadow-sm hover:bg-gray-100 hover:text-accent-foreground',
        primary:
          'bg-secondary-500 text-gray-900 hover:bg-secondary-600 focus-visible:outline-secondary-600',
        secondary:
          'bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600',
        text: 'text-primary-600 hover:text-primary-500 focus-visible:outline-primary-600 !border-0 !shadow-none',
      },
      size: {
        default: 'h-9 px-4 py-2',
        icon: 'h-9 w-9',
        'icon-lg':
          'h-[3rem] w-[3rem] flex justify-center items-center font-medium rounded-lg',
        'icon-sm':
          'h-[1.75rem] w-[1.75rem] flex justify-center items-center font-medium rounded-lg',
        lg: 'h-10 rounded-md px-8',
        md: 'py-[0.625rem] px-[1.5rem] text-[0.875rem] leading-[1.25rem] font-medium rounded-lg',
        pill: 'rounded py-1 px-2 !text-xs',
        sm: 'h-8 rounded-md px-3 text-xs',
      },
    },
  },
);

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
    useDiv?: boolean;
  };

const Button = ({
  children,
  title,
  isLoading,
  intent,
  className,
  useDiv = false,
  size,
  ...rest
}: ButtonProps) => {
  const _className = clsx(buttonVariants({ intent, size }), className);

  const { onClick } = rest;

  if (useDiv) {
    return (
      // @ts-expect-error Type 'MouseEventHandler<HTMLButtonElement> | undefined' is not assignable to type 'MouseEventHandler<HTMLDivElement> | undefined'.
      <div className={_className} onClick={onClick}>
        {children ?? title}
        {isLoading && (
          <span className="ml-2">
            <Loader size="sm" />
          </span>
        )}
      </div>
    );
  }

  return (
    <button className={_className} type="button" {...rest}>
      {children ?? title}
      {isLoading && (
        <span className="ml-2">
          <Loader size="sm" />
        </span>
      )}
    </button>
  );
};

export { Button, buttonVariants };
