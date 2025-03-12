import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Roboto } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Juan Estrada',
  description: 'Personal Developer Website Juan Estrada'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='hover:dark:text-white"'>
      <body
        className={`${roboto.className} mx-auto flex min-h-screen flex-col bg-white px-4 text-[18px] sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:mx-[250px]`}
      >
        <Navbar />
        <main className='flex-1'>{children} </main>
        <div className='my-2'>
          <Footer />
        </div>
      </body>
    </html>
  )
}
