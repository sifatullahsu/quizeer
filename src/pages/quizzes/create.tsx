import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'

const CreateQuizPage: NextLayout = () => {
  return (
    <div>
      <div>Create Quiz</div>
    </div>
  )
}

export default CreateQuizPage

CreateQuizPage.getLayout = page => <MainLayout>{page}</MainLayout>
