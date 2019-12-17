import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Container } from "components/Container";
import { Footer } from "components/Footer";

// Styles
import "styles/main.scss";

// Components
import { StripeTitle } from "components/header";

const TemplateWrapper = ({ children }) => {
  return (
    <div className="top">
      <Helmet
        title="C:\Marlow>"
        meta={[
          { name: "description", content: "" },
          { name: "keywords", content: "" }
        ]}
      />

      <Container>
        <StripeTitle to="/">Chris Marlow</StripeTitle>

        {children()}

        <Footer />
      </Container>
    </div>
  );
};

export default TemplateWrapper;
