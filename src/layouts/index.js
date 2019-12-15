import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Container } from 'components/Container'

// Styles
import 'styles/main.scss'

// Components
import { StripeTitle } from 'components/header'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title='C:\Marlow>'
        meta={[
          { name: 'description', content: '' },
          { name: 'keywords', content: '' }
        ]}
      />

      <Container>
        <StripeTitle to='/'>Chris Marlow</StripeTitle>

        {children()}
      </Container>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
