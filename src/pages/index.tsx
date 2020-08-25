import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import FullPage from "../components/full-page"
import SEO from "../components/seo"
import Avatar from "../components/avatar"
import ExperienceTable from "../components/filter-table"
import experience from "../assets/experience"

import "../styles/index.scss"

function IndexPage() {
  function MakeIntroduction() {
    return (
      <div className="introduction-text">
        <h1>Hi! I'm James</h1>
        <p>
          Say something awesome here!! TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
          TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
          TEXT TEXT TEXT{" "}
        </p>
      </div>
    )
  }

  return (
    <Layout>
      <SEO title="Home" />
      <FullPage className="introduction flx-row jc-se ai-c">
        <MakeIntroduction />
        <Avatar fileName="gatsby-astronaut.png" className="headshot" />
      </FullPage>
      <FullPage className="flx-col jc-c ai-c">
        <h1>Experience</h1>
        <ExperienceTable experience={experience} />
      </FullPage>
      <FullPage>Something something</FullPage>
    </Layout>
  )
}

export default IndexPage
