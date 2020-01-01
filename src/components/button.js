/** Imports */
// Libraries
import React from 'react'

// Styles
import styled from '@emotion/styled'

/** Component - Button */
export const Button = ({ children }) => {
  const Button = styled.button({
    padding: 15,
    color: `var(--white)`,
    borderRadius: 30,
    border: `none`,
    cursor: `pointer`,
    // TODO: Update this to linear gradient
    backgroundColor: `var(--gold)`,
  })

  return <Button>{children}</Button>
}
