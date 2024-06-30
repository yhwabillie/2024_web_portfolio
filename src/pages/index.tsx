import * as React from 'react'
import { HeadFC, Link, graphql, type PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '@components/Seo'
import { useFooterRefStore, useMainPageRefsStore } from '@store/storehooks'
import dayjs from 'dayjs'
import ko from 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FaArrowDown } from 'react-icons/fa6'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import MobileSummaryTitle from '@components/MobileSummaryTitle'
gsap.registerPlugin(ScrollTrigger)

dayjs.locale(ko)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('Asia/Seoul')

export default function Page({ data }: PageProps<Queries.MainPageQuery>) {
  //zustand state
  const { setMainPageRefs } = useMainPageRefsStore()

  //refs 정의
  const gsapContainer = React.useRef<HTMLElement>(null)

  //asset path
  const visual_bg_path = require('../images/visual_mockup.gif')

  // useGSAP(
  //   () => {
  //     let tl = gsap.timeline({ delay: 0.2 })

  //     //timeline
  //     tl.to('#main_title', {
  //       opacity: 1,
  //       y: 0,
  //       ease: 'back',
  //     })

  //     tl.to('#sub_title', {
  //       opacity: 1,
  //       y: 0,
  //       ease: 'back',
  //     })
  //   },
  //   { scope: video_container },
  // )

  // useGSAP(
  //   (context, contextSafe) => {
  //     //set
  //     gsap.set('.sticker_item', {
  //       scale: 0,
  //       opacity: 0,
  //     })

  //     //timeline
  //     let tl = gsap.timeline({ delay: 0.2 })

  //     tl.to('#widget1', {
  //       rotate: 6,
  //       ease: 'circ',
  //     })

  //     tl.to('#widget2', {
  //       rotate: -6,
  //       ease: 'circ',
  //     })

  //     tl.to('#widget3', {
  //       rotate: 6,
  //       ease: 'circ',
  //     })

  //     tl.to('.sticker_item', {
  //       scale: 1,
  //       opacity: 1,
  //       stagger: 0.1,
  //       ease: 'back',
  //     })

  //     //mouseleave
  //     window.addEventListener('mousemove', (e) => {
  //       const stickerElement1 = document.querySelector('#sticker1')
  //       const stickerElement2 = document.querySelector('#sticker1')

  //       if (stickerElement1 === null || stickerElement2 === null) return

  //       const depth1 = 20

  //       const moveX_1 = (e.pageX - window.innerWidth / 2) / depth1
  //       const moveY_1 = (e.pageY - window.innerHeight / 2) / depth1

  //       gsap.to('#sticker1', {
  //         x: moveX_1,
  //         y: moveY_1,
  //         rotateZ: -20,
  //       })

  //       gsap.to('#sticker2', {
  //         x: moveX_1,
  //         y: moveY_1,
  //         rotateZ: 20,
  //       })

  //       gsap.to('#sticker3', {
  //         x: moveX_1,
  //         y: moveY_1,
  //       })

  //       gsap.to('#sticker4', {
  //         x: moveX_1,
  //         y: moveY_1,
  //       })

  //       gsap.to('#sticker5', {
  //         x: moveX_1,
  //         y: moveY_1,
  //         rotateZ: 10,
  //       })
  //     })
  //   },
  //   { scope: widget_container },
  // )

  // useGSAP(
  //   () => {
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: '#about .title_container',
  //           start: '100% 100%',
  //           end: '100% 100%',
  //           // markers: true,
  //         },
  //       })
  //       .fromTo('#about .title_container span i', { opacity: 0, y: '100%', rotate: '20deg' }, { opacity: 1, y: '0%', rotate: 0, stagger: 0.1 })
  //     gsap.utils.toArray('#about .logo_wrap span').forEach((selector: any) => {
  //       gsap
  //         .timeline({
  //           scrollTrigger: {
  //             trigger: '#about .title_container',
  //             start: '60% 100%',
  //             end: '50% 30%',
  //             // markers: true,
  //             scrub: 1,
  //           },
  //         })
  //         .fromTo(selector, { opacity: 0 }, { opacity: 1 })
  //     })
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: '#about',
  //           start: '100% 100%',
  //           end: '100% 0%',
  //           scrub: 1,
  //           // markers: true,
  //         },
  //       })
  //       .to(
  //         '#a',
  //         {
  //           x: -150,
  //           y: 250,
  //           rotate: 200,
  //           ease: 'none',
  //           duration: 5,
  //         },
  //         0,
  //       )
  //       .to(
  //         '#b',
  //         {
  //           x: -80,
  //           y: 150,
  //           rotate: -10,
  //           ease: 'none',
  //           duration: 5,
  //         },
  //         0,
  //       )
  //       .to(
  //         '#c',
  //         {
  //           x: 60,
  //           y: 40,
  //           rotate: -100,
  //           ease: 'none',
  //           duration: 5,
  //         },
  //         0,
  //       )
  //       .to(
  //         '#d',
  //         {
  //           x: 50,
  //           y: 450,
  //           rotate: 20,
  //           ease: 'none',
  //           duration: 5,
  //         },
  //         0,
  //       )
  //     gsap.utils.toArray('#career .article_container .item').forEach((selector: any, index: number) => {
  //       ScrollTrigger.create({
  //         trigger: selector,
  //         start: '0% 80%',
  //         onEnter: () => {
  //           gsap.set(selector, {
  //             rotationX: '-65deg',
  //             z: '-500px',
  //             opacity: 0,
  //           })
  //           gsap.to(selector, {
  //             rotationX: 0,
  //             z: 0,
  //             opacity: 1,
  //             delay: (index / 3) * 0.05,
  //           })
  //         },
  //         // markers: true,
  //       })
  //     })
  //   },
  //   { scope: container },
  // )

  return (
    <article ref={gsapContainer} className="h-full bg-theme">
      <section>
        <div className="container flex flex-col justify-between md:pt-35 md:flex-row">
          <div
            className="
            relative overflow-hidden
            w-full h-200 mb-0
            xs:h-256
            sm:h-405 sm:rounded-bl-0 sm:mb-45
            md:w-755 md:h-486 md:mb-0
            lg:w-1094 lg:h-621 lg:rounded-tl-md lg:rounded-br-md
            xl:w-1424 xl:h-808 xl:rounded-tl-lg xl:rounded-br-lg 
            rounded-tl-sm rounded-br-sm rounded-bl-sm
            after:content-[''] after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-black after:opacity-10
            "
          >
            <div className="w-full h-full bg-gray-1 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <span className="sr-only">포트폴리오 영상 화면 영역</span>
              {/* <img className="w-full h-full" src={visual_bg_path.default} alt="visual mockup gif" /> */}
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-[26%] summary-title-bg">
              <span className="sr-only">영상 화면 영역 타이틀을 위한 음영 배경</span>
            </div>
            <div
              className="
                hidden absolute z-2 top-[50px] left-[50px] text-white 
                sm:block 
                md:top-[80px] md:left-[80px] 
                lg:left-[90px] 
                xl:top-[130px] xl:left-[141px]
                "
            >
              <h3
                className="
                  opacity-0 translate-y-[100px] block font-[700] text-shadow text-26 
                  sm:text-32 md:text-32 lg:text-48 xl:text-52"
              >
                간단한 UI 설계 <br /> 매력적인 인터랙션
              </h3>
              <h4 className="opacity-0 translate-y-[100px] leading-2 text-15 font-bold text-shadow mt-20 lg:text-22">
                누구나 사용할 수 있는 UI 컴포넌트와 <br /> 시선을 끄는 인터랙션을 개발하는 이윤화입니다.
              </h4>
            </div>

            <div
              className="
              absolute top-0 right-0 z-2 rounded-bl-lg bg-theme pt-0 pb-10 pl-10 flex items-center gap-[20px]
              lg:pb-23 lg:pl-23
              before:content-[''] before:w-38 before:h-38 before:absolute before:z-1 before:top-0 before:left-[-38px] before:r-t-corner
              after:content-[''] after:w-38 after:h-38 after:absolute after:z-1 after:bottom-[-38px] after:right-0 after:r-t-corner
              "
            >
              <span className="sr-only">노트북 아이콘</span>
              <p className="w-60 h-60 text-40 text-center sm:w-82 sm:h-82 sm:text-52 md:text-60">💻</p>
            </div>

            <div className="hidden absolute bottom-0 left-0 sm:block">
              <button
                className="
                relative z-2 flex text-18 leading-64 text-theme-reverse items-center bg-theme pt-10 pb-0 pl-20 pr-25 rounded-tr-lg
                md:text-22 md:pt-23 md:pb-12 md:px-58 
                before:content-[''] before:l-b-corner before:w-38 before:h-38 before:absolute before:top-[-38px] before:left-0
                after:content-[''] after:l-b-corner after:w-38 after:h-38 after:absolute after:bottom-0 after:right-[-38px]
              "
              >
                밑으로 스크롤 <span className="sr-only">아래로 스크롤</span>
                <span className="w-icon-xlarge h-icon-xlarge flex justify-center items-center ml-16 bg-theme-reverse text-theme rounded-md">
                  <FaArrowDown />
                </span>
              </button>
            </div>
          </div>

          {/* 모바일 해상도 타이틀 */}
          <MobileSummaryTitle />

          <div
            className="
            flex flex-col mr-0 min-w-300
            xxs:pr-20
            sm:min-w-auto sm:flex-row sm:pr-0
            md:block md:w-180 md:pr-0 md:mr-18
            lg:w-206 lg:mr-30
            xl:w-272"
          >
            <div
              className="
              relative w-full h-auto flex justify-center items-center gap-5 p-20 mb-16 mr-0 origin-bottom-right rounded-sm bg-blue-1
              sm:block sm:w-232 sm:h-232 sm:mb-0 
              md:w-full md:h-180 md:mr-0 md:mb-8 
              lg:h-206 lg:mb-16 lg:rounded-md
              xl:h-272 xl:rounded-lg
              "
            >
              <div className="leading-1 sm:leading-1.3">
                <strong className="block text-white text-shadow-s text-26 mb-5 sm:text-40 md:text-26 sm:mb-0 lg:text-30 xl:text-52">2년차</strong>
                <div className="relative z-2 mb-10 leading-1.4 xs:mb-0">
                  <p className="font-medium text-white text-shadow-s text-18 md:text-22 xl:text-26">프론트 개발자 & </p>
                  <p className="font-medium text-white text-shadow-s text-15 md:text-18 xl:text-22">웹 퍼블리셔 입니다</p>
                </div>
              </div>
              <StaticImage
                className="
                block w-80 h-80 ml-0
                sm:ml-auto
                md:w-50 md:h-50 md:ml-auto md:absolute md:bottom-[0px] md:left-[45%]
                lg:w-80 lg:h-80
                xl:w-100 xl:h-100
                "
                src={'../images/sticker_1.png'}
                alt="프론트 개발자, 웹 퍼블리셔 아이콘 스티커 이미지"
                width={128}
                height={128}
                placeholder="none"
              />
            </div>
            <div
              className="
                relative h-auto text-center text-theme leading-1 p-20 mb-16 mr-0 origin-top-left rounded-sm bg-blue-2
                sm:w-232 sm:h-232 sm:mb-0 sm:text-left sm:leading-1.3 
                md:w-full md:h-170 md:mr-0 md:mb-8
                lg:h-259 lg:mb-16 lg:rounded-md 
                xl:h-340 xl:rounded-lg
              "
            >
              <strong className="text-26 lg:text-30 xl:text-40 leading-1.6">잘하는 것을</strong>
              <p className="text-15 mb-10 sm:mb-0 sm:text-18 md:text-15 lg:text-18 xl:text-22 font-medium leading-1.4">
                쏟아낼 수 있는 곳을 <br className="hidden sm:block" /> 찾고있어요
              </p>

              <div className="sm:flex sm:justify-center sm:items-center sm:mt-20 md:block md:mt-0">
                <StaticImage
                  className="
                  w-60 h-60 
                  md:w-40 md:h-40 md:absolute md:bottom-0 md:left-[30%]
                  lg:w-50 lg:h-50 
                  xl:w-70 xl:h-70"
                  src={'../images/sticker_2.png'}
                  alt="React Spring"
                  width={480}
                  height={480}
                  placeholder="none"
                />
                <StaticImage
                  className="
                  w-60 h-60 
                  md:w-40 md:h-40 md:absolute md:bottom-[10px] md:right-[10%]
                  lg:w-70 lg:h-70 
                  xl:w-100 xl:h-100"
                  src={'../images/sticker_3.png'}
                  alt="Framer Motion"
                  width={480}
                  height={480}
                  placeholder="none"
                />
                <StaticImage
                  className="
                  w-60 h-60 
                  md:w-40 md:h-40 md:absolute md:bottom-[30px] md:left-0
                  lg:w-70 lg:h-70 
                  xl:w-100 xl:h-100"
                  src={'../images/sticker_4.png'}
                  alt="GSAP"
                  width={364}
                  height={364}
                  placeholder="none"
                />
              </div>
            </div>
            <div
              className="
                relative h-auto flex justify-center items-center gap-5 p-20 origin-bottom-right bg-gray-1 rounded-sm 
                sm:w-232 sm:h-232 sm:block
                md:w-full md:h-120 
                lg:h-124 lg:rounded-md
                xl:h-164 xl:rounded-lg
                "
            >
              <div>
                <strong className="block text-24 md:text-22 xl:text-26">공유할 수 있는</strong>
                <p className="text-15 sm:text-18 md:text-15 xl:text-18">컴포넌트를 만들어요</p>
              </div>
              <StaticImage
                className="w-60 h-60 block sm:w-80 sm:h-80 sm:ml-auto sm:mt-35 md:ml-0 md:mt-0 md:w-50 md:h-50 md:absolute md:bottom-[10px] md:right-0 xl:w-80 xl:h-80"
                src={'../images/sticker_5.png'}
                alt="Storybook"
                width={100}
                height={100}
                placeholder="none"
              />

              {/* <div
                className="
                  w-50 h-50 
                  md:absolute md:bottom-[10px] md:right-0
                  lg:w-70 lg:h-70
                  xl:w-80 xl:h-80 
                "
              >
                
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* <div className="overflow-hidden">
        <section id="about" ref={aboutRef} className="max-h-[100vh] mt-[15vh]">
          <div className="container">
            <h3 className="title_container mr-auto mb-[5vh] max-w-fit-content text-80 leading-1.3">
              <span className="block overflow-hidden title_item">
                <i className="block font-[600] not-italic origin-top-left">Frontend Dev &</i>
              </span>
              <span className="block overflow-hidden title_item">
                <i className="block font-[400] origin-top-left">Web Publishing</i>
              </span>
            </h3>
            
            <div className="flex justify-between h-[fit-content] logo_wrap">
              <span id="a" className="w-[23%] h-[fit-content]">
                <StaticImage src={'../images/logo_1.png'} alt="로고" width={512} height={512} placeholder="none" />
              </span>
              <span id="b" className="w-[23%] h-[fit-content]">
                <StaticImage src={'../images/logo_2.png'} alt="로고" width={512} height={512} placeholder="none" />
              </span>
              <span id="c" className="w-[23%] h-[fit-content]">
                <StaticImage src={'../images/logo_3.png'} alt="로고" width={512} height={512} placeholder="none" />
              </span>
              <span id="d" className="w-[23%] h-[fit-content]">
                <StaticImage src={'../images/logo_4.png'} alt="로고" width={512} height={512} placeholder="none" />
              </span>
            </div>
          </div>
        </section>
        <section className="min-h-[500px]">
          <div className="container">
            
            <div className="grid lg:grid-cols-[400px_auto] items-center gap-[50px] relative bg-[#373737]/[0.4] backdrop-blur-[100px] rounded-lg z-2 p-50">
              <div className="mx-auto overflow-hidden rounded-sm w-400 h-500 lg:m-0">
                <StaticImage className="w-full h-full" src={'../images/mockup_profile.jpg'} alt="로고" width={493} height={665} placeholder="none" />
              </div>
              <div className="text-white">
                <h3 className="text-40 font-[700] text-shadow text-center lg:text-left">About Me</h3>
                <p className="text-center mb-30 lg:text-left">
                  <span className="block text-26 text-shadow">
                    <em className="not-italic highlight">2년차</em> 웹 프론트 개발자 & 웹 퍼블리셔 이윤화입니다.
                  </span>
                </p>
                <ul className="pl-20 text-20">
                  <li className="list-disc mb-30">
                    <em className="block p-5 mb-10 not-italic bg-blue-1 leading-1 w-fit text-22 text-shadow">
                      빠르게 화면단을 구성하는 방법을 압니다.
                    </em>
                    <span className="block leading-1.6 tracking-tight text-shadow">
                      초기 스타트업에서 근무하며 투자자들에게 보여줄 MVP 화면단을 빠르게 제작하고 피드백을 받으며 신속히 반영했습니다.
                    </span>
                  </li>
                  <li className="list-disc mb-30">
                    <em className="block p-5 mb-10 not-italic leading-1 w-fit bg-blue-1 text-22 text-shadow">
                      기술을 제안하고 공유하는 것을 좋아합니다.
                    </em>
                    <span className="block leading-1.6 tracking-tight text-shadow">
                      Storybook을 도입해 일관성 있는 유즈 케이스를 구성하고 문서로 공유하여 팀원들의 개발 효율성을 향상시켰습니다.
                    </span>
                  </li>
                  <li className="list-disc mb-30">
                    <em className="block p-5 mb-10 not-italic leading-1 w-fit bg-blue-1 text-22 text-shadow">
                      팀원들과 함께 문제상황을 인지하고 해결합니다.
                    </em>
                    <span className="block leading-1.6 tracking-tight text-shadow">
                      CI/CD 담당 동료의 의존성 설치 시간 문제를 해결하기 위해, 기존 yarn classic에서 yarn berry zero-install로 마이그레이션하여 성능을
                      개선했습니다.
                    </span>
                  </li>
                  <li className="list-disc mb-30">
                    <em className="block p-5 mb-10 not-italic leading-1 w-fit bg-blue-1 text-22 text-shadow">
                      레거시 환경에서도 최선의 방법을 찾을 수 있습니다
                    </em>
                    <span className="block leading-1.6 tracking-tight text-shadow">
                      JSP 레거시 환경에서 하나의 CSS 스타일 파일로 모든 화면이 연결되어 있던 문제를 해결하기 위해, 화면별로 CSS 파일을 분리하고 스타일
                      클래스 컨벤션을 정의하여 React나 Vue 같은 컴포넌트 기반 구조로 개선했습니다.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="career" className="my-[20vh]" ref={careerRef}>
        <div className="container grid grid-cols-[28%,70%] gap-x-[2%]">
          <div className="h-auto bg-blue-3">
            <h3 ref={pointerRef} className="leading-1 block title_pointer sticky top-[50%] translate-y-[-50%] text-60">
              Career
            </h3>
          </div>

          <div className="article_container grid grid-cols-[repeat(3,32.3%)] gap-x-[1.55%] gap-y-[36px] perspective">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item: any, index: number) => (
              <article key={index} className="relative cursor-pointer item">
                <Link className="link-overlay" to="/">
                  <span className="sr-only">클릭하여 상세보기</span>
                </Link>

                <section className="block w-full rounded-xxs mb-14">
                  <StaticImage
                    className="block object-cover w-full h-full rounded-xxs"
                    src={'../images/empty_content.png'}
                    alt="빈 컨텐츠 이미지"
                    width={375}
                    height={250}
                    placeholder="none"
                  />
                </section>
                <header>
                  <div className="inline-flex">
                    <p className="text-15 opacity-85">웹 퍼블리싱</p>
                    <time className="block text-15 opacity-85 before:bg-theme-reverse before:content-[''] before:relative before:inline-block before:h-10 before:w-1 before:my-0 before:mx-8">
                      2022. 12 - 2023. 01
                    </time>
                  </div>
                  <h4 className="block mt-15">
                    <span className="ellipsis font-[700] text-18 leading-23">보고싶은 군인 카드 UI 리뉴얼</span>
                    <span className="mt-5 text-15 ellipsis opacity-70">
                      Back과 Front단의 레거시 코드를 리팩토링하고 새로운 UI 디자인을 도입한 프로젝트입니다. Back과 Front단의 레거시 코드를
                      리팩토링하고 새로운 UI 디자인을 도입한 프로젝트입니다.
                    </span>
                  </h4>
                </header>
                <footer className="mt-10 text-15 text-blue-1"># 리팩토링</footer>
              </article>
            ))}
          </div>
        </div>
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
    </article>
  )
}

export const query = graphql`
  query MainPage {
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
