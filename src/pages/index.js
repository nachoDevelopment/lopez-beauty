import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Layout from '../components/layout'
import Banner from '../components/banner'
import IntroText from "../components/introText"
import ServiceCards from '../components/servicesCards'
import Accordian from '../components/accordian'
import Cta from '../components/cta'
import Testimonials from "../components/testimonials"
import SEO from "../components/SEO"

export default function Home() {
  
  const data = useStaticQuery(query);

  const bannerContent = data.strapiHome.banner;
  const introContent = data.strapiHome.intro.intro_content
  const servicesContent = data.strapiHome.services
  const accordianContent = data.strapiHome.accordian
  const testimonialsBackground = data.strapiHome.home_testimonials.home_testimonials_background.childImageSharp.fluid
  const pageSeo = data.strapiHome.seo 
  const {pageTitle, pageDescription} = pageSeo

  const bannerText = bannerContent.bannerText;
  const bannerButtonText = bannerContent.buttonText;
  const bannerButtonURL = bannerContent.buttonURL;
  const image = bannerContent.banner_image.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title={pageTitle} description={pageDescription}/>
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

      <Accordian 
        accordianContent={accordianContent}
      />

      <Testimonials 
        image={testimonialsBackground}
      />

      <Cta />

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
        banner_image {
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
          id
        }
      },
      accordian {
        Answer
        Question
        id
      },
      home_testimonials {
        home_testimonials_background {
          childImageSharp {
            fluid (maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      },
      seo {
        pageTitle:title
        pageDescription:description
      } 
    }
  }
`
