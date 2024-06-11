import * as React from 'react'
import { HeadFC, PageProps, graphql } from 'gatsby'
import Seo from '../../components/Seo'
import DetailLayout from '../../components/DetailLayout'

export default function ProjectDetail({ data }: PageProps<Queries.ProjectQuery>) {
  return <DetailLayout category="side-project" title={`${data.contentfulProject?.title}`} nextList={data.allContentfulProject.nodes} />
}

export const query = graphql`
  query Project($id: String!) {
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

export const Head = ({ data }: PageProps<Queries.ProjectQuery>) => (
  <Seo title={`${data.contentfulProject?.title}`} description={`${data.contentfulProject?.id}`} openGraphImageSrc="" />
)
