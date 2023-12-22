type iProps = {
  label: string
  loading?: boolean
  className?: string
  disabled?: boolean
}

const SubmitButton = ({ label, loading = false, disabled = false, className }: iProps) => {
  return (
    <div>
      <button type="submit" className={`btn btn-primary  ${className}`} disabled={disabled || loading}>
        {loading && <span className="loading loading-spinner"></span>}
        {label}
      </button>
    </div>
  )
}

export default SubmitButton
