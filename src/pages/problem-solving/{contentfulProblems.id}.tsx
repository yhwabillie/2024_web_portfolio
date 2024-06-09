import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import Seo from '../../components/Seo'
import DetailLayout from '../../components/DetailLayout'

export default function ProjectDetail({ data }: PageProps<Queries.ProblemsQuery>) {
  return <DetailLayout category={'problem-solving'} title={`${data.contentfulProblems?.title}`} nextList={data.allContentfulProblems.nodes} />
}

export const query = graphql`
  query Problems($id: String!) {
    contentfulProblems(id: { eq: $id }) {
      id
      title
    }

    allContentfulProblems(filter: { id: { ne: $id } }, sort: { createdAt: DESC }) {
      nodes {
        id
        title
        createdAt
      }
    }
  }
`

export const Head = ({ data }: PageProps<Queries.ProblemsQuery>) => <Seo title={`${data.contentfulProblems?.title}`} />
