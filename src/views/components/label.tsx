
export interface LabelProps
  extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> { }

function Label(props: LabelProps) {
  return <label className="text-base text-gray-500 dark:text-white" {...props} />;
}

export default Label;
