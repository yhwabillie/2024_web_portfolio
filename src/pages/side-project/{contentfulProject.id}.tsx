import * as React from 'react'
import { HeadFC, PageProps, graphql } from 'gatsby'
import DetailLayout from '../../components/DetailLayout'
import SEO from '../../components/Seo'

export default function ProjectDetail({ data }: PageProps<Queries.ProjectDetailQuery>) {
  return <DetailLayout category="side-project" title={`${data.contentfulProject?.title}`} nextList={data.allContentfulProject.nodes} />
}

export const query = graphql`
  query ProjectDetail($id: String!) {
    contentfulProject(id: { eq: $id }) {
      id
      title
    }

    allContentfulProject(filter: { id: { ne: $id } }, sort: { createdAt: DESC }) {
      nodes {
        id
        title
        createdAt
      }
    }
  }
`

export const Head: HeadFC<Queries.ProjectDetailQuery> = ({ data, location }) => (
  <SEO title={data.contentfulProject?.title!} pathname={location.pathname} />
)
