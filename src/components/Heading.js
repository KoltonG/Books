/** Imports */
import React from 'react'

/**
 * Component - Heading
 * Generic heading element that will handle narrowing the content and centering
 */
export const Heading = ({ mt, mb, type: Tag = 'h1', isNarrow, children }) => (
  <div
    css={{
      marginTop: mt && mt * 8,
      marginBottom: mb && mb * 8,
    }}
  >
    <Tag
      css={{
        display: isNarrow && 'inline-block',
        maxWidth: isNarrow && 550,
        marginTop: mt && 0, // Remove the inherited margin if given
        marginBottom: mt && 0, // Remove the inherited margin if given
      }}
    >
      {children}
    </Tag>
  </div>
)
