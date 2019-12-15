import React, { Component } from 'react'
import Link from 'components/link'
import { Section } from 'components/section'
import { PostList } from 'components/post-list'
import SocialMediaIcons from 'components/social-media-icons'

class IndexPage extends Component {
  render () {
    const posts = []
    return (
      <div>
        <Section>
          <br />
          <p>
            Senior Front End Developer @{' '}
            <Link href='https://shopify.ca/'>Shopify</Link>. Amateur
            Photographer.
          </p>
        </Section>

        <Section>
          <p>I uncomplicate things.</p>
        </Section>

        <Section>
          <PostList posts={this.getPosts()} />
        </Section>

        <Section>
          <h2>Social</h2>
          <SocialMediaIcons />
        </Section>
      </div>
    )
  }

  getPosts () {
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
