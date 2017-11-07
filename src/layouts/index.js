import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import './style.scss'
import Header from '../components/header'

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
     <Header />
     <div style={{ margin: '0 auto', maxWidth: 1024 }} >
       {children()}
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
