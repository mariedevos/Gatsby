import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FilesPage = ({ data }) => (
  <Layout>
    <SEO title="Files" />
    <h1>Files</h1>
    <ul>
      {data.allFile.edges.map(({ node }) => (
        <li>
          {node.name} - {node.size}
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          sourceInstanceName
          birthTime
          size
        }
      }
    }
  }
`

export default FilesPage
