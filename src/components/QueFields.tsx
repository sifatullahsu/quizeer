import InputText from './fields/InputText'

const QueFields = ({ index, queCount }: { index: number; queCount: number }) => {
  return (
    <div className="border p-5 rounded-[6px] relative">
      <div className="space-x-1 mt-5 absolute right-5 -top-10">
        {queCount !== index && (
          <button type="button" className="btn btn-secondary btn-sm btn-square">
            +
          </button>
        )}

        <button type="button" className="btn btn-secondary btn-sm btn-square">
          -
        </button>
      </div>
      <InputText label="Title" name="title" required={true} className="!max-w-full" />
      <label className="form-control">
        <div className="label">
          <span className="label-text">Description</span>
        </div>
        <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Bio" required></textarea>
      </label>
      <InputText
        type="tel"
        label="Point (eg: 10)"
        name="total_point"
        className="!max-w-full"
        required={true}
      />
    </div>
  )
}

export default QueFields
