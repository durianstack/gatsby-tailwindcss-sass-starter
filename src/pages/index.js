import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1 className="mb-4">Hi people</h1>
    <p className="leading-loose">Welcome to your new Gatsby site.</p>
    <p className="leading-loose">Now go build something great.</p>
    <div className="mb-4" style={{ maxWidth: '300px' }}>
      <Image />
    </div>
    <Link to="/page-2/" className="link">
      Go to page 2
    </Link>
  </Layout>
)

export default IndexPage
