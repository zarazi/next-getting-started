import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

export default ({ name, text }) => (
  <Segment vertical padded>
    <Header as="h3">{ name }</Header>
    <p>{ text }</p>
  </Segment>
)