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

  //image path
  const visual_bg_path = require('../images/visual_mockup.gif')

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
          <div className="relative after:content-[''] after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-black after:opacity-10 w-full h-auto mb-40 overflow-hidden rounded-sm xs:mb-16 sm:mb-20 sm:h-405 md:mb-0 md:w-755 md:h-486 lg:w-1094 lg:h-621 lg:rounded-md xl:rounded-lg xl:w-1424 xl:h-808">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full">
              <img className="w-full h-full" src={visual_bg_path.default} alt="visual mockup gif" />
              <span className="sr-only">웹 프론트 및 퍼블리싱 포트폴리오 화면 영상 보러가기</span>
            </div>

            <div className="absolute top-0 bottom-0 left-0 right-[26%] visual-text-bg"></div>

            <div className="absolute top-[50px] left-[50px] md:top-[80px] md:left-[80px] lg:top-[80px] lg:left-[90px] xl:top-[130px] xl:left-[141px] text-white z-1">
              <strong className="text-shadow text-26 sm:text-32 md:text-32 lg:text-48 xl:text-52">
                간단한 UI 설계 <br /> 매력적인 인터랙션
              </strong>
              <p className="mt-20 font-bold text-shadow text-15 lg:text-22">
                누구나 사용할 수 있는 UI 컴포넌트와 <br /> 시선을 끄는 인터랙션을 개발하는 이윤화입니다.
              </p>
            </div>

            <div>Visit</div>
          </div>
          <div className="flex flex-col sm:flex-row md:block md:w-180 lg:w-206 xl:w-272">
            <div className="mb-16 mr-0 rounded-sm sm:mb-0 sm:mr-8 md:mr-0 md:mb-8 h-160 xs:h-220 sm:h-232 sm:w-232 md:w-full md:h-180 lg:mb-16 lg:h-206 xl:h-272 bg-blue lg:rounded-md xl:rounded-lg"></div>
            <div className="mb-16 mr-0 rounded-sm sm:mb-0 sm:mr-8 md:mr-0 md:mb-8 h-160 xs:h-220 sm:h-232 sm:w-232 md:w-full md:h-170 lg:mb-16 lg:h-259 xl:h-340 bg-darkGray1 lg:rounded-md xl:rounded-lg"></div>
            <div className="rounded-sm sm:w-232 md:w-full h-158 xs:h-220 sm:h-232 md:h-120 lg:h-124 xl:h-164 bg-darkGray1 lg:rounded-md xl:rounded-lg"></div>
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
