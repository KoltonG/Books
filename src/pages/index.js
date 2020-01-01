/** Imports */
// Libraries
import React from 'react'

// Components
import { Header } from '../components'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

/** Component - Landing */
export default () => {
  // Page Metadata
  const Metadata = (
    <Helmet>
      <title>Book Sadprasid</title>
    </Helmet>
  )

  return (
    <>
      {Metadata}
      <Header>Landing Page</Header>
      <ul>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </>
  )
}
