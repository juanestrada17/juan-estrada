'use client'
import React, { useEffect, useState } from 'react'
import cat from '../public/cat.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FiMoon } from 'react-icons/fi'
import { MdOutlineWbSunny } from 'react-icons/md'
const Navbar = () => {
  // Implement persistence and check for user preference
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('theme')
    if (savedMode === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev
      if (newMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      return newMode
    })
  }
  return (
    <nav className='dark firefox:bg-opacity-90" sticky top-0 z-10 backdrop-blur-lg backdrop-filter'>
      <div className='flex h-full w-full items-center justify-between px-4 2xl:px-16'>
        <div className='flex h-18 w-18 items-center justify-center rounded-full bg-red-400'>
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
        <div className='flex items-center'>
          <ul className='hidden sm:flex'>
            <Link href={'/work'}>
              <div className='flex items-center justify-center rounded-md py-1 hover:bg-gray-200 dark:hover:bg-gray-600'>
                <li className='mx-3 text-lg'>Work</li>
              </div>
            </Link>
            <Link href={'/education'}>
              <div className='flex items-center justify-center rounded-md py-1 hover:bg-gray-200 dark:hover:bg-gray-600'>
                <li className='mx-3 text-lg'>Education</li>
              </div>
            </Link>
            <Link href={'/projects'}>
              <div className='flex items-center justify-center rounded-md py-1 hover:bg-gray-200 dark:hover:bg-gray-600'>
                <li className='mx-3 list-none text-lg'>Projects</li>
              </div>
            </Link>

            <div
              className='flex items-center justify-center rounded-md py-1 hover:bg-gray-200 dark:hover:bg-gray-600'
              onClick={toggleDarkMode}
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
