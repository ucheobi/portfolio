/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My Personal Web Development Portfolio",
    description: "This is my web development portfolio site",
    author: "Uche Anota",
    twitterUsername: "@ucheobi2009",
    image: "/twitter-image.png",
    siteUrl: "https://uche-anota.netlify.app"
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      }
    }, 
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:8082",
        contentTypes: [
          "works",
          "projects",
          "skills",
          "resumes",
          "proficiencies"
        ],
        singleTypes: ["about"],
        queryLimit: 100,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          `roboto mono`,
          `libre baskerville\:400,700`,
          `Playfair Display\:100,200,300,400,500,600,700,800,900`,
          `raleway\:100,200,300,400,500,600,700,800,900`,
          `Italianno`,
          `Tangerine\:400,700`,
        ],
        display: "swap"
      },
    },
  ],
}
