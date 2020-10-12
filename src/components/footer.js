import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-700">
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p className="text-white">
          Created by{` `}
          <a
            className="no-underline"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel Schmid
          </a>
        </p>
      </nav>
    </footer>
  )
}

export default Footer
