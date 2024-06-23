import * as React from 'react'
import { Link } from 'gatsby'
import { NextWorkListType } from '../templates/category-post'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Header from './Header'
import Footer from './Footer'
import { useFooterRefStore } from '../store/storehooks'

interface IDetailLayoutProps {
  category: string
  title: string
  headerImagePath: any
  contentRawData: any
  nextList: NextWorkListType[]
}

export default function DetailLayout({ title, category, headerImagePath, contentRawData, nextList }: IDetailLayoutProps) {
  const { footerRef } = useFooterRefStore()
  const headerImage = getImage(headerImagePath)!
  const richTextDocument = contentRawData
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <b>{text}</b>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => <h3>{children}</h3>,
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p>{children}</p>,
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => <ul>{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => <li>{children}</li>,
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
        const { uri } = node.data
        return <a href={uri}>{children}</a>
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { gatsbyImageData, description } = node.data.target
        // console.log('node====>', gatsbyImageData, description)

        return <GatsbyImage image={getImage(gatsbyImageData)!} alt={description} />
      },
    },
  }

  //console.log(richTextDocument)

  return (
    <>
      <Header />
      <main className="container m-auto border-2 border-red">
        <Link to="/">👈 Go Home</Link>
        <article>
          <h1>{title}</h1>
          <GatsbyImage image={headerImage} alt={title} />

          {/* bodyRichText Data */}
          <div>{renderRichText(richTextDocument, options)}</div>
        </article>
        <div>
          <strong>{`Next ${category}`}</strong>
          <ul>
            {nextList.map((item, index) => {
              const date = new Date(`${item.createdAt}`)
              const headerImage = getImage(item.ogImage.gatsbyImageData)!

              return (
                <li key={index}>
                  <Link to={`/${category}/${item.slug}`}>
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                    <span>{date.toLocaleString()}</span>
                    <GatsbyImage image={headerImage} alt={item.title} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <Link to="/">👈 Go Home</Link>
      </main>
      <Footer footerRef={footerRef} />
    </>
  )
}
