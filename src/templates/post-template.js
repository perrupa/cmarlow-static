import React from 'react'
import 'styles/post.scss'

export default function Template({ data }) {
  const { markdownRemark: { frontmatter, html } } = data
  const date = new Date(Date.parse(frontmatter.date))
  const dateString = date
    .toLocaleDateString('en-CA')
    .split('-')
    // .reverse()
    .join(' ')

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1 className="blog-post__title">
          {frontmatter.title}
          <span className="blog-post__date">{dateString}</span>
        </h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
