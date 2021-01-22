import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({title, description}) => {

  const { site } = useStaticQuery(query)
  const {
    siteDesc,
    siteTitle
  } = site.siteMetadata

  return <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
    <meta name="description" content={description || siteDesc}/>
  </Helmet>
}

const query = graphql `
{
  site {
  siteMetadata {
    siteTitle:title
    siteUrl
    siteDesc:description
  }
}
}
`

export default SEO