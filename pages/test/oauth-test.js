import React from 'react'
import 'isomorphic-fetch'

export default class extends React.Component {

  static async getInitialProps({ pathname, query, req, res, xhr, err }) {
  }

  state = {}

  async componentDidMount() {
    const access_token = localStorage.getItem('KK-PEDIA-TOKEN')
    if (access_token) {
      const tokenInfo = await this.validateToken(access_token)
      this.setState({ tokenInfo })

      if (tokenInfo && !tokenInfo.error) {
        console.log(`> calling script..`)
        const 
          scriptId = 'MFZOLGxRs4yiMENw_PwKUCew3f38vtDZa',
          root = 'https://script.googleapis.com',
          path = 'v1/scripts/' + scriptId + ':run',
          url = `${root}/${path}`

        const result = await this.callingScript( url, access_token )
        // console.log(`result: ${JSON.stringify(result)}`)

        this.setState({ result })
      } else {
        this.setState({ error: tokenInfo.error, errorType: 'invalid-token' })
      }
    } else {
      this.setState({ error: `No access token, need authentication`, errorType: 'no-token' })
    }
  }

  async validateToken( access_token ) {
    const res = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${access_token}`)
    const data = await res.json()
    return data
  }

  async callingScript( url, access_token ) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'function': 'testGetFilesFromFolder'
      })
    })
    const data = await res.json()
    return data
  }
  

  render() {
    return (
      <div>
        { this.state.result 
          ? <pre>{ JSON.stringify(this.state.result)}</pre>
          : this.state.error
            ? <pre>{ JSON.stringify(this.state.errorType)}</pre>
            : <pre>Waiting...</pre>
        }
      </div>
    )
  }
}

