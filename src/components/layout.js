import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="w-full mx-auto min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}
