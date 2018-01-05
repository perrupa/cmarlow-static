module.exports = {
  pathPrefix: '/cmarlow-static',
  siteMetadata: {
    title: 'CMarlow.com',
    author: 'Chris Marlow',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: "posts",
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-sass`,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet'
  ],
}
