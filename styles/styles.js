import React from 'react'
import css from 'next/css'
export const somestyles = css({
  maxWidth: '500px',
  '@media (max-width: 600px)': {
    maxWidth: '100%'
  }
})
export const otherstyles = css({
  color: 'green',
  ':hover': {
    color: 'blue'
  }
})
export const headerStyles = css({
  fontSize: '16px'
})
export const footerStyles = css({
  width: '100%',
  backgroundColor: '#e5e5e5'
})
export const aboutContainer = css({
  backgroundColor: 'red'
})
