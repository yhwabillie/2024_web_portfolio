import * as React from 'react'
import { HeadFC, PageProps, graphql } from 'gatsby'
import DetailLayout from '../../components/DetailLayout'
import SEO from '../../components/Seo'

export default function WorkDetail({ data }: PageProps<Queries.WorkDetailQuery>) {
  return <DetailLayout category="work-experience" title={`${data.contentfulWork?.title}`} nextList={data.allContentfulWork.nodes} />
}

export const query = graphql`
  query WorkDetail($id: String!) {
    contentfulWork(id: { eq: $id }) {
      id
      title
      description
      ogImage {
        publicUrl
      }
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

export const Head: HeadFC<Queries.WorkDetailQuery> = ({ data, location }) => (
  <SEO
    title={data.contentfulWork?.title!}
    pathname={location.pathname}
    description={data.contentfulWork?.description!}
    imagePath={data.contentfulWork?.ogImage?.publicUrl}
  />
)
