import React from 'react'
import NavBar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
