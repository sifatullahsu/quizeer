import { useGetQuizzesQuery } from '@/redux/api/quizApi'
import { iQuiz } from '@/types'
import Quiz from './Quiz'

const Quizzes = ({ adminView = false }: { adminView?: boolean }) => {
  const { data: quizzes, isLoading } = useGetQuizzesQuery({ query: undefined })

  if (isLoading) return <div>Loading</div>

  return (
    <div className="grid grid-cols-1 gap-5">
      {quizzes.data.map((quiz: iQuiz) => (
        <Quiz key={quiz.id} quiz={quiz} adminView={adminView} />
      ))}
    </div>
  )
}

export default Quizzes
