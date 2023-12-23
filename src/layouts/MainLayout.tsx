import Header from '@/components/Header'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession()
  const isHidden = usePathname().startsWith('/battleground/')

  if (!session) return <div>{children}</div>

  return (
    <div>
      {!isHidden && <Header />}
      <div className={`${isHidden ? 'top-border' : ''}`}>
        <div className={`container py-16`}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
