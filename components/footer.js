import React from 'react'

import { Segment, Container } from 'semantic-ui-react'

export default ({ children }) => (
  <div>
    <Segment inverted vertical color="teal">
      <Container textAlign="right">
        <p>kengkode.com</p>
      </Container>
    </Segment>
    <style jsx>{`
      p { 
        font-weight: bold;
      }
    `}</style>
  </div>
)
