import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Accordian from "../components/accordian"
import SEO from "../components/SEO"

export default function FAQ() {
  const data = useStaticQuery(query)

  const accordianContent = data.strapiHome.accordian

  return (
    <Layout>
      <SEO title="FAQ" />
      <Accordian accordianContent={accordianContent} />
    </Layout>
  )
}

const query = graphql`
  query {
    strapiHome {
      accordian {
        Answer
        Question
        id
      }
    }
  }
`
