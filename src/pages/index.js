import * as React from "react"
import { graphql} from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(link)`
text-decoration:none
`
const BlogTitle = styled.h3`
margin-bottom: 20px;
color: blue;`
export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Eliza's thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
          <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
          </BlogLink>
          <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>

   
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
          }
          fields {
            slug
          }
          excerpt(truncate: true)
        }
      }
    }
  }
`