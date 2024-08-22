
export interface LabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

function Label(props : LabelProps) {
  return <label className="text-base font-medium text-gray-500" {...props} />;
}

export default Label;
