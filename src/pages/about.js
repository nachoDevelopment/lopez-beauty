import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import AboutIntro from "../components/aboutIntro"
import Bio from "../components/bio"
import Cta from "../components/cta"
import Testimonials from "../components/testimonials"
import Instagram from "../components/instagram"
import SEO from "../components/SEO"

export default function About() {
  const data = useStaticQuery(query)

  const bannerContent = data.strapiAbout.about_banner
  const introContent = data.strapiAbout.about_intro
  const bioContent = data.strapiAbout.bio

  const bannerText = bannerContent.bannerText
  const bannerButtonText = bannerContent.buttonText
  const bannerButtonURL = bannerContent.buttonURL
  const image = bannerContent.banner_image.childImageSharp.fluid

  const pageSeo = data.strapiAbout.seo
  const { pageTitle, pageDescription } = pageSeo

  const testimonialsBackground =
    data.strapiAbout.testimonials.home_testimonials_background.childImageSharp
      .fluid

  return (
    <Layout>
      <SEO title={pageTitle} description={pageDescription} />

      <Banner
        bannerText={bannerText}
        buttonText={bannerButtonText}
        url={bannerButtonURL}
        image={image}
      />

      <AboutIntro
        image={introContent.about_intro_image.childImageSharp.fluid}
        introText={introContent.about_intro_text}
        key={introContent.id}
      />

      <Bio
        image={bioContent.bio_background_image.childImageSharp.fluid}
        heading={bioContent.bio_content.bio_heading}
        body={bioContent.bio_content.bio_body}
        buttonText={bioContent.bio_content.bio_button_text}
        buttonURL={bioContent.bio_content.bio_button_url}
      />

      <Testimonials image={testimonialsBackground} />

      <Instagram />

      <Cta />
    </Layout>
  )
}

const query = graphql`
  query {
    strapiAbout {
      seo {
        pageTitle: title
        pageDescription: description
      }
      about_banner {
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
      about_intro {
        about_intro_text
        about_intro_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      bio {
        bio_content {
          bio_body
          bio_heading
          bio_button_text
          bio_button_url
        }
        bio_background_image {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      testimonials {
        home_testimonials_background {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
