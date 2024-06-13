import * as React from 'react'
import DetailLayout from '../components/DetailLayout'
import SEO from '../components/Seo'

type PageContextType = {
  category: string
  createdAt: string
  description: string
  ogImageUrl: string
  slug: string
  title: string
}

type TemplatePropsType = {
  pageContext: PageContextType
  location: {
    pathname: string
  }
}

export default function CategoryPostTemplate({ pageContext }: TemplatePropsType) {
  console.log(pageContext)
  return <DetailLayout title={pageContext.title} category={pageContext.category} nextList={[]} />
}

export const Head = ({ pageContext, location }: TemplatePropsType) => {
  return <SEO title={pageContext.title} description={pageContext.description} imagePath={pageContext.ogImageUrl} pathname={location.pathname} />
}
