import React from 'react'
import { Link } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

function ServicePricelist({pricelistContent}) {
  
  

  return (
    <div>
      
      {pricelistContent.map(content => (
        <BackgroundImage className="bg-center bg-cover bg-no-repeat bg-fixed px-6 py-10 md:p-0"
        fluid={content.pricelist_background.childImageSharp.fluid}> 
          <div className={`md:w-1/2 bg-primary-base bg-opacity-70 md:bg-primary-base md:bg-opacity-100 p-7 md:px-14 flex flex-col justify-center ${content.card_side ? "md:ml-auto" : "md:mr-auto"}`}>
            <h2 className="text-2 my-6 mx-auto text-center uppercase">{content.title}</h2> 
            <div className="mx-auto">
              
              {content.service_pricing.map(x => (
                <p className="text-base uppercase py-2 text-center md:text-left">{x.service_description}: <strong>{x.service_price}</strong></p>
              ))}

            </div>
            <button className="button-2 mx-auto mt-6">
              <Link to={content.button_url}>{content.button_text}</Link>
            </button>
          </div>

        </BackgroundImage>
      ))}
    </div>
  )
}

export default ServicePricelist