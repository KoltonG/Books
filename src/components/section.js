/** Imports */
import React from 'react'

// Styles
import styled from '@emotion/styled'

/** Component - Header */
export const Section = ({
  paddingTop = 65,
  paddingBottom = 65,
  backgroundColor,
  children,
  ...props
}) => {
  const Section = styled.section`
    padding-top: ${paddingTop}px;
    padding-bottom: ${paddingBottom}px;
    background-color: ${backgroundColor};
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
    <Section {...props}>
      <Content>{children}</Content>
    </Section>
  )
}
