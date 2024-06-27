import { useFormContext } from 'react-hook-form';
import { tv } from 'tailwind-variants';
import ErrorMessage from './errorMessage';

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
      true: 'border-error text-error focus:border-error focus:outline-error',
    },
  },
});

function Input({ size, error, name, className, ...props }) {
  const { register } = useFormContext();

  return (
    <>
      <input
        id={name}
        className={inputVariants({ size, error, className })}
        {...register(name)}
        {...props}
      />
      <ErrorMessage field={name} />
    </>
  );
}
export default Input;
