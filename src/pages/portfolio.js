/** Imports */
// Libraries
import React from 'react'

// Components
import { Header } from '../components'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

/** Component - Portfolio */
export default () => {
  // Page Metadata
  const Metadata = (
    <Helmet>
      <title>Book Sadprasid | Portfolio</title>
    </Helmet>
  )

  return (
    <>
      {Metadata}
      <Header>Portfolio Page</Header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </>
  )
}
