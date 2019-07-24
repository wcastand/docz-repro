import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default props => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <div>Hello</div>
}
