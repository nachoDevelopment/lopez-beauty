import React from 'react'

import BackgroundImage from 'gatsby-background-image'

function AboutIntroText({ introText, image}) {

  return (
    <div>
      <div className="md:hidden">
        <BackgroundImage 
          className="bg-center bg-cover bg-no-repeat bg-fixed p-7 lg:p-0 md:hidden"
          fluid={image}
        >
          <div className="md:w-1/2 md:ml-auto bg-primary-base bg-opacity-70 md:bg-primary-base md:bg-opacity-100 p-7 md:px-14 flex flex-col justify-center">
            <h2 className="text-2 mb-6 mx-auto w-2/3 text-center uppercase">Michelle Lopez</h2>
            <p className="text-p text-center">{introText}</p>
          </div>
        </BackgroundImage>
      </div>

      <div className="hidden md:flex flex-row">
        <BackgroundImage 
          className="w-1/2 bg-center bg-cover bg-no-repeat p-0"
          fluid={image}
        >
        </BackgroundImage>
        <div className="w-1/2 bg-primary-base bg-opacity-70 md:bg-primary-base md:bg-opacity-100 px-7 md:px-14 md:py-24 flex flex-col justify-center">
          <h2 className="text-2 mb-6 mx-auto w-2/3 text-center uppercase">Michelle Lopez</h2>
          <p className="text-p text-center">{introText}</p>
        </div>
      </div>

    </div>


  )
}
export default AboutIntroText