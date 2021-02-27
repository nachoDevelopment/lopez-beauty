import React from "react"

import BackgroundImage from "gatsby-background-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Testimonials({ image }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <BackgroundImage
        className="bg-center bg-cover bg-no-repeat bg-fixed p-7 lg:p-0"
        fluid={image}
      >
        <div className="bg-primary-base bg-opacity-70 lg:bg-opacity-100 lg:w-3/5 mx-7 lg:ml-auto lg:mt-0 lg:mb-0 lg:mr-0 py-6 px-10">
          <h2 className="text-2 my-6 mx-auto text-center uppercase">
            Testimonials
          </h2>
          <Slider {...settings}>
            <div>
              <p className="text-center italic">
                Michelle did my wedding make-up and I would wholeheartedly
                recommend her to anyone who is looking for a talented make up
                artist and a thoroughly lovely lady. Michelle is friendly and
                chatty and certainly put me at ease on the morning of the
                wedding. At the trial and on the day Michelle took the time to
                get every element of the make-up perfect and it is clear how
                passionate she is about her art. The products she uses are great
                and the make-up lasted beautifully. Thank you Michelle!
              </p>
              <p className="text-center mt-4">
                <strong>Emma Luff-Lee</strong>
              </p>
            </div>
            <div>
              <p className="text-center italic">
                Michelle did an absolutely incredible job on my make up for my
                wedding day. It lasted well all day and came out so well in the
                photos! Due to covid there were a lot of changes and she was so
                flexible in fitting my trial in at very short notice. She was
                also so calming on the morning and fitted right in with the
                getting ready crew. I would 100% recommend her :)
              </p>
              <p className="text-center mt-4">
                <strong>Rebecca Trenerry</strong>
              </p>
            </div>
            <div>
              <p className="text-center italic">
                I was originally a bit apprehensive about having my make up done
                for the very first time on my wedding day but Michelle honestly
                got it spot on. Wedding make up is traditionally quite natural
                but I like more of a full coverage/glam look and she exceeded my
                expectations and made me look flawless. My mum and sister wanted
                more of a natural look which she also did perfectly. She even
                did my 9 year old flower girl nice and natural and made her look
                so pretty! My guests all raved about our make up on the day.
                Michelle is the lovliest person and I would 100% recommend her
                for any style of make up you want, she can honestly do
                everything! A massive 5 stars xx
              </p>
              <p className="text-center mt-4">
                <strong>Lauren Wiltshire</strong>
              </p>
            </div>
          </Slider>
          <div className="flex justify-center mt-7">
            <button className="button-2 mb-6">
              <a
                target="blank"
                href="https://www.google.com/maps/place/Makeup+By+Michelle+Lopez/@50.9671357,-6.1948591,7z/data=!3m1!4b1!4m5!3m4!1s0x0:0xf020265d8642b992!8m2!3d50.988608!4d-3.952334"
              >
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
