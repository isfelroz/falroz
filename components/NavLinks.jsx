'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLinkItem = ({ active, link }) => {
  const classes = active ? 'border-primary' : 'border-transparent'

  return (
    <Link
      className={`${classes} text-white border-b-2 hover:text-primary hover:border-b-2 hover:border-primary`}
      href={link.href}
      prefetch={false}
    >
      {link.label}
    </Link>
  )
}

export default ({ links, classes }) => {
  if (!links?.length) return
  const pathname = usePathname()

  return (
    <div className={`flex items-center ${classes}`}>
      {links.map((link, key) => (
        <NavLinkItem link={link} active={pathname === link.href} key={key} />
      ))}
    </div>
  )
}
