import * as React from 'react'
import { useSiteMetadata } from '@hooks/use-site-metadata'
import { useModalStateStore, useSidebarStatusStore } from '@store/storehooks'
import { MODAL, SIDEBAR_STATUS } from '@/types/enums'
// import useThemeStore from '../store/useThemeStore'

interface ISEOProps {
  title?: string
  description?: string
  ogImageUrl?: string
  pathname?: string
}

export default function SEO({ title, description, ogImageUrl, pathname }: ISEOProps) {
  const { metadataDefaultInfo, openGraphDefaultImage } = useSiteMetadata()
  const { modalState } = useModalStateStore()
  const { sidebarStatus } = useSidebarStatusStore()
  // const theme = useThemeStore((state: any) => state.theme)

  //기본 메타데이터 정제
  const defaultSiteMetaData = {
    title: metadataDefaultInfo.siteMetadata.title,
    description: metadataDefaultInfo.siteMetadata.description,
    ogUrl: metadataDefaultInfo.siteMetadata.siteUrl,
    ogImageType: openGraphDefaultImage.internal.mediaType,
    ogImagePath: openGraphDefaultImage.publicURL,
  }

  //seo 데이터 정제
  const seo = {
    title: title ? `${title} | ${defaultSiteMetaData.title}` : defaultSiteMetaData.title,
    description: description ? description : defaultSiteMetaData.description,
    og_url: pathname ? `${defaultSiteMetaData.ogUrl}${pathname}` : `${defaultSiteMetaData.ogUrl}`,
    og_image_type: defaultSiteMetaData.ogImageType,
    og_image_path: ogImageUrl ? `${defaultSiteMetaData.ogUrl}${ogImageUrl}` : `${defaultSiteMetaData.ogUrl}${openGraphDefaultImage.publicURL}`,
  }

  //body에 overflow hidden 처리 (사이드바, 모달 닫기)
  const changeOverflowState = (sidebarStatus: any, modalState: any) => {
    if (sidebarStatus === SIDEBAR_STATUS.CLOSE && modalState === MODAL.RESET) return 'auto'

    return 'hidden'
  }

  return (
    <>
      {/* HTML attributes & 정적 Metadata */}
      <html lang="ko" />
      <meta name="author" content="작성자" />
      <meta name="publisher" content="작성자" />
      <meta name="generator" content="Gatsby 5.13.5" />
      <meta httpEquiv="Subject" content="웹 포트폴리오" />
      <meta httpEquiv="Email" content="test@gmail.com" />
      <meta httpEquiv="Reply-To" content="test@gmail.com" />
      <meta
        name="keywords"
        content="웹 포트폴리오, 프론트엔드 포트폴리오, 웹 퍼블리셔 포트폴리오, 경력 프론트엔드, 경력 웹 퍼블리셔, 경력 UI 개발자, 프론트엔드, 프론트엔드 개발자, 웹 퍼블리셔, 퍼블리셔, UI 개발자"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={defaultSiteMetaData.title} />
      <meta property="og:locale" content="ko" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="580" />
      <meta property="og:image:type" content={seo.og_image_type} />
      <meta name="twitter:site" content="@test" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="580" />
      <meta name="twitter:image:type" content={seo.og_image_type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* 동적 Metadata */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.og_image_path} />
      <meta property="og:url" content={seo.og_url} />
      <meta property="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.og_image_path} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.og_image_path} />

      {/* 페이지 타이틀 */}
      <title>{seo.title}</title>

      {/* Body Tag */}
      <body style={{ overflow: changeOverflowState(sidebarStatus, modalState) }} />
    </>
  )
}
