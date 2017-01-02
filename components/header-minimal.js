import React, { Component } from 'react'
import Link, { prefetch } from 'next/prefetch'
import Router, { route } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'

export default class HeaderMenu extends Component {
  render() {
    const route = this.props.pathname
    return (
      <div>
        <Menu secondary inverted fixed="top" color="teal">
          <Container fluid textAlign="center">
            <Menu.Item header style={{margin: 'auto'}}><Link href="/"><a>KK-Pedia</a></Link></Menu.Item>
          </Container>
        </Menu>
      </div>
    )
  }
}