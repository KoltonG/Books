/** Imports */
// Libraries
import React from 'react'

// Components
import { Link } from 'gatsby'
import { Button } from './button'

// Styles
import styled from '@emotion/styled'

export const Nav = () => {
  const Nav = styled.nav({
    display: `flex`,
    justifyContent: `space-between`,
    padding: `40px 0 0 0`,
    '@media (max-width: 1230px)': {
      paddingLeft: 15,
      paddingRight: 15,
    },
    maxWidth: `var(--large)`,
    margin: `0 auto`,
    a: {
      display: `inline-block`,
      textDecoration: `none`,
      color: `var(--gold)`,
    },
    ul: {
      listStyle: `none`,
      display: `flex`,
      alignItems: `center`,
      padding: 0,
      margin: 0,
    },
    li: {
      margin: `0 12.5px`,
      '&:first-of-type': {
        marginLeft: 0,
      },
      '&:last-of-type': {
        marginRight: 0,
      },
    },
  })

  return (
    <Nav>
      <Link to="/">
        <img src="logo.svg" alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Button>Get a quote</Button>
        </li>
      </ul>
    </Nav>
  )
}
