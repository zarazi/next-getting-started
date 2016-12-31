import React from 'react'
import 'isomorphic-fetch'

export default class extends React.Component {
  static async getInitialProps({ pathname, query, req, res, xhr, err }) {
    return { pathname, query };
  }

  state = {}

  async componentDidMount() {
    // First, parse the query string
    var params = {}, queryString = location.hash.substring(1),
    regex = /([^&=]+)=([^&]*)/g, m;
    while (m = regex.exec(queryString)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    const tokenInfo = await this.validateToken(params['access_token'])
    this.setState({ params, tokenInfo })

    if (tokenInfo && !tokenInfo.error) {
      console.log(`> calling script..`)
      const 
        scriptId = 'MFZOLGxRs4yiMENw_PwKUCew3f38vtDZa',
        root = 'https://script.googleapis.com',
        path = 'v1/scripts/' + scriptId + ':run',
        url = `${root}/${path}`

      const result = await this.callingScript( url, params['access_token'] )
      console.log(`result: ${JSON.stringify(result)}`)

      this.setState({ result })

    }


    // // And send the token over to the server
    // var req = new XMLHttpRequest();
    // // consider using POST so query isn't logged
    // req.open('GET', 'https://' + window.location.host + '/catchtoken?' + queryString, true);

    // req.onreadystatechange = function (e) {
    //   if (req.readyState == 4) {
    //     if(req.status == 200){
    //       window.location = params['state']
    //   }
    //   else if(req.status == 400) {
    //         alert('There was an error processing the token.')
    //     }
    //     else {
    //       alert('something else other than 200 was returned')
    //     }
    //   }
    // };
    // req.send(null);
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
        <pre>{ JSON.stringify(this.props)}</pre>
        <pre>params: { JSON.stringify(this.state.params)}</pre>
        <pre>tokenInfo: { JSON.stringify(this.state.tokenInfo)}</pre>
        <pre>result: { JSON.stringify(this.state.result)}</pre>
      </div>
    )
  }
}

