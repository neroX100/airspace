import React from 'react'
import { un_logo } from '../assets/images'


export default function Header() {
  return (
    <header className="relative p-4 flex flex-col justify-between gap-4 items-center bg-white">
        <div className="flex items-center gap-2">
        <img src={un_logo} alt="" className="absolute h-full w-full top-0 left-0 object-cover" />
        </div>
    </header>
  )
}
