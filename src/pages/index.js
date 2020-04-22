import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>{data.site.siteMetadata.description}</p>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li>
          <Link to={node.fields.slug}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
        </li>
      ))}
    </ul>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
