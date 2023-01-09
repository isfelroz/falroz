'use client'

import { FaHamburger, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

export default ({ children }) => {
  const [open, isOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <div
        className={`fixed backdrop-blur-xl bg-primary-black/95 radialBackground_alt top-0 h-screen w-[90%] transition-all ${
          open ? 'right-0' : '-right-[100%]'
        }`}
      >
        <div className="relative p-10 w-full h-full">
          <div
            className="absolute top-3 right-3 cursor-pointer"
            onClick={() => isOpen(false)}
          >
            <FaTimes size={'25px'} />
          </div>
          {children}
        </div>
      </div>
      <div className="lg:hidden cursor-pointer" onClick={() => isOpen(true)}>
        <FaHamburger size={'25px'} />
      </div>
    </div>
  )
}
