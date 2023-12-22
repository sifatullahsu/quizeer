import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'

const QuizSinglePage: NextLayout = () => {
  return (
    <div>
      <div>Quiz Single</div>
    </div>
  )
}

export default QuizSinglePage

QuizSinglePage.getLayout = page => <MainLayout>{page}</MainLayout>
