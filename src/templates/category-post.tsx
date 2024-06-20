import * as React from 'react'
import DetailLayout from '../components/DetailLayout'
import SEO from '../components/Seo'
import Layout from '../layouts/index'

type BaseWorkDataType = {
  id: string
  title: string
  slug: string
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
    <>
      <article className="">
        <section style={{ marginBottom: '40px' }} className="w-full h-[800px] rounded-3xl bg-blue">
          section 01
        </section>
        <section className="w-full h-[800px] rounded-3xl bg-blue">section 02</section>
      </article>

      {/* <DetailLayout
        title={pageContext.title}
        category={pageContext.category}
        headerImagePath={pageContext.headerImagePath}
        contentRawData={pageContext.contentRawData}
        nextList={pageContext.workList}
      /> */}
    </>
  )
}

export const Head = ({ pageContext, location }: TemplatePropsType) => {
  return <SEO title={pageContext.title} description={pageContext.description} ogImageUrl={pageContext.ogImageUrl} pathname={location.pathname} />
}
