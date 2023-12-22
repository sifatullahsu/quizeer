import Authentication from '@/components/Authentication'
import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'
import { useSession } from 'next-auth/react'

const HomePage: NextLayout = () => {
  const { data: session } = useSession()

  return <div>{!session ? <Authentication /> : <></>}</div>
}

export default HomePage

HomePage.getLayout = page => <MainLayout>{page}</MainLayout>
