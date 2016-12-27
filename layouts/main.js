import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

import { Container } from 'semantic-ui-react'

export default ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
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