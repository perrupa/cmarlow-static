import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  border-width: 0;
  font-size: 4em;
`

export default ({ children = [] }) => (
    <Title>{children}</Title>
)
