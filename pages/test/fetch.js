import React from 'react'
import 'isomorphic-fetch'

export default class extends React.Component {

  static async getInitialProps({ pathname, query, req }) {
    const res = await fetch('https://script.google.com/macros/s/AKfycbzvjpiMT5DFMdEQXbFoeICOPJY6Q3Qhk6psRgMiKjiFEhovUDY/exec', {
        method: 'POST'
      })
    const data = await res.json()
    return { data }
  }

  state = {}

  render() {
    return (
      <div>
        { JSON.stringify(this.props.data) }
      </div>
    )
  }
}

