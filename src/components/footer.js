import React from 'react'
import {Link} from 'gatsby'

import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <footer className="bg-primary-base mt-auto">
      <nav className="flex flex-col justify-center max-w-4xl p-4 mx-auto text-sm md:p-8 text-center text-xs">
        <div className="my-6 flex flex-col md:flex-row w-full px-6 justify-around">
          <Link
            className="font-light block mt-4 text-gray-900 no-underline md:inline-block md:mt-0 md:ml-6 uppercase"
            key='services'
            to='/services' >
            Services
          </Link>
          <Link
            className="font-light block mt-4 text-gray-900 no-underline md:inline-block md:mt-0 md:ml-6 uppercase"
            key='faq'
            to='/faq' >
            FAQ
          </Link>
          <Link
            className="font-light block mt-4 text-gray-900 no-underline md:inline-block md:mt-0 md:ml-6 uppercase"
            key='about'
            to='/about' >
            About
          </Link>
          <Link
            className="font-light block mt-4 text-gray-900 no-underline md:inline-block md:mt-0 md:ml-6 uppercase"
            key='contact'
            to='/contact' >
            Contact
          </Link>
        </div>
        <Link to="/" className="w-max mx-auto">
          <img src={'/lopez-beauty-logo.png'} className="h-14" alt="makeup by michelle lopez logo"  width="280" height="56"/>
        </Link>
        <a href="https://www.instagram.com/makeupby_michellelopez/?hl=en" className="w-min mx-auto mb-4 p-3">
          <InstagramIcon className="mx-auto font-light" alt="instagram logo"/>
        </a>
        <p className="text-sm">©{new Date().getFullYear()} Lopez Beauty</p>
        <p className="text-center text-sm">
          Designed & Built By{` `}
          <a
            className="no-underline"
            href="mailto:daniel@nachodevelopment.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            nachoDevelopment
          </a>
        </p>
      </nav>
    </footer>
  )
}

export default Footer
