import React from 'react'
import Helmet from 'react-helmet'

export default ({frontmatter}) => (
  <Helmet
     title={`${frontmatter.title} | SEND`}
     meta_title={frontmatter.title}
     />
)