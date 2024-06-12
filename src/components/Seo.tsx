import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { DeepNonNullable } from 'utility-types'

export default function Seo() {
  const { site, openGraphDefaultImage } = useStaticQuery<DeepNonNullable<Queries.MetaDataQuery>>(graphql`
    query MetaData {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }

      openGraphDefaultImage: file(relativePath: { eq: "open-graph/default-og.png" }) {
        publicURL
        relativePath
        name
        internal {
          mediaType
        }
      }
    }
  `)

  console.log(openGraphDefaultImage)

  return (
    <>
      {/* HTML attributes */}
      <html lang="ko" />
      <title>{site?.siteMetadata?.title}</title>

      {/* Metadata */}
      <meta name="description" content={site?.siteMetadata?.description} />
      <meta name="image" content={`${site?.siteMetadata?.siteUrl}${openGraphDefaultImage.publicURL}`} />
      <meta name="author" content="author" />
      <meta name="generator" content="Gatsby 5.13.5" />
      <meta name="Reply-To" content="yhwabillie93@gmail.com" />
      <meta
        name="keywords"
        content="웹 포트폴리오, 프론트엔드 포트폴리오, 웹 퍼블리셔 포트폴리오, 경력 프론트엔드, 경력 웹 퍼블리셔, 경력 UI 개발자, 프론트엔드, 프론트엔드 개발자, 웹 퍼블리셔, 퍼블리셔, UI 개발자"
      />

      {/* Open Graph - 기본 */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${site?.siteMetadata?.siteUrl}`} />
      <meta property="og:title" content={site?.siteMetadata?.title} />
      <meta name="og:image" content={`${site?.siteMetadata?.siteUrl}${openGraphDefaultImage.publicURL}`} />
      <meta name="og:description" content={site?.siteMetadata?.description} />
      <meta property="og:site_name" content="웹 포트폴리오 오픈 그래프 테스트" />
      <meta property="og:locale" content="ko" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="580" />
      <meta property="og:image:type" content={openGraphDefaultImage.internal.mediaType} />

      {/* Robot */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Twitter */}
      <meta name="twitter:title" content={site?.siteMetadata?.title} />
      <meta name="twitter:description" content={site?.siteMetadata?.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${site?.siteMetadata?.siteUrl}${openGraphDefaultImage.publicURL}`} />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="580" />
      <meta name="twitter:image:type" content={openGraphDefaultImage.internal.mediaType} />

      {/* Naver, Google Verification */}
      {/* <meta name="naver-site-verification" content="" /> */}
    </>
  )
}
