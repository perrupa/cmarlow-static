import React from 'react'
import styled from 'styled-components';

const SectionTag = styled.section`
  margin-top: 1em;
`

const Section = ({children, ...props}) =>
  <SectionTag {...props}>
    {children}
  </SectionTag>

export { Section }
