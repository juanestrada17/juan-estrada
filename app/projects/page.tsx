'use client'

import Image from 'next/image'
import avatarSel from '../../public/avatarSel.png'
import affirm from '../../public/affirm.png'
import jornalIntro from '../../public/journal.png'
import Link from 'next/link'
import { FaGithub, FaLocationArrow } from 'react-icons/fa'

export default function Projects() {
  return (
    <>
      <section className='py-20'>
        <div className='container'>
          <h1 className='text-lg font-bold'>Projects</h1>
          <h2 className='mt-8 text-lg font-bold'>New beginnings app</h2>
          <p>
            New Beginnings App is an mobile application that was created with
            the use of Flutter, Firebase and Firestore. It's a remake of a
            previously created version in Flutterflow and serves as a journal to
            families who are going through divorce to find peace through a step
            by step process
          </p>
          <p>Some of its features are: </p>
          <ul className='mt-4'>
            <li className='mt-2'>
              ✦The user can create an account and select an avatar from a list
              of gods and goddesses. This deity will display phrases of
              affirmation to the user.
            </li>
            <li className='mt-2'>
              ✦The user has access to a Journal with pictures and audios that
              has different activities each day
            </li>
            <li className='mt-2'>
              ✦The user can share and download a certificate of completion
            </li>
          </ul>

          <div className='mt-8 flex items-center justify-between'>
            <Image
              src={avatarSel}
              width={200}
              height={200}
              alt='avatarSel'
              className='mx-4'
            ></Image>
            <Image
              src={affirm}
              width={200}
              height={200}
              alt='affirm'
              className='mx-4'
            ></Image>
            <Image
              src={jornalIntro}
              width={200}
              height={200}
              alt='jornalIntro'
              className='mx-4'
            ></Image>
          </div>
          <div className='mt-4 border-b border-gray-300'></div>
          <div className='mt-2 flex flex-col'>
            <Link
              className='group duration-300" rounded-lg p-4 transition-colors hover:bg-gray-200 dark:hover:bg-gray-600'
              href={'https://github.com/juanestrada17/DSA'}
            >
              <h2 className='mt-10 text-lg font-bold'>
                Data Structures and Algorithms
              </h2>
              <div className='flex'>
                <p className='mt-2'>
                  This repository contains different approaches to leetcode
                  problems. It contains descriptions about data structures and
                  algorithms as well as guides with step by step on how to solve
                  problems using patterns.
                </p>
              </div>

              <FaGithub className='mt-4' size={50}></FaGithub>
            </Link>
          </div>
          <div className='mt-4 border-b border-gray-300'></div>
        </div>
      </section>
    </>
  )
}
