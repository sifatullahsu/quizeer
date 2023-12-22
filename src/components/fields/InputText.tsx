type iProps = {
  label: string
  type?: 'text' | 'password'
  name: string
  placeholder?: string
  error?: string
  disabled?: boolean
  className?: string
}

const InputText = ({
  label,
  type = 'text',
  name,
  placeholder,
  error,
  disabled = false,
  className
}: iProps) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input input-bordered w-full max-w-xs ${className}`}
        disabled={disabled}
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
