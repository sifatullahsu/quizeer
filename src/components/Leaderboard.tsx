import { iPerformance } from '@/types'
import { formatDateTime } from '@/utils'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { LuShieldCheck } from 'react-icons/lu'
import { MdOutlineAssignment } from 'react-icons/md'
import { TbMessageStar } from 'react-icons/tb'

const Leaderboard = ({ performance }: { performance: iPerformance }) => {
  return (
    <div className="border p-8 rounded-[6px]">
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <div className="text-lg font-medium">{performance.users.name}</div>
          <div className="">{performance.users.email}</div>
        </div>
        <div className="col-span-3 flex justify-end items-center gap-5 text-sm text-center">
          <div>
            <MdOutlineAssignment className="text-xl inline" />
            <div className="mt-[6px]">{performance.correct_answer} Correct Answer</div>
          </div>
          <div>
            <TbMessageStar className="text-xl inline" />
            <div className="mt-[6px]">
              {performance.score} / {performance.total_point} Points
            </div>
          </div>
          <div>
            <LuShieldCheck className="text-xl inline" />
            <div className="mt-[6px] capitalize">{performance.status}</div>
          </div>
          <div>
            <FaRegCalendarAlt className="text-xl inline" />
            <div className="mt-[6px] capitalize">{formatDateTime(performance.createdAt)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
