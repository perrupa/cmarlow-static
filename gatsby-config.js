module.exports = {
  pathPrefix: '/cmarlow-static',
  siteMetadata: {
    title: 'CMarlow.com',
    author: 'Chris Marlow',
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet'
  ],
}
