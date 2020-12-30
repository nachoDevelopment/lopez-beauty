import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Layout from '../components/layout'
import Banner from '../components/banner'
import Instagram from "../components/instagram"

export default function About() {
  
  const data = useStaticQuery(query);

  const bannerContent = data.strapiAbout.about_banner;
  const introContent = data.strapiAbout.about_intro

  const bannerText = bannerContent.bannerText;
  const bannerButtonText = bannerContent.buttonText;
  const bannerButtonURL = bannerContent.buttonURL;
  const image = bannerContent.banner_image.childImageSharp.fluid;

  return (
    <Layout>

      <Banner
        bannerText={bannerText}
        buttonText={bannerButtonText}
        url={bannerButtonURL}
        image={image}
      /> 

      <Instagram />

    </Layout>
  )
}

const query = graphql`
  query {
    strapiAbout {
      about_banner {
        bannerText
        buttonText
        buttonURL
        banner_image {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      },
      testimonials {
        home_testimonials_background {
          childImageSharp {
            fluid (maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
