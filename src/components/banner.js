import React from 'react'
import { Link } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

function Banner({ image, bannerText, buttonText, url }) {
  return (
    <div>
      <BackgroundImage
        className="bg-center bg-cover bg-no-repeat bg-fixed banner"
        fluid={image}
      >
        <div className="flex flex-col align-middle justify-center text-center bg-black bg-opacity-25 h-full w-full">
          <h1 className="uppercase text-1 mb-9 mx-7">{bannerText}</h1>
          <Link to={url}>
            <button className="button-1">
              {buttonText}
            </button>
          </Link>
        </div>

      </BackgroundImage>
    </div>
  )
}

export default Banner