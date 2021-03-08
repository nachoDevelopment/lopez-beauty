import React from "react"
import { Link } from "gatsby"

import BackgroundImage from "gatsby-background-image"

function ServiceCosts({ content }) {
  return (
    <div>
      <BackgroundImage
        className="bg-center bg-cover bg-no-repeat bg-fixed px-6 py-10 md:p-0"
        fluid={content.background_image.childImageSharp.fluid}
        key={content.id}
      >
        <div className="bg-primary-base bg-opacity-70 p-7 md:px-14 flex flex-col justify-center ">
          <h2 className="text-2 my-6 mx-auto text-center uppercase">
            {content.title}
          </h2>
          <div className="mx-auto flex flex-wrap justify-center">
            {content.service_pricing_content.map(x => (
              <div className="flex flex-col w-64 mx-5 my-6" key={x.id}>
                <p className="uppercase text-center font-medium">{x.heading}</p>
                <div className="flex flex-col justify-between">
                  <hr className="mx-auto border-black w-2/3 my-4" />
                  <p className="text-base py-2 text-center">{x.text}</p>
                  <p className="text-base text-center italic mt-3">
                    £{x.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link to={content.button_url} className="mx-auto">
            <button className="button-2 mx-auto mt-6">
              {content.button_text}{" "}
            </button>
          </Link>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default ServiceCosts
