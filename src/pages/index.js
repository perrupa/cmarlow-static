import React, {Component} from 'react'
import Link from 'gatsby-link'
import PostList from 'components/Post-list'

class IndexPage extends Component {
  render() {
    const posts = [];
    return (
      <div>

        <section>
          <p>Senior Front End Developer @ <a href="https://shopify.ca/">Shopify</a>.</p>

          <p>I uncomplicate things.</p>

          <ul>
            <li><a href="http://www.twitter.com/perrupa">
              @perrupa on Twitter</a></li>
            <li><a href="http://www.instagram.com/perrupa">
              @perrupa on Instagram</a></li>
            <li><a href="http://www.facebook.com/christopher.marlow">
              @christopher.marlow on Facebook</a></li>
          </ul>
        </section>

        <div>
          <h2>Pages</h2>
          <section>
            <Link to="/high-park/">Some photos that I took in High Park.</Link>
          </section>
        </div>

        <PostList posts={this.getPosts()} />

      </div>
    );
  }

  getPosts() {
    const {edges} = this.props.data.allMarkdownRemark
    return Array.from(edges);
  }
}

export const query = graphql`
query getPosts{
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
`;

export default IndexPage
