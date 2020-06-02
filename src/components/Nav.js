/** Imports */
// Libraries
import React from 'react'

// Components
import { Link } from 'gatsby'
import { Button } from './'

// Styles
import { css } from '@emotion/core'
import styled from '@emotion/styled'

/** Component - Nav */
export const Nav = () => (
  <nav
    css={css`
      padding-top: 40px;
      padding-bottom: 10px;
      display: flex;
      justify-content: space-between;

      @media (max-width: 1230px) {
        padding-left: 15px;
        padding-right: 15px;
      }

      max-width: var(--large);
      margin: 0 auto;
      a {
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: var(--gold);
      }
      ul {
        list-style: none;
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
      }

      li {
        margin: 0 12px;
        &:first-of-type {
          margin-left: 0;
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
    `}
  >
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
  </nav>
)
