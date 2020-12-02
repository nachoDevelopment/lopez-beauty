import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="flex-1 w-full mx-auto ">
        {children}
      </main>
      <Footer />
    </div>
  )
}
