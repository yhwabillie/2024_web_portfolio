import * as React from 'react'
import DetailLayout from '../components/DetailLayout'
import SEO from '../components/Seo'

type BaseWorkDataType = {
  id: string
  title: string
  slug: string
  category: string
  createdAt: string
  description: string
}

export interface WorkListType extends BaseWorkDataType {
  ogImageUrl: string
  headerImagePath: any
}

export interface NextWorkListType extends BaseWorkDataType {
  ogImage: {
    gatsbyImageData: any
    publicUrl: string
  }
}

interface PageContextType extends WorkListType {
  workList: NextWorkListType[]
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
      headerImagePath={pageContext.headerImagePath}
      nextList={pageContext.workList}
    />
  )
}

export const Head = ({ pageContext, location }: TemplatePropsType) => {
  return <SEO title={pageContext.title} description={pageContext.description} ogImageUrl={pageContext.ogImageUrl} pathname={location.pathname} />
}
