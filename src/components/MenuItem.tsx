import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

type iProps = {
  children: ReactElement | ReactNode
  href: string
  active?: boolean
}

const MenuItem = ({ children, href, active = false }: iProps) => {
  return (
    <li className={`${active && 'active'}`}>
      <Link href={href}>{children}</Link>
    </li>
  )
}

export default MenuItem
