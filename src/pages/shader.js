import React, { Component } from 'react'
import Link from 'components/link'
import { Section } from 'components/section'

class ShaderCanvas extends Component {
  render() {
    return (
      <canvas></canvas>
    )
  }
}

class ShaderPage extends Component {
  render() {
    return (
      <div>
        <Section>
          <ShaderCanvas />
        </Section>
      </div>
    )
  }
}

export default ShaderPage

