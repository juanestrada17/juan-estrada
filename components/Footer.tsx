'use client'
import React from 'react'
import { LiaCopyrightSolid } from 'react-icons/lia'

// Back to top
// Connect
// redirect to media
const Footer = () => {
  return (
    <div className='flex h-full w-full items-center justify-between 2xl:px-10'>
      <div className='flex items-center text-sm'>
        <LiaCopyrightSolid className='mx-3' />
        <p>2025 | Juan Estrada</p>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className='cursor-pointer rounded-lg border border-gray-300 px-4 py-1 text-sm text-gray-400 transition hover:bg-gray-200'
      >
        Back to top
      </button>
    </div>
  )
}

export default Footer
