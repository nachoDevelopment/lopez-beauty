import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function NavBar() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [menuActive, setMenuState] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  function expand() {
    toggleExpansion(!isExpanded);
  }

  function isActive() {
    setMenuState(!menuActive);
  }

  return (
    <header className="bg-teal-700 fixed w-full">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <svg
              className="w-8 h-8 mr-2 fill-current"
              height="54"
              viewBox="0 0 54 54"
              width="54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>
        <button className={`hamburger hamburger--squeeze text-white border md:hidden ${menuActive ? "is-active" : ""}`} type="button"
          aria-label="Menu" aria-controls="navigation"
          onClick={() => {
            expand()
            isActive()
          }}>
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>

        <nav
          className={` ${isExpanded ? `mobile-nav-closed` : `mobile-nav-open`
            } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default NavBar