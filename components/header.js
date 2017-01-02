import React from 'react'
import Head from 'next/head'
import Router, { route } from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default({ pathname, children }) => (
  <div>
    <Head>
      {/* Import CSS for nprogress */}
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
    </Head>
    { children }
  </div>
)
