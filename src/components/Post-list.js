import React, {Component} from 'react'
import Link from 'gatsby-link'

export default ({ posts, data }) => {
  const postTitles =  posts
    .map(p => p.node.frontmatter.title);

  console.log("Posts: ", postTitles)

  return (
    <section>
      <h2>Posts</h2>
      <ul>
        {posts.map(({node}) =>
          <li><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></li>
        )}
      </ul>
    </section>
  )
}
