import React from 'react'
import { Link } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

function ServicesCards({servicesContent}) {
  return ( 
    <div className="">
      <BackgroundImage
        className="bg-center bg-cover bg-no-repeat bg-fixed pb-9 pt-6 px-6"
        fluid={servicesContent.image.childImageSharp.fluid}
      >
        <h2 className="text-2 my-6 mx-auto text-center uppercase">Services</h2>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto text-center">
          {servicesContent.services_content.map(content => (
          servicesContent.services_content &&
            <div className="py-9 px-7 bg-primary-base bg-opacity-70 flex flex-col justify-between"  key={content.id}>
              <h3 className="text-3 uppercase">{content.heading}</h3>
              <p className="my-6">{content.text}</p>
              <Link to={content.button_url}>
                <button className="button-2">
                  {content.button_text}
                </button>
              </Link>
            </div>
          ))} 
        </div>
        
      </BackgroundImage>

    </div>

  )
}

export default ServicesCards;