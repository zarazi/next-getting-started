import React from 'react'
import HeaderMenu from './header-menu'

export default({ pathname, children }) => (
  <div>
    <HeaderMenu pathname={pathname} />
  </div>
)
