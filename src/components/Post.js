import React from "react";
import { Container } from "components/Container";

export const Post = ({ title, html }) => {
  return (
    <Container>
      <h2 className="blog-post__title">{title}</h2>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Container>
  );
};
