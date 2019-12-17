import React from "react";
import { Link } from "components/link";
import styled from "styled-components";

const FooterWrapper = styled.section`
  padding: 1em;
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Link href="#top">Top</Link>
      <p>Written with ❤️ by Chris Marlow</p>
    </FooterWrapper>
  );
};
