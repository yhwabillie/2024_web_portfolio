import * as React from 'react'
import { HeadFC, Link, graphql, type PageProps } from 'gatsby'
import dayjs from 'dayjs'
import ko from 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import SEO from '../components/Seo'
import { useSectionRefStore } from '../store/storehooks'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import Observer from 'gsap/dist/Observer'
import { useGSAP } from '@gsap/react'
import { FaArrowRightLong } from 'react-icons/fa6'
const videoBg = require('../images/videos/bg_video.mp4')

dayjs.locale(ko)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('Asia/Seoul')

export default function Page({ data }: PageProps<Queries.PageQuery>) {
  const { setRefArray } = useSectionRefStore()

  const aboutRef = React.useRef<HTMLDivElement>(null)
  const careerRef = React.useRef<HTMLDivElement>(null)
  const projectRef = React.useRef<HTMLDivElement>(null)
  const problemRef = React.useRef<HTMLDivElement>(null)
  const contactRef = React.useRef<HTMLDivElement>(null)
  const sectionsRefArray = [aboutRef, careerRef, projectRef, problemRef]

  //Marquee
  const marqueeString = 'Frontend-Deveoloper,UI-Publisher,UI/UX,Hello World,Dev'
  const marqueeArray = [...marqueeString]

  useGSAP(() => {
    const items = gsap.utils.toArray('.items')
    const pageWrapper = document.querySelector('.page-wrapper')

    items.forEach((container: any, i: number) => {
      let localItems = container.querySelectorAll('.item')
      let distance = () => {
        let lastItemBounds = localItems[localItems.length - 1].getBoundingClientRect()
        let containerBounds = container.getBoundingClientRect()

        return Math.max(0, lastItemBounds.right - containerBounds.right)
      }

      gsap.to(container, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'center bottom',
          pinnedContainer: pageWrapper,
          end: () => '+=' + distance(),
          pin: pageWrapper,
          scrub: true,
          markers: true,
          invalidateOnRefresh: true, // will recalculate any function-based tween values on resize/refresh (making it responsive)
        },
      })
    })
  })

  React.useEffect(() => {
    setRefArray(sectionsRefArray)
  }, [])

  return (
    <article className="relative z-2 mt-md_header lg:mt-header xl:mt-xl_header">
      {/* <div
        id="visual_view"
        ref={aboutRef}
        className="flex justify-between container mx-auto 2xl:h-[808px] 2xl:mb-[200px] xl:h-[720px] xl:mb-[120px] lg:h-[576px] lg:mb-[80px] md:h-[432px] mb-[40px] sm:h-[360px] xs:h-[258px] h-[170px]"
      >
        <div className="xl:w-[1064px] xl:h-[626px] 2xl:w-[1424px] 2xl:h-[808px] relative rounded-[36px] bg-gray">
          <div className="wrap_video h-[inherit]">
            <div className="inner_video h-[inherit] rounded-[36px] overflow-hidden">
              <video width="100%" height="100%" preload="auto" loop autoPlay muted className="">
                <source src={videoBg.default} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <span className="sr-only">2024년 웹 포트폴리오 작업물 영상 보러가기</span>
            </div>
          </div>
          <div className="wrap_text absolute top-[40%] xl:left-[90px] 2xl:left-[150px] translate-y-[-50%] text-white">
            <strong className="xl:text-[48px] 2xl:text-[52px] block mb-[20px]">
              간편한 UI 설계 <br /> 매력적인 인터랙션
            </strong>
            <span className="block text-[22px]">
              누구나 사용할 수 있는 UI 컴포넌트와 <br /> 시선을 끄는 인터랙션을 개발하는 이윤화입니다.
            </span>
          </div>
          <div className="inner_top after:content-[''] after:w-[38px] after:h-[38px] after:bg-edge-round-3 after:dark:bg-edge-round-2 after:bg-cover after:bg-no-repeat after:absolute after:bottom-[-38px] after:right-[0px] before:content-[''] before:w-[38px] before:h-[38px] before:dark:bg-edge-round-2 before:bg-edge-round-3 before:bg-cover before:bg-no-repeat before:absolute before:top-0 before:left-[-38px] px-[27px] rounded-bl-[36px] bg-white dark:bg-black absolute top-0 right-0">
            <div className="w-[94px] h-[94px]"></div>
            <span className="sr-only">이미지 데코</span>
          </div>
          <div className="inner_bottom after:content-[''] after:w-[38px] after:h-[38px] after:absolute after:right-[-38px] after:bottom-0 after:bg-edge-round-4 dark:after:bg-edge-round-1 after:bg-cover after:rotate-[-90deg] before:content-[''] before:w-[38px] before:h-[38px] before:absolute before:bottom-0 before:left-0 before:top-[-38px] before:bg-edge-round-4 dark:before:bg-edge-round-1 before:bg-cover before:rotate-[-90deg] bg-white dark:bg-black absolute bottom-0 rounded-tr-[36px] pt-[25px] pb-[10px] px-[56px]">
            <Link to="/" className="text-[22px]">
              영상 보러가기
              <span className="bg-blue w-[64px] h-[64px] text-white inline-flex items-center justify-center rounded-[32px] ml-[20px]">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>

        <div className="xl:w-[200px] 2xl:w-[272px] xl:h-[626px] 2xl:h-[808px] flex justify-between flex-col">
          <div className="xl:w-[200px] xl:h-[200px] 2xl:w-[272px] 2xl:h-[272px] rounded-[24px] bg-blue"></div>
          <div className="xl:w-[200px] 2xl:w-[272px] xl:h-[280px] 2xl:h-[340px] rounded-[24px] bg-lightGray"></div>
          <div className="xl:w-[200px] 2xl:w-[272px] xl:h-[120px] 2xl:h-[164px] bg-blue"></div>
        </div>
      </div>

      <div className="scrolling-text overflow-hidden bg-blue 2xl:mb-[200px] xl:mb-[120px] lg:mb-[80px] mb-[40px]">
        <div className="container w-[90%] m-auto">
          <ul className="items scrollx-section flex justify-start flex-nowrap">
            {marqueeArray.map((item, index) => (
              <li key={index} className="item text-[100px] text-white">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="career" ref={careerRef} className="container m-auto h-[800px] rounded-3xl mb-[120px] bg-gray">
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

      <div id="project" ref={projectRef} className="container m-auto h-[800px] pt-[84px] rounded-3xl mb-[120px] bg-gray">
        <h2>3. 사이드 프로젝트</h2>
      </div>

      <div id="problem" ref={problemRef} className="container m-auto h-[800px] pt-[84px] rounded-b-3xl bg-gray">
        <h2>4. 문제 해결 문서</h2>
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
