import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { siteDesc, siteTitle } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <script src="https://www.google.com/recaptcha/api.js?render=6LcxyvYUAAAAAIPWRiiIJpsdYafAd5wNwi9Ljcvf"></script>
    </Helmet>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteUrl
        siteDesc: description
      }
    }
  }
`

export default SEO
