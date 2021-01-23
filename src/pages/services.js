import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Layout from '../components/layout'
import Banner from '../components/banner'
import IntroText from "../components/introText"
import ServicePricelist from "../components/servicePricelist"
import Cta from '../components/cta'
import SEO from "../components/SEO"

export default function Home() {
  
  const data = useStaticQuery(query);

  const bannerContent = data.strapiServices.banner;
  const introContent = data.strapiServices.service_intro.intro_content
  const servicePricelistContent = data.strapiServices.service_pricelist
  const seo = data.strapiServices.seo
  const {siteTitle, siteDescription} = seo

  const bannerText = bannerContent.bannerText;
  const bannerButtonText = bannerContent.buttonText;
  const bannerButtonURL = bannerContent.buttonURL;
  const image = bannerContent.banner_image.childImageSharp.fluid;

  return (
    <Layout>

      <SEO title={siteTitle} description={siteDescription}/>

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
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
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
        id
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
        id
        }
      },
      seo {
        siteTitle:title
        siteDescription:description
      }
    }
  }
`
