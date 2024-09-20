import { cn } from '@app/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import ErrorMessage from '../errorMessage';
import Label from '../label';


const inputVariants = cva(
  'h-10 rounded-lg border px-2 font-sans font-light text-sm placeholder-secondary-dark-200 border-gray-100 focus:outline-gray-100 dark:bg-input dark:placeholder-primary', {
  variants: {
    sizeVariant: {
      default: 'h-10 px-2',
      sm: 'px-2 py-1 font-normal',
      md: 'px-4 py-2',
      xl: 'px-6 py-4',
    },
    error: {
      true: 'border-red-100 text-destructive border-destructive focus:border-destructive focus:outline-destructive',
    },
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  sizeVariant?: 'default' | 'sm' | 'md' | 'xl'
  error?: boolean;
  label: string;
  name: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ sizeVariant, error, label, name, className, ...props }, ref) => {
    const formContext = useFormContext();

    return (
      <>
        <Label htmlFor={name}>{label}</Label>
        <input
          className={cn(inputVariants({ error, sizeVariant, className }))}
          {...formContext?.register(name)}
          {...props}
          ref={ref}
        />
        <ErrorMessage error={formContext?.formState.errors} field={name} />
      </>
    );
  }
);

Input.displayName = 'Input';

export { Input };
