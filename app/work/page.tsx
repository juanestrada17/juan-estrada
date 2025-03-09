import Navbar from '@/components/Navbar'

export default function Work() {
  return (
    <>
      <section className='py-20'>
        <div className='container'>
          <h1 className='text-2xl font-bold'>Work</h1>
          <div>
            <h2> Giatec Scientific</h2>
            <p> Software Developer</p>
            <p> Jan 2023 - Oct 2023</p>

            <p>
              I worked as a software developer at Giatec where I created
              multiple features such as graphs, tables and insights to display
              customers data.
            </p>

            <ul>
              <li>
                ✦Created a script to generate a demo account that was used by
                the sales department to display our product
              </li>
              <li>
                ✦Built endpoints with drizzle ORM and Postgress that fetched
                cost savings and opportunities from using our software
              </li>
              <li>
                ✦Made graphs and tables with the use of TanStack to display
                insights about customers data
              </li>
              <li>
                ✦Established the base for the documentation of our application
                with the use of Zod schemas and OpenAPI
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
