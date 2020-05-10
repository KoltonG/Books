/** Imports */
import React from 'react'

// Styles
import styled from '@emotion/styled'

/** Component - Header */
export const Header = ({ children }) => {
  const Header = styled.header`
    padding-top: 32px;
    max-width: var(--large);
    margin: 0 auto;
    text-align: center;
    @media (max-width: 1230px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  `

  return <Header>{children}</Header>
}
