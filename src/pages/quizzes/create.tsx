import Heading from '@/components/Heading'
import QuizForm from '@/components/QuizForm'
import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'

const CreateQuizPage: NextLayout = () => {
  return (
    <div>
      <Heading text="Create New Quiz" />
      <QuizForm />
    </div>
  )
}

export default CreateQuizPage

CreateQuizPage.getLayout = page => <MainLayout>{page}</MainLayout>
