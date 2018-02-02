import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

// Styles
import './style.scss'

// Components
import Header from '../components/header'

const TemplateWrapper = ({ children }) => {
  return (
    <section>

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

    </section>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
