import React from 'react'
import 'isomorphic-fetch'
import Head from 'next/head'
import {Header, Grid, Segment, Divider} from 'semantic-ui-react'
import Page from '../layouts/main'
import { BlockOverview, BlockLink } from '../components/block-content'

const URL_KKPEDIA_2 = 'https://script.google.com/macros/s/AKfycbzvjpiMT5DFMdEQXbFoeICOPJY6Q3Qhk6psRgMiKjiFEhovUDY/exec';
const URL_KKPEDIA_3 = 'https://script.google.com/macros/s/AKfycbwtHU7yTNFy7-Nya7cyIyLuVa8uQk_Pz-hwDJizd1E9nDuA-mw/exec';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch(URL_KKPEDIA_3, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'action=listRecentStory&domain=kanchanapisek.or.th'
      })
    const data = await res.json()
    const isServer = !!req
    return { data , isServer}
  }

  render() {
    const which = this.props.isServer ? '[S]' : '[C]'
    return (
      <Page pathname={this.props.url.pathname} title={`KK-Pedia`}>
        <Header as="h1" dividing>{ which } Latest Story</Header>
        <Grid stackable divided relaxed>
          <Grid.Row>
            <Grid.Column width="10">
              { this.props.data && this.props.data.length && 
                this.props.data.map( ({id,name,text}) => 
                  <BlockOverview key={id} name={name} text={text} href={`/story?id=${id}`} />
                )
              }
            </Grid.Column>
            <Grid.Column width="6">
              { this.props.data && this.props.data.length && 
                this.props.data.map( ({id,name,text}) => 
                  <BlockLink key={id} name={name} href={`/story?id=${id}`} />
                )
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden/>
      </Page>
    )
  }
}

