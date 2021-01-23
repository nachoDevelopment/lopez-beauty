import React from "react"

import {Link} from 'gatsby'
import ReactMarkdown from 'react-markdown'

import BackgroundImage from 'gatsby-background-image'

function Bio({image, heading, body, buttonText, buttonURL}) {
  return (
    <div>
      <BackgroundImage
        className="bg-center bg-cover bg-no-repeat bg-fixed py-0"
        fluid={image}
        >
        <div className="bg-white md:bg-primary-base md:opacity-70 px-14 py-12 flex flex-col">
          <h2 className="text-center mb-6">{heading}</h2>
          <div >
            <ReactMarkdown className="text-center grid md:grid-cols-2 gap-8">{body}</ReactMarkdown>
          </div>
              <Link to={buttonURL} className="button-2 mx-auto mt-6">{buttonText}</Link>
        </div>
      </BackgroundImage>
    </div>

  )
}

export default Bio