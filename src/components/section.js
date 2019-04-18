import React from 'react'
import styled from 'styled-components';

const SectionTag = styled.section`
  margin-bottom: 3em;
  font-size: 1.2em;
`

const Section = ({children, ...props}) =>
  <SectionTag {...props}>
    {children}
  </SectionTag>

export { Section }
