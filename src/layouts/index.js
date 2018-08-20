import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'components/link'
import { Container } from 'components/Container'

// Styles
import 'styles/main.scss'

// Components
import Header from 'components/header'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title="C:\Marlow>"
        meta={[
          { name: 'description', content: '' },
          { name: 'keywords', content: '' },
        ]}
      />

      <Container>
        <Header>
          <Link style={{ color: '#333' }} to="/">Chris Marlow</Link>
        </Header>

        {children()}
      </Container>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
