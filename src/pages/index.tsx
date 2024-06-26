import * as React from 'react'
import { HeadFC, Link, graphql, type PageProps } from 'gatsby'
import { FaArrowRight } from 'react-icons/fa6'
import dayjs from 'dayjs'
import ko from 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useFooterRefStore, useMainPageRefsStore } from '@store/storehooks'
import SEO from '@components/Seo'
import { StaticImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CSSPlugin } from 'gsap'

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
  const mouseObjRef = React.useRef<any>(null)

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

  useGSAP(() => {
    window.addEventListener('mousemove', (e) => {
      const depth = 40
      const moveX = (e.pageX - window.innerWidth / 2) / depth
      const moveY = (e.pageY - window.innerHeight / 2) / depth
      gsap.to(mouseObjRef.current, {
        x: moveX,
        y: moveY,
        rotateZ: -20,
      })
    })
  })

  React.useEffect(() => {
    setMainPageRefs(allRefs)
  }, [footerRef])

  return (
    <article className="h-full bg-theme">
      <section id="visualView" ref={visualViewRef}>
        <div className="container flex flex-col justify-between md:flex-row">
          <div
            className="relative after:content-[''] after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-black after:opacity-10 w-full h-auto mb-40 overflow-hidden xs:mb-16 sm:mb-20 sm:h-405 md:mb-0 md:w-755 md:h-486 lg:w-1094 lg:h-621 
            rounded-tl-sm rounded-br-sm
            lg:rounded-tl-md lg:rounded-br-md
            xl:rounded-tl-lg xl:rounded-br-lg 
            xl:w-1424 xl:h-808"
          >
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full">
              <img className="w-full h-full" src={visual_bg_path.default} alt="visual mockup gif" />
              <span className="sr-only">웹 프론트 및 퍼블리싱 포트폴리오 화면 영상 보러가기</span>
            </div>

            <div className="absolute top-0 bottom-0 left-0 right-[26%] visual-text-bg">
              <span className="sr-only">비쥬얼 타이틀 바탕 음영 배경</span>
            </div>

            <div className="absolute top-[50px] left-[50px] md:top-[80px] md:left-[80px] lg:top-[80px] lg:left-[90px] xl:top-[130px] xl:left-[141px] text-white z-2">
              <strong className="text-shadow text-26 sm:text-32 md:text-32 lg:text-48 xl:text-52">
                간단한 UI 설계 <br /> 매력적인 인터랙션
              </strong>
              <p className="mt-20 font-bold text-shadow text-15 lg:text-22 leading-2">
                누구나 사용할 수 있는 UI 컴포넌트와 <br /> 시선을 끄는 인터랙션을 개발하는 이윤화입니다.
              </p>
            </div>

            <div
              className="absolute top-0 right-0 pt-0 pl-28 pb-23 rounded-bl-lg z-2 bg-theme 
              flex items-center gap-[20px]
              before:content-[''] before:w-38 before:h-38 before:absolute before:z-1 before:top-0 before:left-[-38px] before:r-t-corner
              after:content-[''] after:w-38 after:h-38 after:absolute after:z-1 after:bottom-[-38px] after:right-0 after:r-t-corner"
            >
              <span className="sr-only">현재 접속 디바이스 타입 알림 영역</span>

              <div
                className="
                relative
                after:bubble-tail after:content-[''] after:w-15 after:h-15 after:absolute after:top-[40px] after:right-[-15px]
                px-20 py-12 text-center text-theme bg-theme-reverse rounded-xxs xl:w-300 xl:text-18"
              >
                현재 보고계시는 화면은 <br /> 데스크탑 XL 레이아웃입니다.
              </div>

              <p className="text-center text-60 w-82 h-82">💻</p>
            </div>

            <div className="absolute bottom-0 left-0">
              <Link
                to="/"
                className="relative z-2 rounded-tr-lg
                before:content-[''] before:l-b-corner before:w-38 before:h-38 before:absolute before:top-[-38px] before:left-0
                after:content-[''] after:l-b-corner after:w-38 after:h-38 after:absolute after:bottom-0 after:right-[-38px]
                pb-12 pt-23 px-58 bg-theme flex items-center text-theme-reverse text-22 leading-64"
              >
                영상 보러가기 <span className="sr-only">새창을 열어서 유튜브 영상 웹 사이트로 이동하기 </span>
                <span className="flex items-center justify-center ml-16 rounded-md w-icon-xlarge h-icon-xlarge bg-theme-reverse text-theme">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:block md:w-180 lg:w-206 xl:w-272">
            <div className="relative p-20 mb-16 mr-0 rounded-sm sm:mb-0 sm:mr-8 md:mr-0 md:mb-8 h-160 xs:h-220 sm:h-232 sm:w-232 md:w-full md:h-180 lg:mb-16 lg:h-206 xl:h-272 bg-blue lg:rounded-md xl:rounded-lg">
              <strong className="text-white text-52">2년차</strong>

              <div>
                <p className="text-white text-22">프론트 개발자 / </p>
                <p className="text-white text-22">웹 퍼블리셔 입니다</p>
              </div>

              <p className="text-white">2년 5개월</p>

              {/* gsap */}
              <div ref={mouseObjRef} className="absolute bottom-[-15px] left-[45%] w-fit">
                <StaticImage src={'../images/mockup_sticker.webp'} alt="웹사이트 로고 다크모드" width={160} height={160} placeholder="none" />
              </div>
            </div>
            <div className="p-20 mb-16 mr-0 rounded-sm sm:mb-0 sm:mr-8 md:mr-0 md:mb-8 h-160 xs:h-220 sm:h-232 sm:w-232 md:w-full md:h-170 lg:mb-16 lg:h-259 xl:h-340 bg-darkGray1 lg:rounded-md xl:rounded-lg">
              내가 잘하는건 이거예요
            </div>
            <div className="p-20 rounded-sm sm:w-232 md:w-full h-158 xs:h-220 sm:h-232 md:h-120 lg:h-124 xl:h-164 bg-darkGray1 lg:rounded-md xl:rounded-lg">
              이렇게 공부하고있어요
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
