import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

export default ({ name, text, onClick }) => (
  <Segment vertical padded>
    <Header as="h3"><a className="story-link" onClick={onClick}>{ name }</a></Header>
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