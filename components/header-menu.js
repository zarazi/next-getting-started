import React, { Component } from 'react'
import Head from 'next/head'
import Link, { prefetch } from 'next/prefetch'
import Router, { route } from 'next/router'
import { Input, Menu, Container } from 'semantic-ui-react'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default class HeaderMenu extends Component {
  render() {
    const route = this.props.pathname
    return (
      <div>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>

        <Menu secondary inverted fixed="top" color="teal">
          <Container fluid textAlign="center">
            <Menu.Item header style={{margin: 'auto'}}><Link href="/"><a>KK-Pedia</a></Link></Menu.Item>
          </Container>
        </Menu>
      </div>
    )
  }
}