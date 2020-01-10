/** Imports */
// Libraries
import React from 'react'

// Components
import { Nav, Header, Section, Footer, Tag, Button } from '../components'
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
      <Header>
        <Tag>Book Sadprasid</Tag>
        <h1>UI & UX Designer</h1>
        <p>digital experience, digital products, website, branding, layout</p>
        <center style={{ height: 660 }}></center>
      </Header>
      <main>
        <Section paddingTop={140} backgroundColor="var(--white)">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <div>
              <Tag>What I Do</Tag>
              <h2>A few reasons why I might be the right fit</h2>
              <p>
                digital experience, digital products, website, branding, layout
              </p>
            </div>
          </div>
        </Section>
        <Section style={{ textAlign: 'center' }}>
          <Tag>Testimonials</Tag>
          <h2>Human-centred Digital Design & Development</h2>
        </Section>
      </main>
      <Footer
        backgroundColor="var(--white)"
        paddingTop={230}
        paddingBottom={130}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Tag>Hire Me</Tag>
        <h2>Let me join your next project.</h2>
        <Button>Contact Me</Button>
      </Footer>
    </>
  )
}
