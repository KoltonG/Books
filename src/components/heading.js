/** Imports */
import React from 'react'

/**
 * Component - Heading
 * Generic heading element that will handle narrowing the content and centering
 */
export const Heading = ({ type: Tag = 'h1', isNarrow, children }) => (
  <div>
    <Tag
      css={{
        display: isNarrow && 'inline-block',
        maxWidth: isNarrow && 550,
      }}
    >
      {children}
    </Tag>
  </div>
)
