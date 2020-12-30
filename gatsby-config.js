/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Lopez Beauty`,
    description: `Michelle Lopez, Makeup Artist`,
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
        apiURL: process.env.API_URL || "http://143.110.163.87",
        contentTypes: [''],
        singleTypes: [`home`, 'services', 'about'],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "IGQVJVVVdlb3M1MG5qNlh0dG5jSS1zeUtDUHh6ZA2t4X3d1Y08wR2lBV0ZANeEdmS003SUVNXzFYamZAfNm15VXNrWmVBek1rdW1NRlVVRUVzZAjY1dW5FVXljdXVzOHZA6SGpDMkhzQnZAMOTdGQ05Bc3hhNAZDZD",
      }
    },
  ],
}
