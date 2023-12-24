type iProps = {
  label: string
  type?: 'text' | 'password' | 'tel'
  name: string
  placeholder?: string
  defaultValue?: string
  error?: string
  disabled?: boolean
  required?: boolean
  className?: string
}

const InputText = ({
  label,
  type = 'text',
  name,
  placeholder,
  defaultValue,
  error,
  disabled = false,
  required = false,
  className
}: iProps) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`input input-bordered w-full max-w-xs ${className}`}
        disabled={disabled}
        required={required}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt">{error}</span>
        </label>
      )}
    </div>
  )
}

export default InputText
