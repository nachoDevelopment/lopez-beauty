import React from "react"
import BackgroundImage from "gatsby-background-image"
import InstagramIcon from "@material-ui/icons/Instagram"
import LanguageIcon from "@material-ui/icons/Language"

export default function Suppliers({ suppliers_content }) {
  console.log(suppliers_content)
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-9 mx-auto px-14">
      {suppliers_content.map(content => (
        <div>
          <BackgroundImage
            className="bg-center bg-cover bg-no-repeat h-72 shadow-sm"
            fluid={content.supplier_image.childImageSharp.fluid}
          >
            <div className="relative bg-black bg-opacity-25 hover:bg-opacity-50 duration-100 h-full w-full py-2 px-6 flex flex-col justify-center items-center">
              <h3 className="text-white text-center uppercase">
                {content.supplier_name}
              </h3>
              <hr className="border-white w-36 my-3" />
              <h4 className="uppercase text-sm text-white">
                {content.supplier_category}
              </h4>
              <div className=" absolute font-light text-white self-end justify-self-end bottom-3 left-3">
                <a href={content.supplier_instagram}>
                  <InstagramIcon className="mr-2" alt="instagram logo" />
                </a>
                <a href={content.supplier_website}>
                  <LanguageIcon alt="website" />
                </a>
              </div>
            </div>
          </BackgroundImage>
          <p></p>
        </div>
      ))}
    </div>
  )
}
