import React from 'react'
import Link, { prefetch } from 'next/prefetch'
import { Segment, Header } from 'semantic-ui-react'

const BlockOverview = ({ href, name, text }) => (
  <Segment vertical padded>
    <Header as="h3">
      <Link href={href}><a className="story-link">{ name }</a></Link>
    </Header>
    <p>{ text.substr(0, 500) }</p>
    <style jsx>{`
    .story-link:hover {
        text-decoration: underline ;
    }
  `}</style>
  </Segment>
)

const BlockLink = ({ href, name }) => (
  <Segment vertical padded>
    <Header as="h5">
      <Link href={href}><a className="story-link">{ name }</a></Link>
    </Header>
    <style jsx>{`
      .story-link:hover {
          text-decoration: underline ;
      }
    `}</style>
  </Segment>
)

export {
  BlockOverview, BlockLink
}