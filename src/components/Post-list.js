import React, {Component} from 'react'
import Link from 'gatsby-link'

export default ({ posts, data }) => {
  const postTitles =  posts
    .map(p => p.node.frontmatter.title);

  console.log("Posts: ", postTitles)

  return (
    <div>
      <h2>Posts</h2>
      <section>
        <p>Some things I found out that I felt worth writing down.</p>
        <ol>
          {posts.map(({node}) =>
            <li><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></li>
          )}
        </ol>
      </section>
    </div>
  )
}
