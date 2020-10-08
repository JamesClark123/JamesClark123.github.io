import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FullPage from "../components/full-page"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <FullPage borderBox fixedHeight>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <Link to="/">Home</Link>
    </FullPage>
  </Layout>
)

export default NotFoundPage
