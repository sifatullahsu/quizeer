/* eslint-disable @typescript-eslint/no-explicit-any */
import { iQuizForm } from '@/types'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { TiMinus } from 'react-icons/ti'
import 'tailwindcss/tailwind.css'

const MyFormComponent = ({
  handleSubmission,
  theData = null,
  submitText
}: {
  handleSubmission: (data: iQuizForm) => void
  theData?: iQuizForm | null
  submitText: string
}) => {
  const [formData, setFormData] = useState<iQuizForm>(
    theData || {
      title: '',
      short_description: '',
      description: '',
      total_point: '',
      minimum_point: '',
      duration: '',
      questions: []
    }
  )

  const handleInputChange = (name: string, value: any) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleQuestionChange = (index: number, name: string, value: any) => {
    setFormData(prevData => ({
      ...prevData,
      questions: prevData.questions.map((question, i) =>
        i === index ? { ...question, [name]: value } : question
      )
    }))
  }

  const handleOptionChange = (qIndex: number, oIndex: number, name: string, value: any) => {
    setFormData(prevData => ({
      ...prevData,
      questions: prevData.questions.map((question, i) =>
        i === qIndex
          ? {
              ...question,
              options: question.options.map((option, j) =>
                j === oIndex ? { ...option, [name]: value } : option
              )
            }
          : question
      )
    }))
  }

  const addQuestion = () => {
    setFormData(prevData => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        {
          title: '',
          description: '',
          point: '',
          remark: '',
          options: [
            { text: '', is_correct: false },
            { text: '', is_correct: false },
            { text: '', is_correct: false }
          ]
        }
      ]
    }))
  }

  const removeQuestion = (index: number) => {
    setFormData(prevData => ({
      ...prevData,
      questions: prevData.questions.filter((_, i) => i !== index)
    }))
  }

  const addOption = (qIndex: number) => {
    setFormData(prevData => ({
      ...prevData,
      questions: prevData.questions.map((question, i) =>
        i === qIndex
          ? {
              ...question,
              options: [...question.options, { text: '', is_correct: false }]
            }
          : question
      )
    }))
  }

  const removeOption = (qIndex: number, oIndex: number) => {
    setFormData(prevData => ({
      ...prevData,
      questions: prevData.questions.map((question, i) =>
        i === qIndex
          ? {
              ...question,
              options: question.options.filter((_, j) => j !== oIndex)
            }
          : question
      )
    }))
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        handleSubmission(formData)
      }}
    >
      <div className="grid grid-cols-2 gap-20">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Title
            <input
              type="text"
              value={formData.title}
              onChange={e => handleInputChange('title', e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Short Description
            <input
              type="text"
              value={formData.short_description}
              onChange={e => handleInputChange('short_description', e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Description (optional)
            <textarea
              value={formData.description}
              rows={5}
              onChange={e => handleInputChange('description', e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </label>
          <div className="grid grid-cols-3 gap-5">
            <label className="block text-sm font-medium text-gray-700">
              Total Point
              <input
                type="number"
                value={formData.total_point}
                onChange={e => handleInputChange('total_point', parseInt(e.target.value))}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Minimum Point
              <input
                type="number"
                value={formData.minimum_point}
                onChange={e => handleInputChange('minimum_point', parseInt(e.target.value))}
                max={formData.total_point}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Duration (in min)
              <input
                type="number"
                value={formData.duration}
                onChange={e => handleInputChange('duration', parseInt(e.target.value))}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </label>
          </div>
          <p className="text-gray-500 text-xs">Note: Duration is for future functionalities.</p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-2">Questions</h2>
          {formData.questions.map((question, qIndex) => (
            <div key={qIndex} className="mb-4 border p-10">
              <div className="relative space-y-2">
                <button
                  type="button"
                  onClick={() => removeQuestion(qIndex)}
                  className="btn btn-warning btn-xs absolute -top-7 right-0"
                >
                  <TiMinus /> Remove
                </button>
                <label className="block text-sm font-medium text-gray-700">
                  Question Title
                  <input
                    type="text"
                    name={`questions[${qIndex}].title`}
                    value={question.title}
                    onChange={e => handleQuestionChange(qIndex, 'title', e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Description (optional)
                  <input
                    type="text"
                    name={`questions[${qIndex}].description`}
                    value={question.description}
                    onChange={e => handleQuestionChange(qIndex, 'description', e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </label>
                <div className="grid grid-cols-2 gap-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Point
                    <input
                      type="number"
                      name={`questions[${qIndex}].point`}
                      value={question.point}
                      onChange={e => handleQuestionChange(qIndex, 'point', parseInt(e.target.value))}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </label>
                  <label className="block text-sm font-medium text-gray-700">
                    Remark (optional)
                    <input
                      type="text"
                      name={`questions[${qIndex}].remark`}
                      value={question.remark}
                      onChange={e => handleQuestionChange(qIndex, 'remark', e.target.value)}
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </label>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-medium mb-1">Options</h3>
                {question.options.map((option, oIndex) => (
                  <div key={oIndex} className="mb-3 relative">
                    <label className="block text-sm font-medium text-gray-700">
                      <span className="absolute -left-4 top-[10px] text-gray-400">{oIndex + 1}</span>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="toggle toggle-success toggle-sm"
                          checked={option.is_correct}
                          onChange={e => handleOptionChange(qIndex, oIndex, 'is_correct', e.target.checked)}
                        />
                        <input
                          type="text"
                          name={`questions[${qIndex}].options[${oIndex}].text`}
                          value={option.text}
                          onChange={e => handleOptionChange(qIndex, oIndex, 'text', e.target.value)}
                          className="ml-2 p-2 w-full border rounded-md pr-12"
                          required
                        />
                      </div>
                    </label>
                    <button
                      type="button"
                      onClick={() => removeOption(qIndex, oIndex)}
                      className="btn btn-warning btn-xs absolute top-2 right-2"
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addOption(qIndex)}
                  className="btn btn-success btn-xs mt-3"
                >
                  <FaPlus /> Add Option
                </button>
              </div>
            </div>
          ))}
          <button type="button" onClick={addQuestion} className="mt-4 btn btn-success btn-xs">
            <FaPlus /> Add Question
          </button>
        </div>
      </div>

      <button type="submit" className="mt-6 btn btn-secondary px-10">
        {submitText}
      </button>
    </form>
  )
}

export default MyFormComponent
/* 
{
  title: '',
  description: '',
  point: '',
  remark: '',
  options: [
    { text: '', is_correct: false },
    { text: '', is_correct: false },
    { text: '', is_correct: false }
  ]
}
*/
