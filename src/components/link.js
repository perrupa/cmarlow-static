import React from 'react'
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'
import { brandColor } from 'styles/colors'

const LocalLink = styled(GatsbyLink)`
  color: ${brandColor};
`

const ExternalLink = styled(props => <a {...props} />)`
  color: ${brandColor};
`

const Link = ({ to, href, ...props }) =>
  href !== undefined ? (
    <ExternalLink href={href} {...props} />
  ) : (
    <LocalLink to={to} {...props} />
  )

export default Link
