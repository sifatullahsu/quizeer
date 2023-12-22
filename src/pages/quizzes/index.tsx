import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'

const QuizzesPage: NextLayout = () => {
  return (
    <div>
      <div>QuizzesPage</div>
    </div>
  )
}

export default QuizzesPage

QuizzesPage.getLayout = page => <MainLayout>{page}</MainLayout>
