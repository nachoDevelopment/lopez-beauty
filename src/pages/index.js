import React, { useState, useEffect }from "react"
import { graphql, useStaticQuery } from "gatsby";
import "../css/index.scss"
import Layout from '../components/layout'
import Banner from '../components/banner'
import IntroText from "../components/introText"
import ServiceCards from '../components/servicesCards'

export default function Home() {

  const [mainContent, setMainContent] = useState([])
  
  const data = useStaticQuery(query);

  const bannerContent = data.strapiHome.banner;
  const introContent = data.strapiHome.intro.intro_content
  const servicesContent = data.strapiHome.services

  const bannerText = bannerContent.bannerText;
  const bannerButtonText = bannerContent.buttonText;
  const bannerButtonURL = bannerContent.buttonURL;
  const image = bannerContent.image.childImageSharp.fluid;

  return (
    <Layout>
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

      <ServiceCards 
        servicesContent={servicesContent}
      />

    </Layout>
  )
}

const query = graphql`
  query {
    strapiHome {
      banner {
        bannerText
        buttonText
        buttonURL
        image {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      },
      intro {
        intro_content {
          heading
          text
          id
        }
      },
      services {
        services_background_image {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        services_content {
          heading
          button_text
          button_url
          text
        }
      }
    }
  }
`
