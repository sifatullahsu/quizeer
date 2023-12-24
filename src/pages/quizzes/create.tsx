import Heading from '@/components/Heading'
import MyFormComponent from '@/components/MyFormComponent'
import MainLayout from '@/layouts/MainLayout'
import { useCreateQuizMutation } from '@/redux/api/quizApi'
import { NextLayout, iQuizForm } from '@/types'
import { useRouter } from 'next/router'
import { enqueueSnackbar } from 'notistack'

const CreateQuizPage: NextLayout = () => {
  const [createQuiz] = useCreateQuizMutation()
  const { push } = useRouter()

  const handleSubmission = async (stateData: iQuizForm) => {
    const res = await createQuiz({ data: stateData }).unwrap()

    if (res.success) {
      enqueueSnackbar('Quiz created successfull.', { variant: 'success' })
      push('/quizzes')
    } else {
      enqueueSnackbar('Somthing is wrong, try again.', { variant: 'error' })
    }
  }

  return (
    <div>
      <Heading text="Create New Quiz" />
      {/* <QuizForm /> */}
      <MyFormComponent handleSubmission={handleSubmission} />
    </div>
  )
}

export default CreateQuizPage

CreateQuizPage.getLayout = page => <MainLayout>{page}</MainLayout>
