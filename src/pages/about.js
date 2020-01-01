/** Imports */
// Libraries
import React from 'react'

// Components
import { Header } from '../components'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

/** Component - About */
export default () => {
  // Page Metadata
  const Metadata = (
    <Helmet>
      <title>Book Sadprasid | About</title>
    </Helmet>
  )

  return (
    <>
      {Metadata}
      <Header>About Page</Header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </>
  )
}
