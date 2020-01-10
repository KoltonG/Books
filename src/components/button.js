/** Imports */
// Libraries
import React from 'react'

// Styles
import styled from '@emotion/styled'

/** Component - Button
 *
 * TODO: Add state styles
 */
export const Button = ({ children }) => {
  const Button = styled.button`
    padding: 10px 20px;
    color: var(--white);
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background: linear-gradient(
      51.56deg,
      var(--light-gold) 40.82%,
      var(--gold) 80.52%
    );
  `

  return <Button>{children}</Button>
}
