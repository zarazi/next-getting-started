import React from 'react'
import Head from 'next/head'

export default({children}) => (
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      <link href="/static/styles.css" rel="stylesheet" type="text/css" />
    </Head>
    <header>
      <h1>{children}</h1>
    </header>
    <style jsx>{`
      h1 { font-weight: 100; }
    `}</style>
  </div>
)
