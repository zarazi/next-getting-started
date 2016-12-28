import React, { Component } from 'react'
import Link from 'next/link'
import Router, { route } from 'next/router'
import { Input, Menu, Container } from 'semantic-ui-react'

export default class HeaderMenu extends Component {
  state = { currentRoute: this.props.pathname }

  handleItemClick = (e, { name }) => Router.push(name)

  render() {
    const { currentRoute } = this.state
    return (
      <div>
        <h3>{this.props.pathname}</h3>
        <Menu secondary inverted fixed="top" color="teal">
          <Container fluid>
            <Menu.Item header><Link href="/"><a>KK-Pedia</a></Link></Menu.Item>
            <Menu.Item header name='/' content="Home" active={currentRoute === '/'} onClick={this.handleItemClick} />
            <Menu.Item name='/story' content="Story" active={currentRoute === '/story'} onClick={this.handleItemClick} />
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