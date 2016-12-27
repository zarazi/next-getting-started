import React from 'react'
import { headerStyles } from '../styles/styles'
export default ({ children }) => (
  <header className={ headerStyles }>
    <h1>Page Title - {children}</h1>
  </header>
)
