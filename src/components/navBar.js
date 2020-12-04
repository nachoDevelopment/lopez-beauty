import { Link } from "gatsby";
import React, { useState } from "react";

function Navbar() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [menuActive, setMenuState] = useState(false);

  function expand() {
    toggleExpansion(!isExpanded);
  }

  function isActive() {
    setMenuState(!menuActive);
  }

  return (
    <header className="w-full bg-primary-base sticky top-0 z-10">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8 overflow-auto md:h-20 sticky">
        <Link to="/" className="md:hidden">
          <img src={'./lopez-beauty-logo.png'} className="h-14" />
        </Link>
        <button className={`hamburger hamburger--squeeze text-white border md:hidden ${menuActive ? "is-active" : ""}`} type="button"
          aria-label="Menu" aria-controls="navigation"
          onClick={() => {
            expand()
            isActive()
          }}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <nav
          className={` ${isExpanded ? `mobile-nav-closed` : `mobile-nav-open`
            } md:flex md:items-center w-full md:justify-between text-center md:text-left`}>

          <Link
            className="font-light block mt-4 text-gray-900 no-underline md:inline-block md:mt-0 md:ml-6 uppercase"
            key='home'
            to='/' >
            Home
          </Link>
          <Link
            className="font-light block mt-4 text-gray-900 no-underline md:inline-block md:mt-0 md:ml-6 uppercase"
            key='services'
            to='/services' >
            Services
        </Link>
          <Link to="/" className="hidden md:block">
            <img src={'./lopez-beauty-logo.png'} className="h-14" />
          </Link>
          <Link
            className="font-light block mt-4 text-gray-900 no-underline md:inline-block md:mt-0 md:ml-6 uppercase"
            key='about'
            to='/about' >
            About
          </Link>
          <Link
            className="font-light block mt-4 text-gray-900 no-underline md:inline-block md:mt-0 md:ml-6 uppercase"
            key='constact'
            to='/contact' >
            Contact
        </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar