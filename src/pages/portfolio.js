/** Imports */
// Libraries
import React from 'react'

// Components
import { Nav, Footer } from '../components'
import { Helmet } from 'react-helmet'

/** Component - Portfolio */
export default () => {
  // Page Metadata
  const Metadata = (
    <Helmet>
      <title>Book Sadprasid | Portfolio</title>
    </Helmet>
  )

  return (
    <>
      {Metadata}
      <Nav />
      <header
        style={{
          height: '80vh',
          minHeight: 700,
          width: 'var(--large)',
          margin: '0 auto',
        }}
      ></header>
      <main>
        <section
          style={{
            backgroundColor: 'var(--white)',
            height: '80vh',
            minHeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1>What I Do</h1>
        </section>
        <section
          style={{
            height: '500px',
            minHeight: 700,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1>Testimonials</h1>
        </section>
      </main>
      <Footer bc="var(--white)" pt={29} pb={16} />
    </>
  )
}
