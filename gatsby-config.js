/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 module.exports = {
  siteMetadata: {
    title: "Zero Forest",
    description: "Site Description from siteMetadata",
    author: "Emi from siteMetadata"
  },
  plugins: [
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sass",
  {
    resolve:"gatsby-source-filesystem",
    options: {
      name:"src",
      path:`${__dirname}/src/`,
    },
  },
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins:[
      {
        resolve: "gatsby-remark-images",
        options: {
          maxwidth:800,
          linkImagesToOriginal: false,
        },
      },
      ],
    },
  },
  ],
}
