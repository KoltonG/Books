/** Imports */
import React from 'react'

// Styles
import styled from '@emotion/styled'

/** Component - Header */
export const Section = ({
  isShort,
  pt = 65,
  pb = !isShort && 65,
  mb = isShort && -80,
  bc,
  children,
  ...props
}) => {
  const Section = styled.section({
    backgroundColor: bc,
    marginBottom: mb,
    paddingBottom: pb,
    paddingTop: pt,
  })

  const Content = styled.div`
    max-width: var(--large);
    margin: 0 auto;
    /* TODO: Handle max-width variable */
    @media (max-width: 1230px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  `

  return (
    <Section {...props}>
      <Content>{children}</Content>
    </Section>
  )
}
