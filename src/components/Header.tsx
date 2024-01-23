import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FiLogOut } from 'react-icons/fi'
import { IoHome } from 'react-icons/io5'
import userImg from '../assets/user.png'
import MenuItem from './MenuItem'

const Header = () => {
  const { data: session } = useSession()
  const { pathname } = useRouter()
  const pageName = pathname.split('/')[1]

  return (
    <div className={`bg-secondary`}>
      <div className="container py-10">
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-5">
            <Image src={userImg} alt="" className="w-[80px]" />
            <div className="">
              <div className="font-alegreya text-white font-semibold">{session?.user.name}</div>
              <div className="text-sm text-white">{session?.user.email}</div>
              <div className="badge badge-accent mb-2 text-[12px]">{session?.user.role}</div>
            </div>
          </div>
          <div>
            <ul className="menu menu-vertical header-menu lg:menu-horizontal bg-accent text-white rounded-box">
              <MenuItem href="/" active={pathname === '/'}>
                <IoHome /> Dashboard
              </MenuItem>
              {session?.user.role === 'admin' ? (
                <MenuItem href="/quizzes" active={pageName === 'quizzes'}>
                  Quizzes
                </MenuItem>
              ) : (
                <MenuItem href="/my-results" active={pageName === 'my-results'}>
                  My Results
                </MenuItem>
              )}
              <MenuItem href="/settings" active={pageName === 'settings'}>
                Settings
              </MenuItem>
              <li>
                <button
                  onClick={() => {
                    signOut({
                      redirect: true,
                      callbackUrl: '/'
                    })
                  }}
                >
                  <FiLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
