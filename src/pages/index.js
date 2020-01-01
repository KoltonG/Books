/** Imports */
// Libraries
import React from 'react'

// Components
import { Nav } from '../components'
import { Helmet } from 'react-helmet'

/** Component - Landing */
export default () => {
  // Page Metadata
  const Metadata = (
    <Helmet>
      <title>Book Sadprasid</title>
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
      <footer
        style={{
          backgroundColor: 'var(--white)',
          height: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Footer</h1>
      </footer>
    </>
  )
}
