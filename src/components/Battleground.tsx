import { useCreatePerformanceMutation } from '@/redux/api/performanceApi'
import { iQuestion, iQuiz } from '@/types'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { enqueueSnackbar } from 'notistack'
import { useState } from 'react'
import submit from '../assets/submit.png'
import Heading from './Heading'

type iState = {
  questions: iQuestion[]
  max: number
  current: number
  answers: {
    id: string
    options: string[]
    isCorrect: boolean
    mark: number
  }[]
  isSubmitted: boolean
  currentCurrected: number
  currentScore: number
}

const Battleground = ({ quiz }: { quiz: Required<iQuiz> }) => {
  const { data: session } = useSession()
  const [createPerformance, { isLoading }] = useCreatePerformanceMutation()

  const [data, setData] = useState<iState>({
    questions: quiz.questions,
    max: quiz.questions.length > 0 ? quiz.questions.length - 1 : 0,
    current: 0,
    answers:
      quiz.questions.length > 0
        ? [
            {
              id: quiz.questions[0].id,
              options: [],
              isCorrect: false,
              mark: 0
            }
          ]
        : [],
    isSubmitted: false,
    currentCurrected: 0,
    currentScore: 0
  })

  const nextHandler = async () => {
    const getCurrentAnswer = data.answers[data.current]
    if (getCurrentAnswer.isCorrect) {
      enqueueSnackbar('The answer is correct.', { variant: 'success' })
    } else {
      enqueueSnackbar('The answer is incorrect.', { variant: 'error' })
    }

    setData(prev => {
      if (prev.max === prev.current) return { ...prev }

      const current = prev.current + 1
      const answer = {
        id: quiz.questions[prev.current + 1].id,
        options: [],
        isCorrect: false,
        mark: 0
      }

      return { ...prev, current, answers: [...prev.answers, answer] }
    })

    if (data.current === data.max) {
      const correct_answer = data.answers.filter(i => i.isCorrect === true)
      const score = correct_answer.map(i => i.mark).reduce((acc, num) => acc + num, 0)
      const result = {
        user_id: session?.user.id,
        quiz_id: quiz.id,
        total_questions: quiz.questions.length,
        total_point: quiz.total_point,
        minimum_point: quiz.minimum_point,
        correct_answer: correct_answer.length,
        score: score,
        status: quiz.minimum_point <= score ? 'passed' : 'failed'
      }

      const res = await createPerformance({ data: result }).unwrap()

      if (res.success) {
        enqueueSnackbar('Task submitted successfully.', { variant: 'success' })
        setData(prev => ({
          ...prev,
          isSubmitted: true,
          currentScore: score,
          currentCurrected: correct_answer.length
        }))
      } else {
        enqueueSnackbar('Something is wrong. Submit again.', { variant: 'error' })
      }
    }
  }

  const changeHandler = (id: string, isChecked: boolean) => {
    const current = data.answers[data.current]
    const question = data.questions[data.current]

    if (isChecked) {
      current.options.push(id)
    } else {
      current.options = current.options.filter(item => item !== id)
    }

    const currectAnswer = question.options?.filter(i => i.is_correct === true)
    const checking = currectAnswer?.filter(i => current.options.includes(i.id)).length

    const currentOptionsLength = current.options.length
    const currectAnswerLength = currectAnswer?.length

    const isCorrect = currentOptionsLength === currectAnswerLength && currentOptionsLength === checking

    if (isCorrect) {
      current.isCorrect = true
      current.mark = question.point
    } else {
      current.isCorrect = false
      current.mark = 0
    }
  }

  const question = data.questions![data.current]

  return (
    <div>
      {!data.isSubmitted ? (
        <div className="pb-5">
          <div className="text-right">
            {data.answers.length} / {data.questions.length}
          </div>
          <Heading text={question.title} className="mb-[10px]" />
          <p>{question.description}</p>
          <div className="max-w-2xl">
            {question.options?.map(option => (
              <div key={option.id}>
                <div className="form-control hover:shadow-md">
                  <label className="label cursor-pointer justify-start space-x-3 border mt-2 p-5 rounded-[6px]">
                    <input
                      type="checkbox"
                      className="checkbox"
                      value={option.id}
                      onChange={e => changeHandler(e.target.value, e.target.checked)}
                    />
                    <span className="label-text">
                      <div>
                        {option.text} <span className="block font-">{`${option.is_correct}`}</span>
                      </div>
                    </span>
                  </label>
                </div>
              </div>
            ))}
            <div className="text-right">
              <button
                className="btn btn-secondary mt-5 text-right"
                onClick={nextHandler}
                disabled={isLoading}
              >
                {isLoading && <span className="loading loading-spinner"></span>}
                {data.current === data.max ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Image src={submit} alt="" className="w-[130px] mx-auto" />
          <Heading text="Task submitted successfully." className="text-center mt-5" />
          <div className="max-w-xl mx-auto">
            <div className="overflow-x-auto">
              <table className="table border">
                <tbody>
                  <tr>
                    <th>Total Questions</th>
                    <td className="text-right">{quiz.questions.length}</td>
                  </tr>
                  <tr>
                    <th>Total Points</th>
                    <td className="text-right">{quiz.total_point}</td>
                  </tr>
                  <tr>
                    <th>Minumum Required Points</th>
                    <td className="text-right">{quiz.minimum_point}</td>
                  </tr>
                  <tr>
                    <th>Correct Answer</th>
                    <td className="text-right font-semibold">{data.currentCurrected}</td>
                  </tr>
                  <tr>
                    <th>Score</th>
                    <td className="text-right font-semibold">{data.currentScore}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td className="text-right font-semibold capitalize">
                      {quiz.minimum_point <= data.currentScore ? 'passed' : 'failed'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center">
              <Link href="/" className="btn btn-secondary btn-sm  mt-5">
                Visit Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Battleground
