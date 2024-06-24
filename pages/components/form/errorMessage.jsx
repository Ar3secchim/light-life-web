import { useFormContext } from 'react-hook-form';

function ErrorMessage({ field }) {
  const {
    formState: { errors },
  } = useFormContext();

  function get(obj, path) {
    const travel = (regexp) =>
      String.prototype.split
        .call(path, regexp)
        .filter(Boolean)
        .reduce(
          (res, key) => (res !== null && res !== undefined ? res[key] : res),
          obj
        );

    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result;
  }

  const fielError = get(errors, field);
  return (
    <span className='font-sans text-sm text-error'>{fielError?.message}</span>
  );
}

export default ErrorMessage;
