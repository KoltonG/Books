/** Imports */
import React from 'react'

// Styles
import styled from '@emotion/styled'

// Components
import { Button, Tag, Heading } from './'

/** Component - Header */
export const Footer = ({ pt = 8, pb = 8, bc, children, ...props }) => {
  const Footer = styled.footer`
    padding-top: ${pt * 8}px;
    padding-bottom: ${pb * 8}px;
    background-color: ${bc};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `

  const Content = styled.div`
    max-width: var(--large);
    margin: 0 auto;
    @media (max-width: 1230px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  `

  return (
    <Footer {...props}>
      <Content>
        <Tag>Hire Me</Tag>
        <Heading mt={3} mb={3} type="h2" isNarrow>
          Let me join your next project.
        </Heading>
        <Button>Contact Me</Button>
      </Content>
      <div
        css={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          marginTop: 96,
          maxWidth: 'var(--large)',
          width: '100%',
          '@media (max-width: 1230px)': {
            paddingLeft: 15,
            paddingRight: 15,
          },
        }}
      >
        <div css={{ width: 120 }}>
          <img alt="logo" height="24" loading="lazy" src="logo-bw.png" />
        </div>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridColumnGap: 16,
          }}
        >
          <a
            href="https://www.facebook.com/profile.php?id=100003114046994"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="facebook" height="24" loading="lazy" src="fb.png" />
          </a>
          <a
            href="https://www.instagram.com/notebookpeace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="instagram"
              height="24"
              loading="lazy"
              src="instagram.png"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bookkaraalexa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="linkedin" height="24" loading="lazy" src="linkedin.png" />
          </a>
          <a
            href="https://twitter.com/BookSadprasid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="twitter" height="24" loading="lazy" src="twitter.png" />
          </a>
        </div>
        <Button isBW>Hire Me</Button>
      </div>
    </Footer>
  )
}
