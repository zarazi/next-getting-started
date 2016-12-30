import React from 'react'
import Head from 'next/head'
import { Container, Grid, Header, Segment, Image, Dimmer, Loader } from 'semantic-ui-react'
import BlockContent from '../components/block-content'

export default class extends React.Component {
  static async getInitialProps( url ) {
    return {
      CLIENT_ID: '851176135124-4mo0crdo5vst9pfqndd6uifti3ugjofg.apps.googleusercontent.com',
      SCOPES: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/documents'
      ]
    }
  }

  state = {}

  componentDidMount() {
    gapi.auth.authorize(
    {
      'client_id': this.props.CLIENT_ID,
      'scope': this.props.SCOPES.join(' '),
      'immediate': true
    }, this.handleAuthResult)
  }

  handleAuthResult = ( authResult ) => {
    const authorized = authResult && !authResult.error
    if (authorized) {
      this.setState({ authorized })
      this.callScriptFunction()
    }
  }

  callScriptFunction = () => {
    var scriptId = "MFZOLGxRs4yiMENw_PwKUCew3f38vtDZa";

    // Create an execution request object.
    var request = {
        'function': 'testGetFilesFromFolder'
        };

    // Make the API request.
    var op = gapi.client.request({
        'root': 'https://script.googleapis.com',
        'path': 'v1/scripts/' + scriptId + ':run',
        'method': 'POST',
        'body': request
    });

    op.execute(this.getResult);
  }

  getResult = ( resp ) => {
    if (resp.error && resp.error.status) {
        // The API encountered a problem before the script
        // started executing.
        this.setState({
          error: `Error calling API`,
          errorText: JSON.stringify(resp, null, 2)
        })

      } else if (resp.error) {
        // The API executed, but the script returned an error.

        // Extract the first (and only) set of error details.
        // The values of this object are the script's 'errorMessage' and
        // 'errorType', and an array of stack trace elements.
        var error = resp.error.details[0];
        this.setState({
          error: `Script error`,
          errorText: error.errorMessage
        })

      } else {
        // The structure of the result will depend upon what the Apps
        // Script function returns. Here, the function returns an Apps
        // Script Object with String keys and values, and so the result
        // is treated as a JavaScript object (folderSet).
        var storyList = resp.response.result;
        this.setState({ storyList })
      }
  }

  

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script src="https://apis.google.com/js/client.js" />
        </Head>
        <Loader active inline='centered' />
        <Container text>
          { this.state.authorized ? (
              !this.state.error ? (
                this.state.storyList ? (
                  <Segment vertical padded>
                    { this.state.storyList.map( ({ id, name, text }) => (
                      <BlockContent key={id} name={name} text={text} /> 
                    ))}
                  </Segment>
                ) : (
                  <p>Waiting for result</p>
                )
              ) : (
                <p>Error</p>
              )
            ) : (
              <Loader active inline='centered' />
            )
          }
        </Container>
      </div>
    )
  }
}

