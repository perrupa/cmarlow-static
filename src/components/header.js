import React from 'react'
import Link from './link'
import styled from 'styled-components'

const Title = styled.h1`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  border-width: 0;
  font-size: 4em;
`

const SubtleLink = styled(Link)`
  color: #333;
`

export const StripeTitle = ({ to, children = [] }) => (
  <Title>
    <SubtleLink to={to}>{children}</SubtleLink>
  </Title>
)
