/** Imports */
import React from 'react'

// Styles
import styled from '@emotion/styled'

/** Component - Header */
export const Tag = ({ children }) => {
  const Tag = styled.small`
    text-transform: uppercase;
    color: var(--purple);
    font-size: 18px;
    font-weight: bold;
  `

  return <Tag>{children}</Tag>
}
