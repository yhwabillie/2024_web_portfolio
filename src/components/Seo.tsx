import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

interface ISeoProps {
  title: string
  description: string
  pathname: string
}

export default function Seo({ title, description, pathname }: ISeoProps) {
  const { title: defaultTitle, description: defaultDescription, siteUrl, image } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      {/* Metadata */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content="younhwa" />
      <meta name="image" content={seo.image} />
      <meta name="generator" content="Gatsby 5.13.5" />
      <meta
        name="keywords"
        content="웹 포트폴리오, 프론트엔드 포트폴리오, 웹 퍼블리셔 포트폴리오, 경력 프론트엔드, 경력 웹 퍼블리셔, 경력 UI 개발자, 프론트엔드, 프론트엔드 개발자, 웹 퍼블리셔, 퍼블리셔, UI 개발자"
      />
      <meta name="Reply-To" content="yhwabillie93@gmail.com" />

      {/* Robot */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:url" content={seo.url} />
      {/* <meta property="og:site_name" content="메나비 - Menabi" />
      <meta property="og:image" content="https://menabi.ai/images/open_graph_image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="675" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="글제목 | 카카오페이 기술 블로그" />
      <meta property="og:description" content="요약글" />
      <meta name="image" content={seo.image} /> */}

      {/* Twitter */}
      {/* <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="675" /> */}

      {/* Other Verification */}
      <meta name="naver-site-verification" content="" />

      {/* Icon & Favicon */}
      <meta name="msapplication-TileColor" content="#ffffff"></meta>
      <meta name="msapplication-TileImage" content="/images/favicons/ms-icon-144x144.png" />
      <link rel="apple-touch-icon-precomposed" href="/images/favicons/apple-icon-precomposed.png" sizes="180x180" />
      <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
      <link rel="icon" href="/favicon-32x32.png" type="image/png" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/images/favicons/favicon-16x16.png" type="image/png" sizes="16x16" />
      <link rel="icon" href="/images/favicons/favicon-32x32.png" type="image/png" sizes="32x32" />
      <link rel="icon" href="/images/favicons/favicon-96x96.png" type="image/png" sizes="96x96" />
      <link rel="icon" href="/images/favicons/android-icon-192x192" type="image/png" sizes="196x196" />
    </>
  )
}
