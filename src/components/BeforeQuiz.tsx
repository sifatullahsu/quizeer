import { iQuiz } from '@/types'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
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
  const { data: session } = useSession()
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
          <div className="space-x-3">
            <Link className="btn btn-sm" href="/">
              Back
            </Link>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setIsStarted(prev => !prev)}
              disabled={session?.user.role === 'admin'}
            >
              Start Quiz
            </button>
          </div>
          {session?.user.role === 'admin' && (
            <p className="text-xs text-red-500 mt-5">
              The admin is unable to initiate the quiz.
              <br />
              Please login as a performer.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default BeforeQuiz
