import React from 'react'

export default ({ children }) => (
  <div>
    <footer>
      <p>{ children }</p>
    </footer>
    <style jsx>{`
      p { font-size: 9px; }
    `}</style>
  </div>
)
