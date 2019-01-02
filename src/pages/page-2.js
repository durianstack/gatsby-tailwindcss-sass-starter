import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1 className="mb-4">Hi from the second page</h1>
    <p className="leading-loose">Welcome to page 2</p>
    <Link to="/" className="link">
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
