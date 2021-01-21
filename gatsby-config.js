/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Lopez Beauty`,
    description: `Makeup artist based in Exeter, Devon. Bobbi Brown & Charlotte Tillbury trained and Over 9 years experience specialising in wedding makeup, and party makeup.`,
    siteUrl: 'https://lopezbeauty.com',
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
        ],
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://143.110.163.87",
        contentTypes: ['makeup-services'],
        singleTypes: ['home', 'services', 'about', 'contact', 'global'],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://lopezbeauty.com',
        sitemap: 'https://lopezbeauty.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_TOKEN,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
  ],
}
