import React from 'react'
import 'isomorphic-fetch'
import Head from 'next/head'
import { Header } from 'semantic-ui-react'
import Page from '../layouts/main'
import nl2br from 'react-nl2br'

const URL_KKPEDIA_3 = 'https://script.google.com/macros/s/AKfycbwtHU7yTNFy7-Nya7cyIyLuVa8uQk_Pz-hwDJizd1E9nDuA-mw/exec';

export default class extends React.Component {
  static async getInitialProps({ query, req }) {
    if (query && query.id) {
      const res = await fetch(URL_KKPEDIA_3, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'action=getStoryById&id=' + query.id
      })
      const data = await res.json()
      const isServer = !!req
      return { data , isServer}
    }
  }

  render() {
    const which = this.props.isServer ? '[S]' : '[C]'
    return (
      <Page pathname={this.props.url.pathname} title={`Story`}>
        {
          this.props.data
          ? !this.props.data.error
            ? <div>
                <Header as="h1" dividing>{ which } { this.props.data.name || 'No title'}</Header>
                { this.props.data.text.map(t=> <p>{nl2br(t)}</p>) }
              </div>
            : <pre>{this.props.data.error}</pre>
          : <pre>No data found!</pre>
        }
      </Page>
    )
  }
}
