import * as React from 'react'
import DetailLayout from '../components/DetailLayout'
import SEO from '../components/Seo'

export type WorkListType = {
  id: string
  category: string
  createdAt: string
  description: string
  ogImage: {
    publicUrl: string
    gatsbyImageData: any
  }
  headerImageUrl: any
  slug: string
  title: string
}

interface PageContextType extends WorkListType {
  workList: WorkListType[]
}

type TemplatePropsType = {
  pageContext: PageContextType
  location: {
    pathname: string
  }
}

export default function CategoryPostTemplate({ pageContext }: TemplatePropsType) {
  return (
    <DetailLayout
      title={pageContext.title}
      category={pageContext.category}
      headerImageUrl={pageContext.headerImageUrl}
      nextList={pageContext.workList}
    />
  )
}

export const Head = ({ pageContext, location }: TemplatePropsType) => {
  return <SEO title={pageContext.title} description={pageContext.description} imagePath={pageContext.ogImage} pathname={location.pathname} />
}
