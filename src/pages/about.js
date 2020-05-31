/** Imports */
// Libraries
import React from 'react'

// Components
import { Card, Footer, Heading, Nav, Tag, Section } from '../components'
import { Helmet } from 'react-helmet'

/** Component - About */
export default () => {
  // Page Metadata
  const Metadata = (
    <Helmet>
      <title>Book Sadprasid | About Me</title>
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
        <Section style={{ textAlign: 'center' }} isShort>
          <Tag>Jack of all trades</Tag>
          <Heading type="h2">
            What else do I do?
            <br />
            The short answer is many things
          </Heading>
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              padding: '0 75px',
              gridColumnGap: 48,
              marginTop: 64,
            }}
          >
            <Card
              src="testimonial_1.png"
              name="Norra Cottrill"
              content="digital experience, digital products, website, branding, layout. Book gotta book, book,book."
              company="Alongside"
            />
            <Card
              src="testimonial_2.png"
              name="Norra Cottrill"
              content="digital experience, digital products, website, branding, layout. Book gotta book, book,book."
              company="Alongside"
            />
            <Card
              src="testimonial_3.png"
              name="Norra Cottrill"
              content="digital experience, digital products, website, branding, layout. Book gotta book, book,book."
              company="Alongside"
            />
          </div>
        </Section>
      </main>
      <Footer bc="var(--white)" pt={29} pb={16} />
    </>
  )
}
