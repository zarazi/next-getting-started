import React from 'react'
import { footerStyles } from '../styles/styles'
export default ({ children }) => (
  <footer className={ footerStyles }>
    <p>Footer Test: { children }</p>
  </footer>
)
