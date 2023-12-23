import Battleground from '@/components/Battleground'
import BeforeQuiz from '@/components/BeforeQuiz'
import MainLayout from '@/layouts/MainLayout'
import { useGetQuizQuery } from '@/redux/api/quizApi'
import { NextLayout, iQuiz } from '@/types'
import { useRouter } from 'next/router'
import { useState } from 'react'

const BattlegroundPage: NextLayout = () => {
  const { id } = useRouter().query
  const { data, isLoading } = useGetQuizQuery({ id })

  const [isStarted, setIsStarted] = useState(false)

  if (isLoading) return <div>Loading</div>
  if (!data?.data) return <div>Fetched faild. Relaod</div>

  const quiz = data.data as Required<iQuiz>

  return (
    <div>
      {isStarted ? <Battleground quiz={quiz} /> : <BeforeQuiz quiz={quiz} setIsStarted={setIsStarted} />}
    </div>
  )
}

export default BattlegroundPage

BattlegroundPage.getLayout = page => <MainLayout>{page}</MainLayout>
