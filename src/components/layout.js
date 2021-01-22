import React from 'react'
import Navbar from './navBar'
import Footer from './footer'
import "../css/index.scss"

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
