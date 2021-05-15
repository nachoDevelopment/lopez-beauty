import React from "react"
import SEO from "../components/SEO"
import Cta from "../components/cta"
import Banner from "../components/banner"
import IntroText from "../components/introText"
import Suppliers from "../components/suppliers"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

export default function NotFound() {
  const data = useStaticQuery(query)

  const bannerContent = data.strapiSuppliers.Banner
  const introContent = data.strapiSuppliers.intro.intro_content
  const pageSeo = data.strapiSuppliers.seo
  const { pageTitle, pageDescription } = pageSeo
  const suppliers = data.strapiSuppliers.suppliers

  const bannerText = bannerContent.bannerText
  const bannerButtonText = bannerContent.buttonText
  const bannerButtonURL = bannerContent.buttonURL
  const image = bannerContent.banner_image.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={pageTitle} description={pageDescription} />
      <Banner
        bannerText={bannerText}
        buttonText={bannerButtonText}
        url={bannerButtonURL}
        image={image}
      />

      <IntroText
        introHeading={introContent.heading}
        introText={introContent.text}
        key={introContent.id}
      />

      <Suppliers suppliers_content={suppliers} />

      <Cta />
    </Layout>
  )
}

const query = graphql`
  query {
    strapiSuppliers {
      Banner {
        bannerText
        buttonText
        buttonURL
        banner_image {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      intro {
        intro_content {
          heading
          text
          id
        }
      }
      seo {
        pageTitle: title
        pageDescription: description
      }
      suppliers {
        supplier_category
        supplier_description
        supplier_instagram
        supplier_name
        supplier_website
        supplier_image {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
