import React, { Component } from 'react'
import Link from 'components/link'
import { PostList } from 'components/post-list'
import { SocialMediaIcons } from 'components/social-media-icons'

class IndexPage extends Component {
  render() {
    const posts = []
    return (
      <div className="page-index">
        <section>
          <p>
            Senior Front End Developer @{' '}
            <Link href="https://shopify.ca/">Shopify</Link>.
          </p>
          <p>I uncomplicate things.</p>
        </section>

        <section>
          <PostList posts={this.getPosts()} />
          <Link to="/high-park/">Some photos that I took in High Park.</Link>
        </section>

        <section>
          <SocialMediaIcons />
        </section>
      </div>
    )
  }

  getPosts() {
    const { edges } = this.props.data.allMarkdownRemark
    return Array.from(edges)
  }
}

export const query = graphql`
  query getPosts {
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
  }
`

export default IndexPage
