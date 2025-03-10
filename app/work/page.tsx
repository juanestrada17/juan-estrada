export default function Work() {
  return (
    <>
      <section className='py-20'>
        <div className='container'>
          <h1 className='text-lg font-bold'>Work</h1>
          <div>
            <h2 className='mt-8 text-lg font-bold'> Giatec Scientific</h2>
            <p> Software Developer</p>
            <p> Jan 2023 - Oct 2023</p>

            <p className='mt-2'>
              I worked as a software developer at Giatec Scientific in Ottawa.
              There I worked on a web application by contributing to the
              creation of multiple features such as graphs, tables and insights
              to display customers data.
            </p>

            <ul className='mt-2'>
              <li className='mt-2'>
                ✦Created a script to generate a demo account that was used by
                the sales department to display our product
              </li>
              <li className='mt-2'>
                ✦Built endpoints with drizzle ORM and Postgress that fetched
                cost savings and opportunities for optimization from using our
                software
              </li>
              <li className='mt-2'>
                ✦Made graphs and tables with the use of TanStack to display
                insights about customers data
              </li>
              <li className='mt-2'>
                ✦Established the base for the documentation of our application
                with the use of Zod schemas and OpenAPI
              </li>
              <li className='mt-2'>
                ✦Worked on a microservice and a script to seed data for one of
                our features
              </li>
            </ul>
          </div>

          <div>
            <h2 className='mt-8 text-lg font-bold'> Smart Academy</h2>
            <p> ESL teacher</p>
            <p> Jun 2018 - Dec 2022</p>

            <p className='mt-2'>
              Altough my biggest passion right now is in tech. I also have a
              love for languages. Before getting into computer programming I
              worked as an English teacher for adults in a language academy.
            </p>

            <ul className='mt-2'>
              <li className='mt-2'>
                ✦Created workshops and communicative clubs where I discussed
                various topics such as literature, cinema, culture, food, etc.
              </li>
              <li className='mt-2'>
                ✦Devised activities to help transfer knowledge more effectively
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
