/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Lopez Beauty`,
    description: `Makeup artist based in Exeter, Devon. Bobbi Brown & Charlotte Tillbury trained and Over 9 years experience specialising in wedding makeup, and party makeup.`,
    siteUrl: "https://lopezbeauty.com",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL,
        contentTypes: ["makeup-services"],
        singleTypes: [
          "home",
          "services",
          "suppliers",
          "about",
          "contact",
          "global",
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_TOKEN,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://lopezbeauty.com",
        sitemap: "https://lopezbeauty.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA_TRACKING_ID,
        cookieExpires: 9999,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.ico",
      },
    },
  ],
}
