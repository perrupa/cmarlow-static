import React, { Component } from 'react'
import GatsbyLink from 'gatsby-link'
import {brandColor} from 'styles/colors'

const LocalLink = ({children, ...props}) =>
  <GatsbyLink
    style={{ color: brandColor }}
    {...props}
  >
    {children}
  </GatsbyLink>

const ExternalLink = ({children, ...props}) =>
  <a
    style={{ color: brandColor }}
    {...props}
  >
    {children}
  </a>

const Link = ({ to, href, ...props }) =>
  (href != undefined) ?
    <ExternalLink href={href} {...props} />
    : <LocalLink to={to} {...props} />

export default Link;
