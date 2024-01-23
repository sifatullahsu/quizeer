import Heading from '@/components/Heading'
import MyFormComponent from '@/components/MyFormComponent'
import MainLayout from '@/layouts/MainLayout'
import { useGetQuizQuery, useUpdateQuizMutation } from '@/redux/api/quizApi'
import { NextLayout, iQuizForm } from '@/types'
import { removeTimestamps } from '@/utils'
import { useRouter } from 'next/router'
import { enqueueSnackbar } from 'notistack'

const QuizSinglePage: NextLayout = () => {
  const { id } = useRouter().query
  const { data: quizInfo, isLoading } = useGetQuizQuery({ id })
  const [updateQuiz] = useUpdateQuizMutation()

  if (isLoading) return <div>Loading</div>

  const handleSubmission = async (stateData: iQuizForm) => {
    const res = await updateQuiz({ id, data: stateData }).unwrap()

    if (res.success) {
      enqueueSnackbar('Quiz update successfull.', { variant: 'success' })
    } else {
      enqueueSnackbar('Somthing is wrong, try again.', { variant: 'error' })
    }
  }

  return (
    <div>
      <Heading text="Update Quiz" />
      <MyFormComponent
        handleSubmission={handleSubmission}
        theData={removeTimestamps(quizInfo.data)}
        submitText="Update Now"
      />
    </div>
  )
}

export default QuizSinglePage

QuizSinglePage.getLayout = page => <MainLayout>{page}</MainLayout>
