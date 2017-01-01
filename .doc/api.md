KK-Scripts Web App:
====================
  - KK-Pedia:
    - Execute as: Current User
    - Allow: Anyone
    - POST url: https://script.google.com/macros/s/AKfycbw_pz9bTe_ZvLPsduiTaSAzJlaqLc6jO3CBDBynPGHsKj-a-WdR/exec
      - execute function: createDocInFolder()
    - GET url: https://script.google.com/macros/s/AKfycbwrFgw2QQAEEOPGWRvfegYHcjpLT4aBj3gQSdmERnsh/exec?type=list&root=KK-PEDIA&domain=kanchanapisek.or.th
      - execute function: getFilesFromFolder()
      - notes: works on browser, but not on script

  - KK-Pedia-2:
    - Execute as: Me
    - Allow: Anyone even anonymous
    - POST url: https://script.google.com/macros/s/AKfycbzvjpiMT5DFMdEQXbFoeICOPJY6Q3Qhk6psRgMiKjiFEhovUDY/exec
      - execute function: getFilesFromFolder()


KK-Scripts REST-API:
====================
  - KK-Pedia: 
    - Allow: Anyone
    - ID: MFZOLGxRs4yiMENw_PwKUCew3f38vtDZa


OAuth Credentials:
==================
  - KK-Pedia:
    - Web Client:
      - Client ID: 851176135124-4mo0crdo5vst9pfqndd6uifti3ugjofg.apps.googleusercontent.com
      - Client Secret: https://console.developers.google.com/apis/credentials/oauthclient/851176135124-4mo0crdo5vst9pfqndd6uifti3ugjofg.apps.googleusercontent.com?project=project-id-2702562966201291678


Google Authentication URL:
==========================
  - OAuth Playground
    - https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https://developers.google.com/oauthplayground&prompt=consent&response_type=token&client_id=407408718192.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/drive&access_type=online

  - From sample code (test-kkpedia-apt.html):
    - https://accounts.google.com/o/oauth2/auth?client_id=851176135124-4mo0crdo5vst9pfqndd6uifti3ugjofg.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdocuments&immediate=true&include_granted_scopes=true&proxy=oauth2relay300334534&redirect_uri=postmessage&origin=http%3A%2F%2Flocalhost%3A3030&response_type=token&gsiwebsdk=1&state=337418108%7C0.1295560596&authuser=0&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.th.2t5zZbDPEqQ.O%2Fm%3D__features__%2Fam%3DAQ%2Frt%3Dj%2Fd%3D1%2Frs%3DAGLTcCNcJHydiVndXZwcfNa7aqm2tNay3A


Steps [Get Token from Client Side]:
===============================================================
  Reference https://developers.google.com/identity/protocols/OAuth2UserAgent
  
  1. Ask for permission: 
    - GET url: https://accounts.google.com/o/oauth2/auth?redirect_uri=http://localhost:3030/test/oauth&response_type=token&client_id=851176135124-4mo0crdo5vst9pfqndd6uifti3ugjofg.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/drive%20https://www.googleapis.com/auth/documents&access_type=online

  2. Get access_token from URL fragment redirection (client)
    - get error, if access denied
      - example: https://oauth2.example.com/oauthcallback#error=access_denied
    - might call server to save access_token for later use (optional)

  3. Validate token: 
    - GET url: https://www.googleapis.com/oauth2/v3/tokeninfo?access_token={access_token}
    - Response: 
      {
        "azp": "851176135124-4mo0crdo5vst9pfqndd6uifti3ugjofg.apps.googleusercontent.com",
        "aud": "851176135124-4mo0crdo5vst9pfqndd6uifti3ugjofg.apps.googleusercontent.com",
        "scope": "https://www.googleapis.com/auth/drive",
        "exp": "1483162253",
        "expires_in": "2595",
        "access_type": "online"
      }
    - aud must match client_id
    - get error, if any as {"error":"invalid_token"}

  4. Consume API:
    - need HTTP header: 'Authorization: Bearer {access_token}'


Steps [Get Token from Server Side]:
===============================================================
  Reference https://developers.google.com/identity/protocols/OAuth2WebServer

  1. Ask for permission:
    - GET url: https://accounts.google.com/o/oauth2/auth?redirect_uri=http://localhost:3030/test/oauth2&response_type=code&client_id=851176135124-4mo0crdo5vst9pfqndd6uifti3ugjofg.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/drive%20https://www.googleapis.com/auth/documents&state=test/oauth-test&access_type=online
    - Response:
      - OK: https://oauth2.example.com/auth?code=4/P7q7W91a-oMsCeLvIaQm6bTrgtp7
      - Error: https://oauth2.example.com/auth?error=access_denied

  2. Get access_token from authorization code (server)
    - POST url: https://www.googleapis.com/oauth2/v4/token
      - HTTP header:
        Content-Type: application/x-www-form-urlencoded
      - HTTP body:
        code=4/P7q7W91a-oMsCeLvIaQm6bTrgtp7&
        client_id=8819981768.apps.googleusercontent.com&
        client_secret={client_secret}&
        redirect_uri=https://oauth2.example.com/code&
        grant_type={authorization_code}
    - Response:
      {
        "access_token":"1/fFAGRNJru1FTz70BzhT3Zg",
        "expires_in":3920,
        "token_type":"Bearer"
      }

  3. Consume API:
    - need HTTP header: 'Authorization: Bearer {access_token}'



