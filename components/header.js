import React from 'react'

import { Menu, Container } from 'semantic-ui-react'

export default({ children }) => (
  <div>
    <Menu secondary inverted fixed="top" color="teal">
      <Container fluid>
        <Menu.Item header>KK-Pedia</Menu.Item>
        <Menu.Item name='Latest' />
      </Container>
    </Menu>
  </div>
)
