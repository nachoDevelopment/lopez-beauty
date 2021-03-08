import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Instagram() {
  const data = useStaticQuery(query)
  const instaImages = data.allInstagramContent.edges

  return (
    <div className="my-6 md:w-11/12 mx-auto flex flex-col">
      <h2 className="text-center uppercase py-6">Instagram</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {instaImages.slice(0, 4).map((image, index) => (
          <Img
            fluid={image.node.localImage.childImageSharp.fluid}
            key={index}
          />
        ))}
      </div>
      <a
        href="https://www.instagram.com/makeupby_michellelopez/?hl=en"
        target="blank"
        className="button-2 mx-auto mt-10 mb-6"
      >
        View More
      </a>
    </div>
  )
}

const query = graphql`
  query InstagramQuery {
    allInstagramContent {
      edges {
        node {
          localImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Instagram
