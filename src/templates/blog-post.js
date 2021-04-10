import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./blog-posts.css"
import Particles from 'react-particles-js'
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>

      <div>
        <h1>{post.frontmatter.title}</h1>
        <div className="post" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Particles></Particles>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`