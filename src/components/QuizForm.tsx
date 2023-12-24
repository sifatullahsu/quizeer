import { iQuestion } from '@/types'
import { useState } from 'react'
import QueFields from './QueFields'
import Form from './fields/Form'
import InputText from './fields/InputText'

const QuizForm = () => {
  const [queCount, setQueCount] = useState(5)
  const [queData, setQueData] = useState<Pick<iQuestion, 'title' | 'description' | 'options'>>([])

  const createArray = (length: number): number[] => {
    return Array.from({ length }, (_, index) => index + 1)
  }

  const submitHandler = () => {}
  return (
    <div>
      <Form submitHandler={submitHandler}>
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-3">
            <InputText label="Title" name="title" required={true} />
            <InputText label="Short Description" name="short_description" required={true} />
            <label className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 w-full max-w-xs "
                placeholder="Bio"
                required
              ></textarea>
            </label>
            <InputText type="tel" label="Total Point e.g: 100" name="total_point" required={true} />
            <InputText type="tel" label="Minimum Point e.g: 40" name="total_point" required={true} />
            <InputText type="tel" label="Duration e.g: 45" name="duration" required={true} />
          </div>
          <div>
            {createArray(queCount).map((i, index) => (
              <div key={i}>
                <div>{i}</div>
                <QueFields index={i} queCount={queCount} />
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default QuizForm
