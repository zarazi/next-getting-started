import React from 'react'
import Head from 'next/head'

import { Menu, Container } from 'semantic-ui-react'

export default({ children }) => (
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      <link href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" rel="stylesheet" />
    </Head>
    <Menu secondary inverted fixed="top" color="teal">
      <Container fluid>
        <Menu.Item header>KK-Pedia</Menu.Item>
        <Menu.Item name='Latest' />
      </Container>
    </Menu>
  </div>
)
