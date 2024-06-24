import * as React from 'react'
import { HeadFC, Link, graphql, type PageProps } from 'gatsby'
import dayjs from 'dayjs'
import ko from 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useFooterRefStore, useMainPageRefsStore } from '@store/storehooks'
import SEO from '@components/Seo'

dayjs.locale(ko)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('Asia/Seoul')

export default function Page({ data }: PageProps<Queries.PageQuery>) {
  //zustand state
  const { setMainPageRefs } = useMainPageRefsStore()
  const { footerRef } = useFooterRefStore()

  //refs 정의
  const visualViewRef = React.useRef<HTMLDivElement>(null)
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const careerRef = React.useRef<HTMLDivElement>(null)
  const projectRef = React.useRef<HTMLDivElement>(null)
  const problemRef = React.useRef<HTMLDivElement>(null)

  //ref 종합
  const allRefs = [visualViewRef, aboutRef, careerRef, projectRef, problemRef, footerRef]

  //Marquee
  // const marqueeString = 'Frontend-Deveoloper,UI-Publisher,UI/UX,Hello World,Dev'
  // const marqueeArray = [...marqueeString]

  // useGSAP(() => {
  //   const items = gsap.utils.toArray('.items')
  //   const pageWrapper = document.querySelector('.page-wrapper')

  //   items.forEach((container: any, i: number) => {
  //     let localItems = container.querySelectorAll('.item')
  //     let distance = () => {
  //       let lastItemBounds = localItems[localItems.length - 1].getBoundingClientRect()
  //       let containerBounds = container.getBoundingClientRect()

  //       return Math.max(0, lastItemBounds.right - containerBounds.right)
  //     }

  //     gsap.to(container, {
  //       x: () => -distance(),
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: container,
  //         start: 'center bottom',
  //         pinnedContainer: pageWrapper,
  //         end: () => '+=' + distance(),
  //         pin: pageWrapper,
  //         scrub: true,
  //         markers: true,
  //         invalidateOnRefresh: true, // will recalculate any function-based tween values on resize/refresh (making it responsive)
  //       },
  //     })
  //   })
  // })

  React.useEffect(() => {
    setMainPageRefs(allRefs)
  }, [footerRef])

  return (
    <article className="h-full bg-theme">
      <section id="visualView" ref={visualViewRef}>
        <div className="container flex flex-col justify-between md:flex-row">
          <div className="w-full h-auto mb-40 xs:mb-16 sm:mb-20 sm:h-video-xsmall md:mb-0 md:w-video-small md:h-video-small rounded-small lg:w-video-medium lg:h-video-medium lg:rounded-medium xl:rounded-large xl:w-video-large xl:h-video-large bg-darkGray1">
            <div>Video</div>
            <div>Video Title</div>
            <div>Title</div>
            <div>Visit</div>
          </div>
          <div className="flex flex-col sm:flex-row md:block md:w-widget-small lg:w-widget-medium xl:w-widget-large">
            <div className="mb-16 mr-0 sm:mb-0 sm:mr-8 md:mr-0 md:mb-8 h-widget-1-xxsamll xs:h-widget-1-xsmall sm:h-widget-xsamll sm:w-widget-xsmall md:w-full md:h-widget-1-small rounded-small lg:mb-16 lg:h-widget-1-medium xl:h-widget-1-large bg-blue lg:rounded-medium xl:rounded-large">
              1
            </div>
            <div className="mb-16 mr-0 sm:mb-0 sm:mr-8 md:mr-0 md:mb-8 h-widget-1-xxsamll xs:h-widget-1-xsmall sm:h-widget-xsamll sm:w-widget-xsmall md:w-full md:h-widget-2-small rounded-small lg:mb-16 lg:h-widget-2-medium xl:h-widget-2-large bg-darkGray1 lg:rounded-medium xl:rounded-large">
              2
            </div>
            <div className="sm:w-widget-xsmall md:w-full h-widget-3-xsmall xs:h-widget-1-xsmall md:h-widget-3-small rounded-small lg:h-widget-3-medium xl:h-widget-3-large bg-darkGray1 lg:rounded-medium xl:rounded-large">
              3
            </div>
          </div>
        </div>
      </section>
      <section id="about" ref={aboutRef}></section>
      {/* <section id="career" ref={careerRef}>
        <ul>
          {data.allContentfulWork.nodes.map((item, index) => {
            return (
              <li key={index}>
                <Link className="text-[1rem]" to={`category/${item.category}/${item.slug}`} state={{ direction: 'navigate-pop' }}>
                  <strong>{item.title}</strong>
                  <p>{`게시일: ${dayjs(item.createdAt).tz().format('YYYY-MM-DD a hh:mm:ss')}`}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </section> */}
      <section id="project" ref={projectRef}></section>
      <section id="problem" ref={problemRef}></section>

      {/* <div className="scrolling-text overflow-hidden bg-blue 2xl:mb-[200px] xl:mb-[120px] lg:mb-[80px] mb-[40px]">
            <div className="container w-[90%] m-auto">
              <ul className="flex justify-start items scrollx-section flex-nowrap">
                {marqueeArray.map((item, index) => (
                  <li key={index} className="item text-[100px] text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
    </article>
  )
}

export const query = graphql`
  query Page {
    allContentfulWork {
      nodes {
        id
        slug
        category
        title
        createdAt
        updatedAt
      }
    }

    allContentfulProject {
      nodes {
        id
        title
        createdAt
      }
    }
  }
`

export const Head: HeadFC = () => <SEO title="메인페이지" description="메인페이지 입니다." />
