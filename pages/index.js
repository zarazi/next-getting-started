import React from 'react'
import Head from 'next/head'
import Page from '../layouts/main'

export default class extends React.Component {
  static async getInitialProps () {
    //code will go here to get data
  }
  constructor (props) {
     super(props)
  }  
  render() {
    return (
      <Page>
        <Head>
          <title>Next -- {`will insert page title here`}</title>
        </Head>
        <p>my page with global styles!</p>
      </Page>
    )
  }
}
