import React from "react"
import Navbar from "./navBar"
import Footer from "./footer"
import CookieConsent from "react-cookie-consent"
import "../css/index.scss"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="w-full mx-auto min-h-screen">{children}</main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="Google Analytics"
        style={{ background: "#222222" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        <span style={{ fontSize: "12px" }}>
          This website uses cookies to enhance the user experience. By using
          this website you are accepting the use of cookies
        </span>
      </CookieConsent>
    </div>
  )
}
