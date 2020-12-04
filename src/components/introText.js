import React from 'react'

function IntroText({ introText, introHeading }) {

  return (
    <div className="text-center mx-auto my-16 w-3/5 md:w-2/4 max-w-screen-md">
      <h2 className="text-2 mb-6 mx-auto w-2/3">{introHeading}</h2>
      <p className="text-p">{introText}</p>
    </div>
  )
}

export default IntroText