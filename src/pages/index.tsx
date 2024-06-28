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

dayjs.locale(ko)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('Asia/Seoul')

export default function Page({ data, ...props }: PageProps<Queries.PageQuery>) {
  //zustand state
  const { setMainPageRefs } = useMainPageRefsStore()
  const { footerRef } = useFooterRefStore()

  //refs 정의
  const visualViewRef = React.useRef<HTMLDivElement>(null)
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const careerRef = React.useRef<HTMLDivElement>(null)
  const projectRef = React.useRef<HTMLDivElement>(null)
  const problemRef = React.useRef<HTMLDivElement>(null)

  const widget_container = React.useRef<HTMLDivElement>(null)
  const video_container = React.useRef<HTMLDivElement>(null)

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

  useGSAP(
    () => {
      let tl = gsap.timeline({ delay: 0.2 })

      //set
      gsap.set('#main_title', {
        opacity: 0,
        y: 100,
      })

      gsap.set('#sub_title', {
        opacity: 0,
        y: 100,
      })

      //timeline
      tl.to('#main_title', {
        opacity: 1,
        y: 0,
        ease: 'back',
      })

      tl.to('#sub_title', {
        opacity: 1,
        y: 0,
        ease: 'back',
      })
    },
    { scope: video_container },
  )

  useGSAP(
    (context, contextSafe) => {
      //set
      gsap.set('.sticker_item', {
        scale: 0,
        opacity: 0,
      })

      //timeline
      let tl = gsap.timeline({ delay: 0.2 })

      tl.to('#widget1', {
        rotate: 6,
        ease: 'circ',
      })

      tl.to('#widget2', {
        rotate: -6,
        ease: 'circ',
      })

      tl.to('#widget3', {
        rotate: 6,
        ease: 'circ',
      })

      tl.to('.sticker_item', {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        ease: 'back',
      })

      window.addEventListener('mousemove', (e) => {
        const stickerElement1 = document.querySelector('#sticker1')
        const stickerElement2 = document.querySelector('#sticker1')

        if (stickerElement1 === null || stickerElement2 === null) return

        const depth1 = 20

        const moveX_1 = (e.pageX - window.innerWidth / 2) / depth1
        const moveY_1 = (e.pageY - window.innerHeight / 2) / depth1

        gsap.to('#sticker1', {
          x: moveX_1,
          y: moveY_1,
          rotateZ: -20,
        })

        gsap.to('#sticker2', {
          x: moveX_1,
          y: moveY_1,
          rotateZ: 20,
        })

        gsap.to('#sticker3', {
          x: moveX_1,
          y: moveY_1,
        })

        gsap.to('#sticker4', {
          x: moveX_1,
          y: moveY_1,
        })

        gsap.to('#sticker5', {
          x: moveX_1,
          y: moveY_1,
          rotateZ: 10,
        })
      })
    },
    { scope: widget_container },
  )

  React.useEffect(() => {
    setMainPageRefs(allRefs)
  }, [footerRef])

  return (
    <article className="h-full bg-theme">
      <section id="visualView" className="min-w-250" ref={visualViewRef}>
        <div className="container flex flex-col justify-between md:pt-35 md:flex-row">
          <div
            ref={video_container}
            className="relative after:content-[''] after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-black after:opacity-10 overflow-hidden
            w-full
            h-200
            xs:h-256
            mb-0
            sm:rounded-bl-0 sm:mb-45
            sm:h-405 
            md:w-755 md:h-486 md:mb-0
            lg:w-1094 lg:h-621 
            lg:rounded-tl-md lg:rounded-br-md
            xl:rounded-tl-lg xl:rounded-br-lg 
            xl:w-1424 xl:h-808
            rounded-tl-sm rounded-br-sm
            rounded-bl-sm
            "
          >
            <div className="absolute top-[50%] left-[50%] bg-gray-1 translate-x-[-50%] translate-y-[-50%] w-full h-full">
              {/* <img className="w-full h-full" src={visual_bg_path.default} alt="visual mockup gif" /> */}
              <span className="sr-only">웹 프론트 및 퍼블리싱 포트폴리오 화면 영상 보러가기</span>
            </div>

            <div className="absolute top-0 bottom-0 left-0 right-[26%] visual-text-bg">
              <span className="sr-only">비쥬얼 타이틀 바탕 음영 배경</span>
            </div>

            <div className="hidden sm:block absolute top-[50px] left-[50px] md:top-[80px] md:left-[80px] lg:top-[80px] lg:left-[90px] xl:top-[130px] xl:left-[141px] text-white z-2">
              <strong id="main_title" className="block text-shadow text-26 sm:text-32 md:text-32 lg:text-48 xl:text-52">
                간단한 UI 설계 <br /> 매력적인 인터랙션
              </strong>
              <p id="sub_title" className="mt-20 font-bold text-shadow text-15 lg:text-22 leading-2">
                누구나 사용할 수 있는 UI 컴포넌트와 <br /> 시선을 끄는 인터랙션을 개발하는 이윤화입니다.
              </p>
            </div>

            <div
              className="absolute top-0 right-0 rounded-bl-lg z-2 bg-theme 
              flex items-center gap-[20px]
              before:content-[''] before:w-38 before:h-38 before:absolute before:z-1 before:top-0 before:left-[-38px] before:r-t-corner
              after:content-[''] after:w-38 after:h-38 after:absolute after:z-1 after:bottom-[-38px] after:right-0 after:r-t-corner
              pt-0 lg:pl-23 lg:pb-23
              pl-10 pb-10
              "
            >
              <span className="sr-only">현재 접속 디바이스 타입 알림 영역</span>

              <p className="text-center text-40 sm:text-52 md:text-60 w-60 h-60 sm:w-82 sm:h-82">💻</p>
            </div>

            <div className="absolute bottom-0 left-0 hidden sm:block">
              <Link
                to="/"
                className="relative z-2 rounded-tr-lg
                before:content-[''] before:l-b-corner before:w-38 before:h-38 before:absolute before:top-[-38px] before:left-0
                after:content-[''] after:l-b-corner after:w-38 after:h-38 after:absolute after:bottom-0 after:right-[-38px]
                bg-theme flex items-center text-theme-reverse md:text-22 leading-64
                md:pb-12 md:pt-23 md:px-58 text-18
                pt-10 pb-0 pl-20 pr-25
              "
              >
                동영상으로 보기 <span className="sr-only">영상 클릭하여 시청하기</span>
                <span className="flex items-center justify-center ml-16 rounded-md w-icon-xlarge h-icon-xlarge bg-theme-reverse text-theme">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Title */}
          <div className="block mt-20 px-14 mb-70 sm:hidden">
            <strong id="main_title" className="block font-600 text-26 sm:text-32 md:text-32 lg:text-48 xl:text-52">
              간단한 UI 설계 <br /> 매력적인 인터랙션
            </strong>
            <p id="sub_title" className="my-20 text-15 lg:text-22 leading-1.5">
              누구나 사용할 수 있는 UI 컴포넌트와 <br /> 시선을 끄는 인터랙션을 개발하는 이윤화입니다.
            </p>
            <Link to="/" className="relative flex items-center justify-center bg-gray-1 text-theme-reverse leading-64 text-18 rounded-xxs">
              동영상으로 보기 <span className="sr-only">영상 클릭하여 시청하기</span>
              <div className="flex items-center justify-center ml-16 rounded-md w-30 h-30 bg-theme-reverse text-theme">
                <FaArrowRight />
              </div>
            </Link>
          </div>

          <div
            ref={widget_container}
            className="flex flex-col mr-0 xxs:pr-20 md:mr-18 sm:pr-0 md:mr-24 lg:mr-30 md:pr-0 sm:flex-row md:block md:w-180 lg:w-206 xl:w-272"
          >
            <div
              id="widget1"
              className="relative w-full p-20 mb-16 mr-0 origin-bottom-right rounded-sm sm:mb-0 md:mr-0 md:mb-8 h-160 w-m-245 xs:h-220 sm:h-232 sm:w-232 md:w-full md:h-180 lg:mb-16 lg:h-206 xl:h-272 bg-blue-1 lg:rounded-md xl:rounded-lg"
            >
              <strong className="text-white text-shadow-s text-40 md:text-26 lg:text-30 xl:text-52">2년차</strong>

              <div className="mb-10 leading-1.4 relative z-1">
                <p className="font-medium text-white text-shadow-s text-22 md:text-22 xl:text-26">프론트 개발자 & </p>
                <p className="font-medium text-white text-shadow-s text-18 xl:text-22">웹 퍼블리셔 입니다</p>
              </div>

              <div className="w-70 h-70 xs:w-150 xs:h-150 sm:w-80 sm:h-80 absolute bottom-[70px] xs:bottom-[20px] right-[14px] block md:hidden">
                <StaticImage src={'../images/sticker_1.png'} alt="프론트 개발자 스티커 이미지" width={150} height={150} placeholder="none" />
              </div>

              {/* gsap */}
              <div
                id="sticker1"
                className="md:w-50 md:h-50 lg:w-80 lg:h-80 xl:w-100 xl:h-100 hidden md:block sticker_item absolute bottom-[0px] left-[45%]"
              >
                <StaticImage src={'../images/sticker_1.png'} alt="프론트 개발자 스티커 이미지" width={100} height={100} placeholder="none" />
              </div>
            </div>
            <div
              id="widget2"
              className="relative p-20 mb-16 mr-0 origin-top-left rounded-sm text-theme sm:mb-0 md:mr-0 md:mb-8 h-160 xs:h-220 sm:h-232 sm:w-232 md:w-full md:h-170 lg:mb-16 lg:h-259 xl:h-340 bg-blue-2 lg:rounded-md xl:rounded-lg"
            >
              <strong className="text-30 md:text-26 lg:text-30 xl:text-40">잘하는 것을</strong>
              <p className="text-18 xl:text-22 font-medium leading-1.4">
                쏟아낼 수 있는 곳을 <br /> 찾고있어요
              </p>

              <div className="w-70 h-70 xs:w-150 xs:h-150 sm:w-80 sm:h-80 absolute bottom-[70px] xs:bottom-[20px] right-[14px] block md:hidden">
                <StaticImage src={'../images/sticker_2.png'} alt="프론트 개발자 스티커 이미지" width={150} height={150} placeholder="none" />
              </div>

              {/* gsap */}
              <div id="sticker2" className="w-40 h-40 lg:w-70 lg:h-70 xl:w-80 xl:h-80 hidden md:block sticker_item absolute bottom-[0px] left-[30%]">
                <StaticImage src={'../images/sticker_2.png'} alt="Styled-components" width={480} height={480} placeholder="none" />
              </div>
              <div id="sticker3" className="w-50 h-50 lg:w-70 lg:h-70 xl:w-90 xl:h-90 hidden md:block sticker_item absolute bottom-10px] right-[10%]">
                <StaticImage src={'../images/sticker_3.png'} alt="tailwind css" width={352} height={340} placeholder="none" />
              </div>
              <div id="sticker4" className="w-50 h-50 lg:w-90 lg:h-90 xl:w-130 xl:h-130 hidden md:block sticker_item absolute bottom-30px] left-[0%]">
                <StaticImage src={'../images/sticker_4.png'} alt="GSAP" width={130} height={130} placeholder="none" />
              </div>
            </div>
            <div
              id="widget3"
              className="relative p-20 origin-bottom-right rounded-sm sm:w-232 md:w-full h-158 xs:h-220 sm:h-232 md:h-120 lg:h-124 xl:h-164 bg-gray-1 lg:rounded-md xl:rounded-lg"
            >
              <div>
                <p className="mb-5 leading-1 text-18 xs:text-18 sm:text-15">모두와</p>
                <strong className="block mb-10 text-22 xs:text-30 md:text-22 xl:text-30 leading-1">공유할 수 있는</strong>
                <p className="text-18 md:text-15 xl:text-22 leading-1">컴포넌트를 만들어요</p>
              </div>

              <div className="w-70 h-70 xs:w-150 xs:h-150 sm:w-80 sm:h-80 absolute bottom-[70px] xs:bottom-[20px] right-[14px] block md:hidden">
                <StaticImage src={'../images/sticker_5.png'} alt="프론트 개발자 스티커 이미지" width={150} height={150} placeholder="none" />
              </div>

              {/* gsap */}
              <div id="sticker5" className="w-50 h-50 lg:w-70 lg:h-70 xl:w-80 xl:h-80 hidden md:block sticker_item absolute bottom-[10px] right-[0%]">
                <StaticImage src={'../images/sticker_5.png'} alt="Storybook" width={80} height={80} placeholder="none" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" ref={aboutRef}></section>
      <section id="career" ref={careerRef}>
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
      </section>
      <section id="project" ref={projectRef}></section>
      <section id="problem" ref={problemRef}></section>

      {/* <div className="scrolling-text overflow-hidden bg-blue-1 2xl:mb-[200px] xl:mb-[120px] lg:mb-[80px] mb-[40px]">
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
