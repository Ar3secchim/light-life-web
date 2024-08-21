import { useFormContext } from 'react-hook-form';
import { tv } from 'tailwind-variants';
import ErrorMessage from './errorMessage';
import Label from './label';

const inputVariants = tv({
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

function Input({
  size, error, label, name, className, ...props
}) {
  const formContext = useFormContext();

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <input
        htmlFor={name}
        id={name}
        className={inputVariants({ size, error, className })}
        {...formContext?.register(name)}
        {...props}
      />
      <ErrorMessage error={formContext?.formState.errors} field={name} />
    </>
  );
}
export default Input;
