import React, { Component } from 'react'
import Head from 'next/head'
import Link, { prefetch } from 'next/prefetch'
import Router, { route } from 'next/router'
import { Input, Menu, Container } from 'semantic-ui-react'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default class HeaderMenu extends Component {
  handleItemClick = (e, { name }) => setTimeout(() => Router.push(name), 100)
  render() {
    const route = this.props.pathname
    return (
      <div>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>

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
        {
          prefetch('/story')
        }
      </div>
    )
  }
}