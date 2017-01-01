import React from 'react'
import 'isomorphic-fetch'

export default class extends React.Component {

  static async getToken( code ) {
    const data = `code=${code}&client_id=851176135124-4mo0crdo5vst9pfqndd6uifti3ugjofg.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3030%2Foauth2&grant_type=authorization_code`
    const res = await fetch( 'https://www.googleapis.com/oauth2/v4/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencodedn'
      },
      body: data
    })
    const resJson = await res.json()
    return resJson
  }

  static async getInitialProps({ pathname, query, req, res, xhr, err }) {

    if (req) {
      let props = { pathname, query }

      if (query && query.code) {
        const data = `code=${query.code}&client_id=851176135124-4mo0crdo5vst9pfqndd6uifti3ugjofg.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3030%2Ftest%2Foauth2&grant_type=authorization_code`
        const res = await fetch( 'https://www.googleapis.com/oauth2/v4/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: data
        })
        const tokenInfo = await res.json()

        props = { ...props, tokenInfo }
      }

      return props;
    }
  }

  state = {}

  componentDidMount() {
    if (this.props.tokenInfo && this.props.tokenInfo.access_token) {
      localStorage.setItem('KK-PEDIA-TOKEN', this.props.tokenInfo.access_token);
      window.location = `/${this.props.query && this.props.query.state || 'index'}`
    }
  }
  

  render() {
    return (
      <div>
        <pre>{ JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

