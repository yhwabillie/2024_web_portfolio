import * as React from 'react'
import DetailLayout from '../components/DetailLayout'
import SEO from '../components/Seo'
import Layout from '../layouts/index'
import { Link, navigate } from 'gatsby'

type BaseWorkDataType = {
  id: string
  title: string
  slug: string
  company: string
  product: string
  tags: string[]
  role: string[]
  startDate: string
  endDate: string
  category: string
  createdAt: string
  description: string
  contentRawData: any
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

export default function CategoryPostTemplate({ pageContext, location }: TemplatePropsType) {
  const [allSections, setAllSections] = React.useState<any>([])

  React.useEffect(() => {
    setAllSections(document.querySelectorAll('section'))
  }, [])

  return (
    <DetailLayout
      id={pageContext.id}
      title={pageContext.title}
      category={pageContext.category}
      tags={pageContext.tags}
      role={pageContext.role}
      startDate={pageContext.startDate}
      endDate={pageContext.endDate}
      company={pageContext.company}
      product={pageContext.product}
      headerImagePath={pageContext.headerImagePath}
      contentRawData={pageContext.contentRawData}
      nextList={pageContext.workList}
    />
  )
}

export const Head = ({ pageContext, location }: TemplatePropsType) => {
  return <SEO title={pageContext.title} description={pageContext.description} ogImageUrl={pageContext.ogImageUrl} pathname={location.pathname} />
}
