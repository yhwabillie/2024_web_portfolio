import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import Seo from '../../components/Seo'
import DetailLayout from '../../components/DetailLayout'

export default function WorkDetail({ data }: PageProps<Queries.WorkQuery>) {
  return <DetailLayout category="work-experience" title={`${data.contentfulWork?.title}`} nextList={data.allContentfulWork.nodes} />
}

export const query = graphql`
  query Work($id: String!) {
    contentfulWork(id: { eq: $id }) {
      id
      title
    }

    allContentfulWork(filter: { id: { ne: $id } }, sort: { createdAt: DESC }) {
      nodes {
        id
        title
        createdAt
      }
    }
  }
`

export const Head = () => <Seo />
