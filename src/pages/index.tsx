import Authentication from '@/components/Authentication'
import Heading from '@/components/Heading'
import Quizzes from '@/components/Quizzes'
import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'
import { useSession } from 'next-auth/react'

const HomePage: NextLayout = () => {
  const { data: session } = useSession()

  return (
    <div>
      {!session ? (
        <Authentication />
      ) : session.user.role === 'admin' ? (
        <>
          <Heading text="Quiz Dashboard" />
        </>
      ) : (
        <>
          <Heading text="Recommended Quizzes" />
          <Quizzes></Quizzes>
        </>
      )}
    </div>
  )
}

export default HomePage

HomePage.getLayout = page => <MainLayout>{page}</MainLayout>
