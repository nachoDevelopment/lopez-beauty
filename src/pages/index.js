import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import "../css/index.scss"
import Layout from '../components/layout'
import Banner from '../components/banner'
import IntroText from "../components/introText"

export default function Home() {

  const data = useStaticQuery(query);

  const bannerContent = data.strapiHome.banner;
  const intro = data.strapiHome.intro;

  const bannerText = bannerContent.bannerText;
  const buttonText = bannerContent.buttonText;
  const buttonURL = bannerContent.buttonURL;
  const introHeading = intro.heading;
  const introText = intro.text;
  const image = bannerContent.image.childImageSharp.fluid;


  return (
    <Layout>
      <Banner
        bannerText={bannerText}
        buttonText={buttonText}
        url={buttonURL}
        image={image}
      />
      <IntroText
        introHeading={introHeading}
        introText={introText}
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
      heading
      text
    }
  },
}
`
