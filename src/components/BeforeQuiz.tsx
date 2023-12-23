import { iQuiz } from '@/types'
import React, { Dispatch } from 'react'
import { LuShieldCheck } from 'react-icons/lu'
import { RxLapTimer } from 'react-icons/rx'
import { TbMessageStar } from 'react-icons/tb'
import Heading from './Heading'

const BeforeQuiz = ({
  quiz,
  setIsStarted
}: {
  quiz: iQuiz
  setIsStarted: Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3">
        <Heading text={quiz.title} />
        <div className="mt-10">{quiz.description}</div>
      </div>
      <div className="col-span-2">
        <div className="flex justify-end items-center gap-5 text-sm text-center">
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
        </div>
        <div className="mt-10 text-right ">
          <button className="btn btn-secondary btn-sm" onClick={() => setIsStarted(prev => !prev)}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export default BeforeQuiz
