'use client'
import React, { useState } from 'react'
import cat from '../public/cat.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FiMoon } from 'react-icons/fi'
import { MdOutlineWbSunny } from 'react-icons/md'
const Navbar = () => {
  // Implement persistence and check for user preference
  const [darkMode, setDarkMode] = useState(true)

  return (
    <nav className='fixed h-20 w-full shadow-xl'>
      <div className='flex h-full w-full items-center justify-between px-4 2xl:px-16'>
        <div className='ml-120'>
          <Link href={'/'}>
            <Image
              src={cat}
              alt='Logo'
              width='50'
              height='20'
              className='cursor-pointer'
              priority
            />
          </Link>
        </div>
        <div className='mr-120 flex items-center'>
          <ul className='hidden sm:flex'>
            <Link href={'/projects'}>
              <div className='flex items-center justify-center rounded-md py-1 hover:bg-gray-200'>
                <li className='mx-5 list-none text-lg'>Projects</li>
              </div>
            </Link>
            <Link href={'/work'}>
              <div className='flex items-center justify-center rounded-md py-1 hover:bg-gray-200'>
                <li className='mx-5 text-lg'>Work</li>
              </div>
            </Link>
            <Link href={'/education'}>
              <div className='flex items-center justify-center rounded-md py-1 hover:bg-gray-200'>
                <li className='mx-5 text-lg'>Education</li>
              </div>
            </Link>
            <div
              className='flex items-center justify-center rounded-md py-1 hover:bg-gray-200'
              onClick={() => setDarkMode(!darkMode)}
            >
              <li>
                {darkMode ? (
                  <FiMoon className='mx-5 text-lg'></FiMoon>
                ) : (
                  <MdOutlineWbSunny className='mx-5 text-lg' />
                )}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
