import Heading from '@/components/Heading'
import Quizzes from '@/components/Quizzes'
import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'

const QuizzesPage: NextLayout = () => {
  return (
    <div>
      <Heading text="Quizzes" link="/quizzes/create" linkLabel="Create New Quiz" />
      <Quizzes adminView={true} />
    </div>
  )
}

export default QuizzesPage

QuizzesPage.getLayout = page => <MainLayout>{page}</MainLayout>
