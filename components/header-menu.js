import React, { Component } from 'react'
import Link from 'next/link'
import Router, { route } from 'next/router'
import { Input, Menu, Container } from 'semantic-ui-react'

export default class HeaderMenu extends Component {
  handleItemClick = (e, { name }) => Router.push(name)
  render() {
    const route = this.props.pathname
    return (
      <div>
        <Menu secondary inverted fixed="top" color="teal">
          <Container fluid>
            <Menu.Item header><Link href="/"><a>KK-Pedia</a></Link></Menu.Item>
            <Menu.Item header name='/' content="Home" active={route === '/'} onClick={this.handleItemClick} />
            <Menu.Item name='/story' content="Story" active={route === '/story'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
  }
}