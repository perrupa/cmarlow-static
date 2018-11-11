import React, { Component } from 'react'
import Link from 'components/link'


export const PostList = ({ posts, data }) => {
  const postTitles = posts.map(p => p.node.frontmatter.title)

  return (
    <div>
      <h2>Posts</h2>
      <p>Some things I found out that I felt worth writing down.</p>
      <ol>
        {posts.map(({ node }) => (
          <li key={node.frontmatter.path}>
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
