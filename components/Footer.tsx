import React from 'react'
import { LiaCopyrightSolid } from 'react-icons/lia'

// Back to top
// Connect
// redirect to media
const Footer = () => {
  return (
    <div className='space-between flex'>
      <div className='ml-120 flex items-center text-lg 2xl:px-16'>
        <LiaCopyrightSolid className='mx-3' />
        <p>2025 | Juan Estrada</p>
      </div>
      <button className='rounded-lg border border-gray-500 px-4 py-2 text-lg text-gray-500 transition hover:bg-gray-100'>
        ↑ Go to top
      </button>
    </div>
  )
}

export default Footer
