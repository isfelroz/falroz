'use client'

import { FaHamburger, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default ({ children, links }) => {
  const [open, isOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="lg:hidden">
      <div
        className={`fixed backdrop-blur-xl bg-primary-black/95 radialBackground_alt top-0 h-screen w-[90%] transition-all duration-500 ${
          open ? 'right-0' : '-right-[100%]'
        }`}
      >
        <div className="relative p-10 w-full h-full">
          <div
            className="absolute top-8 right-8 cursor-pointer"
            onClick={() => isOpen(false)}
          >
            <FaTimes size={'25px'} />
          </div>
          {links && links?.length && (
            <ul className="flex flex-col gap-24 h-full justify-center">
              {links.map((link, key) => (
                <li
                  onClick={() => isOpen(false)}
                  key={key}
                  className={`text-white drop-shadow font-bold uppercase text-4xl text-center `}
                >
                  <Link
                    className={`border-b-2 ${
                      pathname === link.href
                        ? 'border-primary'
                        : 'border-transparent'
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="lg:hidden cursor-pointer" onClick={() => isOpen(true)}>
        <FaHamburger size={'25px'} />
      </div>
    </div>
  )
}
