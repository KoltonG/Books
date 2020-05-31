/** Imports */
// Libraries
import React from 'react'

// Styles
import styled from '@emotion/styled'

/** Component - Button */
export const Button = ({ isBW = false, children }) => {
  const Button = styled.button({
    minWidth: 120,
    padding: '8px 16px',
    color: !isBW ? 'var(--white)' : 'var(--black)',
    borderRadius: 30,
    border: 'none',
    cursor: 'pointer',
    background: !isBW
      ? 'linear-gradient(51.56deg, var(--light-gold) 40.82%, var(--gold) 80.52%)'
      : 'linear-gradient(51.56deg, var(--text-disable) 40.82%, var(--text-grey) 80.52%)',
  })

  return <Button>{children}</Button>
}
