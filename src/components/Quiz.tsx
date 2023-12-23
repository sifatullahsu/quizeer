import { iQuiz } from '@/types'
import Link from 'next/link'
import { FiEdit } from 'react-icons/fi'
import { LuShieldCheck } from 'react-icons/lu'
import { RxLapTimer } from 'react-icons/rx'
import { TbMessageStar } from 'react-icons/tb'

const Quiz = ({ quiz, adminView }: { quiz: iQuiz; adminView: boolean }) => {
  return (
    <div className="border p-8 rounded-[6px]">
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <div className="text-lg font-medium">{quiz.title}</div>
          <div className="">{quiz.short_description}</div>
        </div>
        <div className="col-span-3 flex justify-end items-center gap-5 text-sm text-center">
          <div>
            <RxLapTimer className="text-xl inline" />
            <div className="mt-[6px]">{quiz.duration} Minutes</div>
          </div>
          <div>
            <TbMessageStar className="text-xl inline" />
            <div className="mt-[6px]">{quiz.total_point} Points</div>
          </div>
          <div>
            <LuShieldCheck className="text-xl inline" />
            <div className="mt-[6px]">{quiz.minimum_point} Minimum</div>
          </div>
          <div className="ml-5">
            {!adminView ? (
              <Link href={`/battleground/${quiz.id}`} className="btn btn-secondary btn-sm">
                Start Quiz
              </Link>
            ) : (
              <Link href={`/quizzes/${quiz.id}/edit`} className="btn btn-secondary btn-sm">
                <FiEdit />
                Edit Quiz
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
