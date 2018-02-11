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

      <Helmet title="C:\Marlow>" meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
      ]} />

      <Header>
        <Link to="/">Chris Marlow</Link>
      </Header>

      <article>
        {children()}
      </article>

    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
