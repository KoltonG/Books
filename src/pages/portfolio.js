/** Imports */
// Libraries
import React from 'react'

// Styles
import { css } from '@emotion/core'

// Components
import { Card, Footer, Heading, Nav, Section, Tag } from '../components'
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
        <Section pt={140} bc="var(--white)">
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-column-gap: 120px;
              padding: 0 75px;
              margin-bottom: 72px;
            `}
          >
            <div>
              <Tag>What I Do</Tag>
              <h2>A few reasons why I might be the right fit</h2>
              <p>
                digital experience, digital products, website, branding, layout
              </p>
            </div>
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 100px;
                grid-row-gap: 40px;
              `}
            >
              <div>
                {/* TODO: Images seem pixelated */}
                <img
                  alt="tag"
                  loading="lazy"
                  src="tag.png"
                  css={css`
                    height: 60px;
                  `}
                />
                <h4>Interface Design</h4>
                <p>
                  digital experience, digital products, website, branding,
                  layout. Book gotta book, book,book. digital experience,
                  digital products, website, branding, layout. Book gotta book,
                  book,book
                </p>
              </div>
              <div>
                <img
                  alt="box"
                  loading="lazy"
                  src="box.png"
                  css={css`
                    height: 60px;
                  `}
                />
                <h4>Interface Design</h4>
                <p>
                  digital experience, digital products, website, branding,
                  layout. Book gotta book, book,book. digital experience,
                  digital products, website, branding, layout. Book gotta book,
                  book,book
                </p>
              </div>
              <div>
                <img
                  alt="chat"
                  loading="lazy"
                  src="chat.png"
                  css={css`
                    height: 60px;
                  `}
                />
                <h4>Interface Design</h4>
                <p>
                  digital experience, digital products, website, branding,
                  layout. Book gotta book, book,book. digital experience,
                  digital products, website, branding, layout. Book gotta book,
                  book,book
                </p>
              </div>
              <div>
                <img
                  alt="connection"
                  loading="lazy"
                  src="connection.png"
                  css={css`
                    height: 60px;
                  `}
                />
                <h4>Interface Design</h4>
                <p>
                  digital experience, digital products, website, branding,
                  layout. Book gotta book, book,book. digital experience,
                  digital products, website, branding, layout. Book gotta book,
                  book,book
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 css={{ marginLeft: 75 }}>Work With:</h3>
            <div
              css={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridColumnGap: 16,
                div: {
                  display: 'flex',
                  alignItems: 'center',
                },
                img: {
                  width: '100%',
                },
              }}
            >
              <div>
                <img
                  alt="Ignite Fredericton"
                  loading="lazy"
                  src="ignite_fredericton.png"
                />
              </div>
              <div>
                <img alt="Planet Hatch" loading="lazy" src="planet_hatch.png" />
              </div>
              <div>
                <img
                  alt="Immigration Fredericton"
                  loading="lazy"
                  src="immigration_fredericton.png"
                />
              </div>
              <div>
                <img
                  alt="Knowledge Park"
                  loading="lazy"
                  src="knowledge_park.png"
                />
              </div>
              <div>
                <img
                  alt="Ignite Fredericton"
                  loading="lazy"
                  src="ignite_fredericton.png"
                />
              </div>
            </div>
          </div>
        </Section>
        <Section style={{ textAlign: 'center' }} isShort>
          <Tag>Testimonials</Tag>
          <Heading type="h2" isNarrow>
            Human-centred Digital Design & Development
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
