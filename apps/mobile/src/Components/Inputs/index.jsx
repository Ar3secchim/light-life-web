function Input(props) {
  return (
    <div className="form-control">
      {props.type === 'checkbox' ? (
        <label className=" flex justify-center">
          <input
            type="checkbox"
            checked={props?.checked}
            className="checkbox checkbox-accent"
          />
          <span className="label-text pl-4">{props.placeholder}</span>
        </label>
      ) : (
        <input
          type={props.type}
          placeholder={props?.placeholder}
          className="input focus:input-accent border-gray-700"
        />
      )}
    </div>
  )
}

export default Input
