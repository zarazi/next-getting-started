import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

import { Container } from 'semantic-ui-react'

export default ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" rel="stylesheet" />
    </Head>
    <Header />
    <Container className="content">
      { children }
    </Container>
    <Footer />
    <style jsx>{`
      .content {
        margin-top: 70px;
        min-height: 100vh;
      }
    `}</style>
  </div>
)