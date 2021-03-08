import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function BookingProcess() {
  const data = useStaticQuery(query)

  const title = data.strapiGlobal.booking_process.title
  const content = data.strapiGlobal.booking_process.booking_process_content

  return (
    <div className="bg-primary-base p-7">
      <h2 className="text-center my-6">{title}</h2>
      <div className="mx-auto flex flex-row justify-center flex-wrap max-w-screen-lg">
        {content.map(x => (
          <div className="bg-white flex flex-col p-5 m-5 w-72" key={x.id}>
            <h2>{x.id}.</h2>
            <p className="text-center">{x.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const query = graphql`
  query {
    strapiGlobal {
      booking_process {
        title
        booking_process_content {
          text
          id
        }
      }
    }
  }
`
