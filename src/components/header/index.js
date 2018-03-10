import React from 'react'
import './header.scss'

export default ({ children = [] }) => (
  <header className="header">
    <h1 className="header__title">{children}</h1>
  </header>
)
