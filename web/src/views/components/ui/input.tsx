import { cn } from "@app/utils";
import { cva } from "class-variance-authority";
import * as React from "react";
import { useFormContext } from 'react-hook-form';

import ErrorMessage from "../errorMessage";
import Label from "../label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputVariants = cva({
  base: 'h-10 rounded-lg border bg-white px-2 font-sans font-light placeholder-secondary-dark-200 border-secondary-dark-100 focus:outline-primary',
  variants: {
    size: {
      default: 'h-10 px-2',
      sm: 'px-2 py-1 font-normal',
      md: 'px-4 py-2',
      xl: 'px-6 py-4',
    },
    error: {
      true: 'border-destructive text-destructive focus:border-destructive focus:outline-destructive',
    },
  },
});

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({  size, error, label, name, className, ...props }, ref) => {
    const formContext = useFormContext();

    return (
      <>
       <Label htmlFor={name}>{label}</Label>
        <input
          className={cn(inputVariants({ error, size, className }))}
          ref={ref}
          {...formContext?.register(name)}
          {...props}
        />
      <ErrorMessage error={formContext?.formState.errors} field={name} />

      </>
    )
  }
)
Input.displayName = "Input"

export { Input };

