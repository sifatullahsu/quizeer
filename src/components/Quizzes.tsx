import { useGetQuizzesQuery } from '@/redux/api/quizApi'
import Heading from './Heading'
import Quiz from './Quiz'

const Quizzes = () => {
  const { data: quizzes, isLoading } = useGetQuizzesQuery({ query: undefined })

  if (isLoading) return <div>Loading</div>

  return (
    <div>
      <Heading text="Recommended Quizzes" />
      <div className="grid grid-cols-1 gap-5">
        {quizzes.data.map(quiz => (
          <Quiz key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  )
}

export default Quizzes
