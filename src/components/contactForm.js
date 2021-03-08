import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import BackgroundImage from "gatsby-background-image"

export default function ContactForm() {
  const data = useStaticQuery(query)
  const formBg =
    data.strapiContact.contact_form_background.childImageSharp.fluid

  return (
    <BackgroundImage
      className="bg-center bg-cover bg-no-repeat bg-fixed px-6 py-10 md:p-0"
      fluid={formBg}
    >
      <div className="flex justify-center" id="contact-form">
        <form
          action="https://getform.io/f/7204c7bd-76e5-4012-9d3d-dae3c88d2d77"
          method="POST"
          className="bg-primary-base bg-opacity-70 flex flex-col w-11/12 md:w-2/3 max-w-screen-sm md:my-14 px-9 md:px-14 py-6 "
        >
          <label htmlFor="name" className="form-label">
            Name*
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="form-input text-p"
              required
            />
          </label>
          <label htmlFor="email" className="form-label">
            Email*
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-input"
              required
            />
          </label>
          <label htmlFor="number" className="form-label">
            Number
            <input
              type="text"
              name="number"
              placeholder="Enter your phone number"
              className="form-input"
            />
          </label>
          <label htmlFor="date" className="form-label">
            Event Date
            <input
              type="date"
              name="date"
              placeholder="Enter your phone number"
              className="form-input"
            />
          </label>
          <label htmlFor="eventType" className="form-label">
            Event Type*
            <select name="event" className="form-input" required>
              <option value="wedding">Wedding</option>
              <option value="special Occasion">Special Occasion</option>
              <option value="party">Party</option>
              <option value="photoshoot">Photoshoot</option>
              <option value="lesson">Lesson</option>
              <option value="brows">Brows</option>
            </select>
          </label>
          <label htmlFor="message" className="form-label">
            Message
            <textarea type="text-area" name="message" className="form-input" />
          </label>
          <button type="submit" className="button-2 mx-auto my-6">
            Send
          </button>
        </form>
      </div>
    </BackgroundImage>
  )
}

const query = graphql`
  query {
    strapiContact {
      contact_form_background {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
