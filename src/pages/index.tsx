import * as React from 'react'
import { HeadFC, Link, graphql, type PageProps } from 'gatsby'
import dayjs from 'dayjs'
import ko from 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import SEO from '../components/Seo'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import Observer from 'gsap/dist/Observer'
import { useGSAP } from '@gsap/react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useFooterRefStore, useMainPageRefsStore } from '../store/storehooks'
const videoBg = require('../images/videos/bg_video.mp4')

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
    <article className="relative z-2 mt-header-small lg:mt-header-medium xl:mt-header-large">
      <div id="visualView" ref={visualViewRef} className=""></div>

      {/* 소개 */}
      <div id="about" ref={aboutRef}></div>

      {/* 경력 */}
      <div id="career" ref={careerRef}>
        <ul>
          {data.allContentfulWork.nodes.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/${item.category}/${item.slug}`}>
                  <strong>{item.title}</strong>
                  <p>{`게시일: ${dayjs(item.createdAt).tz().format('YYYY-MM-DD a hh:mm:ss')}`}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* 개인 프로젝트 */}
      <div id="project" ref={projectRef}></div>

      {/* 문제 해결 */}
      <div id="problem" ref={problemRef}></div>

      {/* <div className="scrolling-text overflow-hidden bg-blue 2xl:mb-[200px] xl:mb-[120px] lg:mb-[80px] mb-[40px]">
        <div className="container w-[90%] m-auto">
          <ul className="items scrollx-section flex justify-start flex-nowrap">
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
