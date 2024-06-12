import { graphql, useStaticQuery } from 'gatsby'
import { DeepNonNullable } from 'utility-types'

export const useSiteMetadata = () => {
  // DeepNonNullable: 모든 속성은 null이나 undefined 값을 가질 수 없게 됩니다.
  const data = useStaticQuery<DeepNonNullable<Queries.MetaDataQuery>>(graphql`
    query MetaData {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }

      file(relativePath: { eq: "open-graph/default-og.png" }) {
        publicURL
        internal {
          mediaType
        }
      }
    }
  `)

  return {
    metadataDefaultInfo: data.site,
    openGraphDefaultImage: data.file,
  }
}
