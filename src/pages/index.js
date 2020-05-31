/** Imports */
// Libraries
import React from 'react'

// Components
import { Card, Footer, Header, Heading, Nav, Section, Tag } from '../components'
import { Helmet } from 'react-helmet'

// Styles
import { css } from '@emotion/core'

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
        <center
          css={css`
            height: 660px;
            position: relative;
            padding-top: 16px;
          `}
        >
          <img
            src="hero.png"
            css={css`
              height: 800px;
              margin-left: 48px;
            `}
            alt="hero"
          />
          <div
            css={css`
              position: absolute;
              top: 0;
              left: 6%;
              right: 6%;
              bottom: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <ul
              css={css`
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: calc(100% - 500px);
                grid-row-gap: 40px;

                li {
                  height: 100px;
                  width: 250px;
                  background-color: var(--white);
                  transition: box-shadow 0.2s;
                  cursor: pointer;
                  padding: 24px 16px;

                  color: var(--text-disable);

                  line {
                    stroke: var(--text-disable);
                  }
                  path {
                    fill: var(--text-disable);
                  }

                  :hover {
                    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

                    > div {
                      div:nth-of-type(1) p {
                        color: var(--light-gold);
                      }
                      div:nth-of-type(2) p {
                        color: var(--black);
                      }

                      line {
                        stroke: var(--light-gold);
                      }
                      path {
                        fill: var(--light-gold);
                      }
                    }
                  }

                  > div {
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    grid-column-gap: 16px;

                    div {
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    }

                    p {
                      transition: color 0.2s;
                    }

                    line {
                      transition: stroke 0.2s;
                    }

                    path {
                      transition: fill 0.2s;
                    }

                    div:nth-of-type(1) p {
                      margin: 0;
                      font-size: 30px;
                      line-height: 38px;
                      font-weight: bold;
                    }

                    div:nth-of-type(2) p {
                      margin: 0;
                      font-size: 12px;
                      text-align: left;
                      line-height: 16px;
                    }
                  }
                }
              `}
            >
              <li>
                <div>
                  <div>
                    <p>01</p>
                  </div>
                  <div>
                    <p>UX Workflow for Energy Dashboard</p>
                  </div>
                  <div>
                    <svg
                      width="45"
                      height="10"
                      viewBox="0 0 45 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y1="5" x2="37" y2="5" />
                      <path d="M44.5 5L36.25 9.33013V0.669873L44.5 5Z" />
                    </svg>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <p>02</p>
                  </div>
                  <div>
                    <p>UX Workflow for Energy Dashboard</p>
                  </div>
                  <div>
                    <svg
                      width="45"
                      height="10"
                      viewBox="0 0 45 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y1="5" x2="37" y2="5" />
                      <path d="M44.5 5L36.25 9.33013V0.669873L44.5 5Z" />
                    </svg>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <p>03</p>
                  </div>
                  <div>
                    <p>UX Workflow for Energy Dashboard</p>
                  </div>
                  <div>
                    <svg
                      width="45"
                      height="10"
                      viewBox="0 0 45 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y1="5" x2="37" y2="5" />
                      <path d="M44.5 5L36.25 9.33013V0.669873L44.5 5Z" />
                    </svg>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <p>04</p>
                  </div>
                  <div>
                    <p>UX Workflow for Energy Dashboard</p>
                  </div>
                  <div>
                    <svg
                      width="45"
                      height="10"
                      viewBox="0 0 45 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y1="5" x2="37" y2="5" />
                      <path d="M44.5 5L36.25 9.33013V0.669873L44.5 5Z" />
                    </svg>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <p>05</p>
                  </div>
                  <div>
                    <p>UX Workflow for Energy Dashboard</p>
                  </div>
                  <div>
                    <svg
                      width="45"
                      height="10"
                      viewBox="0 0 45 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y1="5" x2="37" y2="5" />
                      <path d="M44.5 5L36.25 9.33013V0.669873L44.5 5Z" />
                    </svg>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <p>06</p>
                  </div>
                  <div>
                    <p>UX Workflow for Energy Dashboard</p>
                  </div>
                  <div>
                    <svg
                      width="45"
                      height="10"
                      viewBox="0 0 45 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y1="5" x2="37" y2="5" />
                      <path d="M44.5 5L36.25 9.33013V0.669873L44.5 5Z" />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </center>
      </Header>
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
                  src="box.png"
                  loading="lazy"
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
