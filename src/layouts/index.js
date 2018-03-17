import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

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

      <section className='container'>
        <Header>
          <Link to="/">Chris Marlow</Link>
        </Header>

        {children()}
      </section>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
