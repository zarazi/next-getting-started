import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default ({ children }) => (
  <div>
    <Header>Page Header</Header>
    { children }
    <Footer>Footer</Footer>
  </div>
)