import React from 'react'
import Link, { prefetch } from 'next/prefetch'
import { Segment, Header } from 'semantic-ui-react'

export default ({ href, name, text, onClick }) => (
  <Segment vertical padded>
    <Header as="h3">
      <Link href={href}><a className="story-link">{ name }</a></Link>
    </Header>
    <p>{ text }</p>
    <style jsx>{`
    .story-link {
      cursor: pointer;
    }
    .story-link:hover {
        text-decoration: underline ;
    }
  `}</style>
  </Segment>
)