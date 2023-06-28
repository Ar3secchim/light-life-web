function Input(props) {
  return (
    <div className="form-control">
      {props.type === 'checkbox' ? (
        <label className=" flex justify-center">
          <input
            type="checkbox"
            checked={props?.checked}
            className="checkbox-accent checkbox"
          />
          <span className="label-text pl-4">{props.placeholder}</span>
        </label>
      ) : (
        <input
          type={props.type}
          placeholder={props?.placeholder}
          className="input border-gray-700 focus:input-accent"
        />
      )}
    </div>
  )
}

export default Input
