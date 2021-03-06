import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import IntroText from "../components/introText"
import ContactForm from "../components/contactForm"
import Instagram from "../components/instagram"
import SEO from "../components/SEO"

export default function About() {
  const data = useStaticQuery(query)

  const bannerContent = data.strapiContact.contact_banner
  const introContent = data.strapiContact.contact_intro.intro_content

  const bannerText = bannerContent.bannerText
  const bannerButtonText = bannerContent.buttonText
  const bannerButtonURL = bannerContent.buttonURL
  const image = bannerContent.banner_image.childImageSharp.fluid
  const pageSeo = data.strapiContact.seo
  const { pageTitle, pageDescription } = pageSeo

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

      <ContactForm />

      <Instagram />
    </Layout>
  )
}

const query = graphql`
  query {
    strapiContact {
      seo {
        pageTitle: title
        pageDescription: description
      }
      contact_banner {
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
      contact_intro {
        intro_content {
          heading
          text
          id
        }
      }
    }
  }
`
