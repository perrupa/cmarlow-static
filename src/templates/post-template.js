import React from "react";
import "styles/post.scss";
import { Post } from "../components/Post";

export default function Template({ data }) {
  const {
    markdownRemark: { frontmatter, html }
  } = data;
  // const date = new Date(Date.parse(frontmatter.date));
  // const dateString = date
  //   .toLocaleDateString('en-CA')
  //   .split('-')
  //   // .reverse()
  //   .join(' ')

  return <Post title={frontmatter.title} html={html} />;
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
`;
