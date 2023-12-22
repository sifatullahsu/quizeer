import Header from '@/components/Header'
import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession()

  if (!session) return <div>{children}</div>

  return (
    <div>
      <Header />
      <div className="container py-14">{children}</div>
    </div>
  )
}

export default MainLayout
