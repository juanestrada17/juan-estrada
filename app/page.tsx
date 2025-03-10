import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <section className='py-20'>
        <div className='container'>
          <h1 className='text-md font-bold'>Juan Estrada</h1>
          <h2 className='text-lg font-bold'>Software Developer</h2>
          <p className='mt-4 italic'>
            I am a passionate sofware developer constatly eager to learn more. I
            am a problem solver and love the thrill of constantly learning
            something new. I find it fascinating how much can be accomplished
            with today's frameworks and feel enthusiastic about the future in
            tech
          </p>
          <p className='mt-4'>
            I enjoy creating things, seeing new features come to live on
            production side after going through the challenges of coding I
            believe is very satisfactory. I tend to be very passionate about the
            projects I work on. When I start working on something I try to do
            everything so that it shines and comes to life
          </p>

          <p className='mt-4'>
            This is a personal website to share my work and projects
          </p>

          <div className='mt-12'>
            <div className='flex items-center justify-between'>
              <h1 className='text-md font-bold'>Work</h1>
              <Link
                href={'/work'}
                className='cursor-pointer font-bold hover:bg-gray-200'
              >
                See all work
              </Link>
            </div>
            <h2 className='text-lg font-bold'>Giatec Scientific</h2>
            <p>Software Developer</p>
            <p>Jan 2024 - Oct 2024</p>
            <p className='mt-2'>
              I worked as a Software developer at Giatec where I created
              endpoints, React features and scripts for our product.
            </p>
          </div>

          <div className='mt-12'>
            <div className='flex items-center justify-between'>
              <h1 className='text-md font-bold'>Education</h1>
              <Link
                href={'/education'}
                className='cursor-pointer font-bold hover:bg-gray-200'
              >
                See all studies
              </Link>
            </div>
            <h2 className='text-lg font-bold'>Algonquin College</h2>
            <p>Computer Programming</p>
            <p>Jan 2023 - Jan 2025</p>
            <p className='mt-4'>
              My most recent education was at Algonquin College. Its focus was
              mostly on Object Oriented Programming with a big emphasis on Java
              and Databases. I had the chance to create multiple projects and a
              fully functional application with Firebase and Firestore
            </p>
          </div>

          <div className='mt-12'>
            <h1 className='text-lg font-bold'> Let's connect </h1>

            <p className='mt-4'>
              This is my professional social media. If you want to ask me
              questions about anything feel free to reach out!
            </p>

            <div className='mt-2 flex justify-start'>
              <Link
                href={'https://www.linkedin.com/in/juan-estrada-a72959125/'}
              >
                <FaLinkedin className='mx-1 h-6 w-6 cursor-pointer text-xl'></FaLinkedin>
              </Link>
              <Link href={'https://github.com/juanestrada17'}>
                <FaGithub className='text mx-1 h-6 w-6 cursor-pointer'></FaGithub>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
