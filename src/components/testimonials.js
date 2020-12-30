import React from 'react'

import BackgroundImage from 'gatsby-background-image'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Testimonials({image}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div >
      <BackgroundImage
        className="bg-center bg-cover bg-no-repeat bg-fixed p-7 lg:p-0"
        fluid={image}
      >
        <div className="bg-primary-base bg-opacity-70 lg:bg-opacity-100 lg:w-3/5 mx-7 lg:ml-auto lg:mt-0 lg:mb-0 lg:mr-0 py-6 px-10">
          <h2 className="text-2 my-6 mx-auto text-center uppercase">Testimonials</h2>
          <Slider {...settings}>
            <div>
              <p className="text-center italic"> Blog typewriter food truck marfa. Selvage prism vexillologist, drinking vinegar gentrify wolf green juice cred paleo before they sold out tote bag echo park snackwave. IPhone etsy sustainable, listicle kickstarter authentic YOLO meditation hot chicken bespoke squid green juice seitan artisan.</p>
              <p className="text-center mt-4"><strong>Jennifer Lopez</strong></p>
            </div>
            <div>
              <p className="text-center italic"> Blog typewriter food truck marfa. Selvage prism vexillologist, drinking vinegar gentrify wolf green juice cred paleo before they sold out tote bag echo park snackwave. IPhone etsy sustainable, listicle kickstarter authentic YOLO meditation hot chicken bespoke squid green juice seitan artisan.</p>
              <p className="text-center mt-4"><strong>Becky G</strong></p>
            </div>
          </Slider>
          <div className="flex justify-center mt-7">
            <button className="button-2 mb-6">
              <a target="blank" href="https://www.google.com/maps/place/Makeup+By+Michelle+Lopez/@50.9671357,-6.1948591,7z/data=!3m1!4b1!4m5!3m4!1s0x0:0xf020265d8642b992!8m2!3d50.988608!4d-3.952334">
                View On Google
              </a>
            </button>
          </div>

        </div>


      </BackgroundImage>
    </div>
  )
}

export default Testimonials