const path = require("path")
const query = `{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        excerpt(pruneLength: 250)
        html
        id
        frontmatter {
          date
          path
          title
        }
      }
    }
  }
}`

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const blogPostTemplate = path.resolve(`src/templates/post-template.js`)

  return graphql(query).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'src/styles/'),
        components: path.resolve(__dirname, 'src/components/'),
        pages: path.resolve(__dirname, 'src/pages/'),
      }
    }
  })
}
