import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import Banner from '../components/banner'
import IntroText from "../components/introText"
import ServiceCosts from "../components/serviceCosts"
import BookingProcess from "../components/bookingProcess"
import CTA from "../components/cta"

export const query = graphql`
  query Service($name: String!) {
    service: strapiMakeupServices(name: { eq: $name }) {
      name
      service_banner {
        buttonText
        buttonURL
        bannerText
        banner_image {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      service_intro {
        intro_content {
          text
          heading
          id
        }
      }
      service_costs {
        id
        title
        button_text
        button_url
        background_image {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service_pricing_content {
          heading
          text
          price
          id
        }
      }
    }
  }
`;

const Service = ({ data }) => {

  const bannerContent = data.service.service_banner;
  const introContent = data.service.service_intro.intro_content;
  const serviceCostsContent = data.service.service_costs;

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

      <ServiceCosts 
        content={serviceCostsContent}
      />

      <BookingProcess />

      <CTA />

    </Layout>
  );
};

export default Service;