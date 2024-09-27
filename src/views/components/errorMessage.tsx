type ErrorMessageProps = {
  field?: string;
  error?: { [key: string]: any };
};

function ErrorMessage({ field, error }: ErrorMessageProps) {
  function get(obj: any, path: string) {
    const travel = (regexp: RegExp) => String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj,
      );

    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result;
  }

  const fieldString = field || '';
  const fielError = get(error, fieldString);
  return (
    <span className="font-sans text-sm text-destructive">
      {fielError?.message}
    </span>
  );
}

export default ErrorMessage;
