import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
        className={`${geistSans.variable} ${geistMono.variable} mx-auto flex min-h-screen flex-col bg-white px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:mx-[250px]`}
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
