import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Layout from '../components/layout'
import Banner from '../components/banner'
import IntroText from "../components/introText"
import ServicePricelist from "../components/servicePricelist"
import Cta from '../components/cta'

export default function Home() {
  
  const data = useStaticQuery(query);

  const bannerContent = data.strapiServices.banner;
  const introContent = data.strapiServices.service_intro.intro_content
  const servicePricelistContent = data.strapiServices.service_pricelist
  console.log(servicePricelistContent)

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
      <IntroText 
        introHeading={introContent.heading}
        introText={introContent.text}
        key={introContent.id}
      />
      
      <ServicePricelist 
        pricelistContent={servicePricelistContent}
      />

      <Cta />

    </Layout>
  )
}

const query = graphql`

  query {
    strapiServices{
      banner {
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
      service_intro {
        intro_content {
          heading
          text
          id
        }
      },
      service_pricelist {
        card_side
        button_text
        button_url
        title
        pricelist_background {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
        }
      },
      service_pricing {
        service_description
        service_price
        }
      }
    }
  }
`
