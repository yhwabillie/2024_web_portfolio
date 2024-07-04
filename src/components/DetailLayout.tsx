import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { useFooterRefStore } from '@store/storehooks'
import { NextWorkListType } from '@templates/category-post'
import { FaHome } from 'react-icons/fa'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import dayjs from 'dayjs'
import ko from 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale(ko)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('Asia/Seoul')

interface IDetailLayoutProps {
  id: string
  category: string
  title: string
  company: string
  product: string
  tags: string[]
  role: string[]
  startDate: string
  endDate: string
  headerImagePath: any
  contentRawData: any
  nextList: NextWorkListType[]
}

export default function DetailLayout({ title, category, headerImagePath, contentRawData, nextList }: IDetailLayoutProps) {
  const headerImage = getImage(headerImagePath)!
  const richTextDocument = contentRawData
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <b>{text}</b>,
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <h2 className="block mb-30 text-24 sm:text-28 md:text-48 font-[600] text-center tracking-tighter">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
        <h3 className="block mb-5 text-20 sm:text-24 md:text-28 font-[600] tracking-tighter">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
        <h4 className="block mb-5 text-18 sm:text-20 md:text-24 text-blue-highlight font-[500] tracking-tighter before:content-['👉'] before:inline-block before:mr-10">
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => (
        <h5 className="block mb-15 text-15 sm:text-18 md:text-20 font-[500] tracking-tighter">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => (
        <h6 className="block mb-15 text-15 sm:text-18 md:text-20 font-[500] tracking-tighter">{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className="text-15 sm:text-18 md:text-20 tracking-tighter leading-1.7 mb-30 opacity-75">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => <ul>{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => <li>{children}</li>,
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
        const { uri } = node.data
        return <a href={uri}>{children}</a>
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { gatsbyImageData, description } = node.data.target
        //console.log('node====>', gatsbyImageData, description)

        return <GatsbyImage className="mb-30 rounded-xxs sm:rounded-sm" image={getImage(gatsbyImageData)!} alt={description} />
      },
    },
  }

  useGSAP(() => {
    //커리어 아이템 호버 event
    let careerItems = gsap.utils.toArray<HTMLElement>('.career_item')

    careerItems.forEach((selector) => {
      let CareerItemTL = gsap.timeline({ paused: true, reversed: true })

      CareerItemTL.to(
        selector.querySelectorAll('section'),
        {
          y: -6,
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
          duration: 0.2,
        },
        0,
      )

      selector.addEventListener('mouseenter', () => CareerItemTL.play())
      selector.addEventListener('mouseleave', () => CareerItemTL.reverse())
    })
  })

  return (
    <div className="container">
      {/* bodyRichText Data */}
      <section className="mt-40 mb-88 sm:mt-88 sm:mb-150 w-full sm:w-500 md:w-768 mx-auto">
        <article>{renderRichText(richTextDocument, options)}</article>
      </section>
      <div className="pb-100">
        <div className="relative mb-30 md:mb-56 text-center before:content-[''] before:absolute before:left-0 before:top-[15%] before:translate-y-[-50%] before:w-full before:h-1 before:bg-theme-reverse">
          <div className="bg-theme relative z-3 w-fit mx-auto px-20">
            <strong className="block w-fit mx-auto mb-30 text-20 sm:text-28 md:text-32 text-center leading-1 font-[600]">{`👩‍💻 다른 ${category} 보기`}</strong>
            <Link className="flex justify-center items-center gap-[10px] py-10 px-30 border w-fit mx-auto opacity-70 rounded-[21px]" to="/">
              <FaHome className="text-20" />
              <span className="text-15 block leading-[20px]">메인으로 돌아가기</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-y-[36px] sm:gap-x-[2%] sm:grid-cols-[repeat(2,49%)] md:gap-x-[2%] md:grid-cols-[repeat(3,32%)] lg:gap-x-[1%] lg:grid-cols-[repeat(4,24%)]">
          {nextList.map((item, index) => {
            const date = new Date(`${item.createdAt}`)
            const headerImage = getImage(item.ogImage.gatsbyImageData)!

            return (
              <article key={item.id} className="career_item relative">
                <Link className="link-overlay" to={`/category/${item.category}/${item.slug}`}>
                  <span className="sr-only">클릭하여 상세보기</span>
                </Link>

                <section className="block w-full border border-gray-2 rounded-xxs mb-14">
                  <GatsbyImage className="block object-cover w-full h-full rounded-xxs" image={headerImage} alt={item.title} />
                </section>

                <header>
                  <div className="text-15 opacity-85 tracking-tighter text-gray-2">{item.company}</div>
                  <div className="flex projects-center">
                    <p className="text-15 opacity-85 tracking-tighter">
                      {item.role.map((role, index) => (
                        <span key={index} className="inline-block first:mr-5 first:after:content-[','] last:after:content-[''] last:mr-0">
                          {role}
                        </span>
                      ))}
                    </p>
                    <time className="block tracking-tighter text-15 opacity-85 before:bg-theme-reverse before:content-[''] before:relative before:inline-block before:h-10 before:w-1 before:my-0 before:mx-8">
                      {`${dayjs(item.startDate).tz().format('YYYY-MM')} ~ ${dayjs(item.endDate).tz().format('YYYY-MM')}`}
                    </time>
                  </div>
                  <h4 className="block mt-15">
                    <span className="text-15 text-blue-highlight">{item.product}</span>
                    <span className="ellipsis font-[700] text-18 leading-23">{item.title}</span>
                    <span className="mt-5 text-15 ellipsis opacity-90">{item.description}</span>
                  </h4>
                </header>

                <footer className="mt-10 text-15 text-blue-highlight">
                  {item.tags.map((tag, index) => (
                    <span key={index} className='inline-block opacity-85 before:content-["#"] pr-5 last:pr-0'>
                      {tag}
                    </span>
                  ))}
                </footer>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
