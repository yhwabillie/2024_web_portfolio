import * as React from 'react'
import { HeadFC, Link, graphql, type PageProps } from 'gatsby'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import SEO from '@components/Seo'
import { useMainPageRefsStore, useModalStateStore } from '@store/storehooks'
import dayjs from 'dayjs'
import ko from 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa6'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import MobileSummaryTitle from '@components/MobileSummaryTitle'
import SkillSetLayerModal from '@components/SkillSetLayerModal'
import { ModalType } from '@/types/globalTypes'
import { careerList } from '@constants/common'
gsap.registerPlugin(ScrollTrigger)

dayjs.locale(ko)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('Asia/Seoul')

const visual_bg_path = require('../images/visual_mockup.gif')

export default function Page({ data }: PageProps<any>) {
  //zustand state
  const { setMainPageRefs } = useMainPageRefsStore()
  const { modalState, setModalState } = useModalStateStore()

  //refs 정의
  const gsapContainer = React.useRef<HTMLElement>(null)

  //modal component
  const ModalComponent = {
    skillset: <SkillSetLayerModal />,
    reset: <></>,
  }

  //스킬셋 모달 클릭 event
  const handleModal = (modal: ModalType) => setModalState(modal)

  useGSAP(
    () => {
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

      //scroll timeline
      let tl = gsap.timeline({})
    },
    { scope: gsapContainer },
  )

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
        <h3 className="sr-only">포트폴리오 써머리</h3>
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
              <h4
                className="
                  block font-[700] text-shadow text-26 
                  sm:text-32 md:text-32 lg:text-48 xl:text-52"
              >
                꼼꼼한 UI 설계 <br /> 매력적인 인터랙션
              </h4>
              <h5 className="leading-2 text-15 font-bold text-shadow mt-20 lg:text-22">
                누구나 사용할 수 있는 UI 컴포넌트와 <br /> 시선을 끄는 인터랙션을 개발하는 이윤화입니다.
              </h5>
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
                아래로 스크롤해주세요 <span className="sr-only">아래로 스크롤</span>
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
            xxs:pl-0 xxs:pr-14
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
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <h3 className="sr-only">소개</h3>
        <div className="mt-100 lg:mt-150">
          <div className="container">
            <h4 className="mr-auto mb-50 md:mb-80 lg:mb-100">
              <span
                className="
                    justify-center
                    sm:justify-start
                    flex gap-3 items-center text-30 overflow-hidden
                    xs:text-35
                    sm:text-70 sm:gap-8
                    md:text-90
                    lg:text-130
                    xl:text-160
                  "
              >
                <i className="block not-italic font-[600] font-['D2Coding'] tracking-tighter">if(👩‍💻)</i>
                <FaArrowRight />
                <i className="block not-italic font-[600] font-['D2Coding'] tracking-tighter">Frontend Dev</i>
              </span>
              <span className="block text-30 text-center md:text-left overflow-hidden xs:text-35 sm:text-70 md:text-80 lg:text-100 xl:text-130">
                <i className="block not-italic font-[400] font-['PyeongChangPeace-Bold']">& W🌐b Publishing</i>
              </span>
            </h4>

            <div className="h-fit mb-50 flex gap-4 justify-center sm:gap-10 md:mb-80 lg:mb-100">
              <StaticImage
                className="w-[23%] h-fit sm:w-[20%]"
                src={'../images/about_item_1.png'}
                width={512}
                height={512}
                alt="모바일 이미지"
                placeholder="none"
              />
              <StaticImage
                className="w-[24%] h-fit sm:w-[20%]"
                src={'../images/about_item_2.png'}
                width={512}
                height={512}
                alt="손가락 이미지"
                placeholder="none"
              />
              <StaticImage
                className="w-[24%] h-fit sm:w-[20%]"
                src={'../images/about_item_3.png'}
                width={512}
                height={512}
                alt="데이터 시각화 차트 이미지"
                placeholder="none"
              />
              <StaticImage
                className="w-[24%] h-fit sm:w-[20%]"
                src={'../images/about_item_4.png'}
                width={512}
                height={512}
                alt="도구 이미지"
                placeholder="none"
              />
            </div>
          </div>
        </div>
        <div className="mb-100 lg:mb-200">
          <div className="container">
            <div
              className="
                  w-full min-h-[700px] grid gap-5 mx-auto mb-20
                  md:grid-cols-[375px_auto]
                "
            >
              <div className="grid gap-5 grid-rows-[500px_auto] sm:grid-rows-[665px_auto] md:grid-rows-[500px_auto]">
                <div className="w-full relative bg-gray-glass backdrop-blur-md h-auto mx-auto rounded-xs shadow-md overflow-hidden">
                  <StaticImage
                    className="absolute left-[50%] translate-x-[-50%] h-full w-full sm:w-[65%] md:w-full"
                    src={'../images/mockup_profile.jpg'}
                    width={493}
                    height={665}
                    alt="더미 프로필 이미지"
                  />
                </div>

                <div className="flex flex-col gap-5 justify-center bg-gray-1 rounded-md shadow-md md:gap-0 p-15 lg:p-25">
                  <h4 className="sr-only">주요 경험 기술 스택</h4>
                  <div className="flex gap-2 flex-col">
                    <p className="text-center text-20 font-[600] tracking-tighter leading-[20px] mb-20">⚙️ 경험한 주요 기술 스택</p>
                    <ul className="flex gap-2 justify-center">
                      <li className="w-40 h-40 bg-white">
                        <span className="sr-only">HTML5</span>
                        <StaticImage src={'../images/skill_set_html5.png'} width={90} height={90} alt="스킬셋 HTML5 이미지" />
                      </li>
                      <li className="w-40 h-40 bg-white">
                        <span className="sr-only">CSS3</span>
                        <StaticImage src={'../images/skill_set_css3.png'} width={90} height={90} alt="스킬셋 CSS3 이미지" />
                      </li>
                      <li className="w-40 h-40">
                        <span className="sr-only">JS(+ES6)</span>
                        <StaticImage src={'../images/skill_set_js.png'} width={90} height={90} alt="스킬셋 Javascript 이미지" />
                      </li>
                      <li className="w-40 h-40">
                        <span className="sr-only">TS</span>
                        <StaticImage src={'../images/skill_set_ts.png'} width={90} height={90} alt="스킬셋 Typescript 이미지" />
                      </li>
                      <li className="w-40 h-40 bg-white">
                        <span className="sr-only">jQuery</span>
                        <StaticImage src={'../images/skill_set_jquery.png'} width={90} height={90} alt="스킬셋 jQuery 이미지" />
                      </li>
                    </ul>
                    <ul className="flex gap-2 justify-center">
                      <li className="w-40 h-40 bg-white">
                        <span className="sr-only">NextJS13-14(appDir)</span>
                        <StaticImage src={'../images/skill_set_nextjs.png'} width={90} height={90} alt="스킬셋 NextJS 이미지" />
                      </li>
                      <li className="w-40 h-40 bg-white">
                        <span className="sr-only">Recoil</span>
                        <StaticImage src={'../images/skill_set_recoil.png'} width={90} height={90} alt="스킬셋 Recoil 이미지" />
                      </li>
                      <li className="w-40 h-40 bg-white">
                        <span className="sr-only">styled-components</span>
                        <StaticImage src={'../images/skill_set_styled-components.png'} width={90} height={90} alt="스킬셋 styled-components 이미지" />
                      </li>
                      <li className="w-40 h-40 bg-white">
                        <span className="sr-only">tailwindCSS</span>
                        <StaticImage src={'../images/skill_set_tailwindcss.png'} width={90} height={90} alt="스킬셋 tailwind css 이미지" />
                      </li>
                      <li className="w-40 h-40 bg-white">
                        <span className="sr-only">Storybook7-8</span>
                        <StaticImage src={'../images/skill_set_storybook.png'} width={90} height={90} alt="스킬셋 Storybook 이미지" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="py-25 px-14 bg-gray-glass backdrop-blur-md rounded-md shadow-md xs:py-30 xs:px-20 md:p-40">
                <h4 className="text-25 text-center md:text-left lg:text-40 font-[600] block mb-15 leading-1">About Me.</h4>
                <p className="text-center md:text-left mb-20 text-20 font-[600] tracking-tight sm:mb-30 sm:text-25 lg:text-30">
                  👋🏻 안녕하세요, 2년차 프론트 개발자 & 웹 퍼블리셔 이윤화입니다.
                </p>
                <div className="px-14">
                  <div className="mb-15 sm:mb-20 lg:mb-30">
                    <strong className="block mb-5 text-18 text-blue-highlight tracking-tight font-[600] sm:text-20 lg:text-24">
                      방법을 제안🙋‍♀️하고 시도하는 것을 좋아합니다.
                    </strong>
                    <p className="text-15 leading-1.6 tracking-tight opacity-85 lg:text-20">
                      Storybook7, 8을 신규 도입하여, 자주 사용되는 react-hook-form이 적용된 Form 요소 UI 컴포넌트를 문서화했습니다. 또한 Storybook의
                      국제화 addon 기능을 활용하여, 컴포넌트 내부 텍스트 변경으로 발생하는 디자인 깨짐 이슈를 사전에 모니터링할 수 있도록
                      개선하였습니다.
                    </p>
                  </div>
                  <div className="mb-15 sm:mb-20 lg:mb-30">
                    <strong className="block mb-5 text-18 text-blue-highlight font-[600] tracking-tight sm:text-20 lg:text-24">
                      빠르게⚡️ 화면단을 구성하고 피드백을 반영하는 방법을 압니다.
                    </strong>
                    <p className="text-15 leading-1.6 tracking-tight opacity-85 lg:text-20">
                      초기 스타트업에서 근무하며 CES, 에듀테크, 붐업코리아 등 기업 부스 참가를 위한 목업과 체험용 서비스 화면 UI를 빠르게 제작하고
                      피드백을 받으며 신속히 반영한 경험이 있습니다.
                    </p>
                  </div>
                  <div className="mb-15 sm:mb-20 lg:mb-30">
                    <strong className="block mb-5 text-18 font-[600] text-blue-highlight tracking-tight sm:text-20 lg:text-24">
                      레거시 환경에서도 최선의 방법을 찾을🔎 수 있습니다.
                    </strong>
                    <p className="text-15 leading-1.6 tracking-tight opacity-85 lg:text-20">
                      JSP 레거시 환경에서 하나의 CSS 스타일 파일로 모든 화면이 연결되어 있던 문제를 해결하기 위해, 화면별로 CSS 파일을 분리하고 스타일
                      클래스 컨벤션을 정의하여 React나 Vue 같은 컴포넌트 기반 구조로 개선했습니다.
                    </p>
                  </div>
                  <div>
                    <strong className="block mb-5 text-18 font-[600] text-blue-highlight tracking-tight sm:text-20 lg:text-24">
                      사용자를 즐겁게🤹하는 인터페이스를 추구합니다.
                    </strong>
                    <p className="text-15 leading-1.6 tracking-tight opacity-85 lg:text-20">
                      GSAP, Framer Motion과 같은 라이브러리를 활용한 웹 애니메이션과 화면 인터랙션 구현에 관심이 많습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 기술 스택 자세히 */}
            <div
              className="
                  w-full min-h-[700px] grid gap-5 mx-auto
                  md:grid-cols-[repeat(2,calc(50%-10px))]"
            >
              <h4 className="sr-only">명시 기술 스택 자세한 설명</h4>

              {/* 웹 프론트엔드 */}
              <div className="bg-gray-glass backdrop-blur-md rounded-md py-25 px-14 xs:py-30 xs:px-20 md:p-40 shadow-md">
                <h5 className="text-center md:text-left block mb-20 text-20 sm:text-25 lg:text-30 font-[600] tracking-tighter leading-1">
                  🛠️ 웹 프론트엔드
                </h5>

                <div className="px-14 md:px-0">
                  <div className="mb-15 lg:mb-30">
                    <strong className="block mb-5 text-18 lg:text-24 font-[600] tracking-tighter text-blue-highlight">JavaScript & jQuery</strong>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      Ajax의 fetch, async await를 이용한 비동기 HTTP 방식의 GET, POST 요청
                    </p>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">LocalStorage를 사용한 데이터 보관 및 활용</p>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">DOM 컨트롤 및 관련 애니메이션 구현</p>
                  </div>

                  <div className="mb-15 lg:mb-30">
                    <strong className="block mb-5 text-18 lg:text-24 font-[600] tracking-tighter text-blue-highlight">TypeScript</strong>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      interface, type, enum을 활용하여 백엔드와 소통하기 위한 데이터 type 작성
                    </p>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      react-hook-form, yup을 사용한 인풋 데이터 validation 및 관련 UI 구현
                    </p>
                  </div>

                  <div className="mb-15 lg:mb-30">
                    <strong className="block mb-5 text-18 lg:text-24 font-[600] tracking-tighter text-blue-highlight">
                      Context API & 상태관리 라이브러리
                    </strong>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      Context API, zustand, Recoil을 이용하여 컴포넌트간 전역, 지역 state관리
                    </p>
                  </div>

                  <div className="mb-15 lg:mb-30">
                    <strong className="block mb-5 text-18 lg:text-24 font-[600] tracking-tighter text-blue-highlight">데이터 시각화</strong>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      apexchart.js 및 plotly.js를 활용하여 데이터를 다양한 그래프로 표현 및 디자인에 맞게 커스텀
                    </p>
                  </div>

                  <div className="mb-15 lg:mb-30">
                    <strong className="block mb-5 text-18 lg:text-24 font-[600] tracking-tighter text-blue-highlight">UI 컴포넌트 문서화</strong>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      컴포넌트의 용도, props의 type 및 유즈케이스 등을 Storybook을 활용하여 문서화
                    </p>
                  </div>

                  <div>
                    <strong className="text-18 lg:text-24 font-[600] tracking-tighter text-blue-highlight">기술적인 SEO 작업</strong>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">NextJS 환경에서 metadata 작성 및 다국어 case 적용</p>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">특정 키워드로 Google Search 인덱싱한 경험</p>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      Google Lighthouse를 사용한 웹 최적화 점수 확인 및 피드백
                    </p>
                  </div>
                </div>
              </div>
              {/* 웹 퍼블리싱 */}
              <div className="bg-gray-glass backdrop-blur-md rounded-md py-25 px-14 xs:py-30 xs:px-20 md:p-40 shadow-md">
                <h5 className="text-center md:text-left block mb-20 text-20 sm:text-25 lg:text-30 font-[600] tracking-tighter leading-1">
                  🎨 웹 퍼블리싱
                </h5>
                <div className="px-14 md:px-0">
                  <div className="mb-15 lg:mb-30">
                    <strong className="text-18 lg:text-24 font-[600] tracking-tighter text-blue-highlight">HTML5 & CSS3</strong>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      코드 가독성과 웹 표준, 웹 접근성을 준수하기위한 시멘틱 마크업
                    </p>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">CSS keyframe을 이용한 애니메이션</p>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      CSS Grid, Flex 활용한 디자인을 준수하는 화면 레이아웃 구축
                    </p>
                  </div>
                  <div className="mb-15 lg:mb-30">
                    <strong className="text-18 lg:text-24 font-[600] tracking-tighter text-blue-highlight">반응형 웹</strong>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      media query, container queries를 사용한 PC, 태블릿, 모바일등 다양한 해상도의 웹 반응형 작업
                    </p>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      하이브리드 앱, 웹앱의 다양한 모바일 디바이스 대처 경험
                    </p>
                  </div>
                  <div className="mb-15 lg:mb-30">
                    <strong className="text-18 lg:text-24 font-[600] tracking-tighter text-blue-highlight">인터랙티브 웹</strong>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      GSAP, Framer Motion, React-Spring를 활용한 인터랙티브 스크롤 애니메이션 구현
                    </p>
                  </div>
                  <div className="mb-15 lg:mb-30">
                    <strong className="text-18 lg:text-24 font-[600] tracking-tighter text-blue-highlight">CSS 프레임워크</strong>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      tailwindcss, styled-components를 사용한 반응형 웹사이트 화면 구축
                    </p>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      theme 기능을 이용하여 하나의 컴포넌트에 여러가지 디자인을 분리하여 퍼블리싱
                    </p>
                  </div>
                  <div>
                    <strong className="text-18 lg:text-24 font-[600] tracking-tighter text-blue-highlight">크로스 브라우징</strong>
                    <p className="text-15 lg:text-20 tracking-tighter leading-1.6 opacity-80">
                      vendor prefix를 사용한 Chrome, Edge, Safari, Firefox 브라우저 및 OS별 대처 경험
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Career */}
      <section className="mb-100 lg:mb-200">
        <div className="container">
          <h3 className="text-50 lg:text-60 font-[600]">Career</h3>
          <ul className="list_container perspective mb-100">
            {careerList.map((item, index) => (
              <li key={index} className="last:border-t-[10px] border-t-theme bg-theme sm:sticky sm:top-[100px] overflow-hidden">
                <div
                  className={`${item.color === 'career-1' ? 'bg-career-1' : 'bg-career-2'} rounded-xs md:rounded-lg border-theme 
                 
                  lg:grid lg:grid-cols-[auto,auto] lg:gap-y-[30px] mb-30 w-full`}
                >
                  <div
                    className="relative 
                  py-25 md:py-40 xl:py-60
                  px-30 md:px-40 xl:px-50
                  border-b-[3px]
                  border-b-theme
                  lg:border-b-0
                  after:content-[''] 
                  after:border-l-[60px] after:border-r-[60px] after:border-b-[60px] after:border-t-[60px] 
                  after:border-l-transparent after:border-r-transparent after:border-b-transparent after:border-t-theme 

                  after:absolute 
                  lg:after:top-[-30px] 
                  after:bottom-[-60px]
                  after:right-[-30px]
                  lg:after:right-[-60px]
                  lg:after:rotate-0
                  after:rotate-90

                  before:content-[''] 
                  before:border-l-[60px] before:border-r-[60px] before:border-b-[60px] before:border-t-[60px] 
                  before:border-l-transparent before:border-r-transparent before:border-b-theme before:border-t-transparent
                  lg:before:rotate-0
                  before:rotate-90
                  before:bottom-[-60px]
                  before:left-[-30px]
                  lg:before:left-[auto]
                  
                

                  before:absolute 
                  lg:before:bottom-[-30px] 
                  lg:before:right-[-60px]

                  border-dotted
                  lg:border-r-[3px]
                  lg:border-r-theme
                  lg:grid
                  lg:grid-rows-[auto,auto,100px]
                  lg:gap-y-[30px]
                  "
                  >
                    <div className="mb-30 lg:mb-0">
                      <h4 className="text-30 lg:text-40 font-[600] tracking-tight text-shadow text-white">
                        {item.name} <span className="block md:inline text-24 font-[500] opacity-70">{item.sub_name}</span>
                      </h4>
                      <p className="text-18 lg:text-20 font-[600] mt-30 lg:mt-50 mb-10 tracking-tight text-black">{item.period}</p>
                      <p className="text-15 md:text-18 lg:text-20 tracking-tight leading-1.6 text-black">{item.company_desc}</p>
                    </div>

                    <div className="mb-30 xl:mb-50">
                      <h5 className="block text-18 md:text-20 font-[600] mb-5 tracking-tight text-black">관련 URL</h5>
                      <div className="flex gap-[5px] flex-wrap">
                        {item.links.map((link, index) => (
                          <a
                            key={index}
                            className="bg-white text-black inline-block text-14 md:text-16 tracking-tight border-[1.5px] py-10 px-18 leading-1 rounded-[25px]"
                            href={link.url}
                            target="_blank"
                          >
                            {link.title}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="text-40 sm:text-80 h-fit xl:text-100 xl:h-100 leading-1">
                      {item.icon} <span className="font-[600] tracking-tight opacity-70">{item.year}</span>
                    </div>
                  </div>
                  <div className="pt-30 pb-25 px-30 md:px-50 md:py-60 flex">
                    <div className="flex flex-col justify-end">
                      <div className="mb-20">
                        <strong className="text-18 md:text-20 lg:text-24 font-[600] block leading-1 mb-[8px] tracking-tight text-black">
                          {item.role}
                        </strong>
                        <p className="text-15 md:text-18 tracking-tight leading-1.6 text-black">{item.role_desc}</p>
                      </div>
                      <div className="mb-20">
                        <strong className="text-18 md:text-20 lg:text-24 font-[600] block leading-1 mb-[8px] tracking-tight text-black">
                          팀 구성
                        </strong>

                        <ul className="flex gap-[5px] flex-wrap">
                          {item.team.map((i, index) => (
                            <li
                              key={index}
                              className="bg-white text-black inline-block text-14 md:text-16 tracking-tight border-[1.5px] py-10 px-18 leading-1 rounded-[25px]"
                            >
                              {i}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <strong className="text-18 md:text-20 mb-5 lg:text-24 font-[600] tracking-tight block text-black">개발환경</strong>

                        <ul className="flex gap-[5px] flex-wrap">
                          {item.team_tech.map((tech, index) => (
                            <li
                              key={index}
                              className="bg-white text-black inline-block text-14 md:text-16 tracking-tight border-[1.5px] py-10 px-18 leading-1 rounded-[25px]"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/** Work Experience */}
      <section>
        <div className="container grid md:grid-cols-[28%,70%] gap-x-[2%] mb-100 lg:mb-200">
          <div className="h-auto hidden md:block">
            <h3 className="leading-1 block font-[600] sticky top-[50%] translate-y-[-50%] text-40 lg:text-60">
              Work <br /> Experience
            </h3>
          </div>
          <div className="grid sm:grid-cols-[repeat(2,48%)] lg:grid-cols-[repeat(3,32.3%)] gap-x-[4%] lg:gap-x-[1.55%] gap-y-[36px] perspective">
            {data.allContentfulWork.nodes.map((project: any) => {
              const opengraphImage = getImage(project.ogImage?.gatsbyImageData!)

              return (
                <article key={project.id} className="career_item relative">
                  <Link className="link-overlay" to={`category/${project.category}/${project.slug}`}>
                    <span className="sr-only">클릭하여 상세보기</span>
                  </Link>

                  <section className="block w-full rounded-xxs border border-gray-2 mb-14">
                    <GatsbyImage className="block object-cover w-full h-full rounded-xxs" image={opengraphImage!} alt={'//'} />
                  </section>
                  <header>
                    <div className="text-15 opacity-85 tracking-tighter text-gray-2">{project.company}</div>
                    <div className="flex projects-center">
                      <p className="text-15 opacity-85 tracking-tighter">
                        {project.role?.map((item: any, index: any) => (
                          <span key={index} className="inline-block first:mr-5 first:after:content-[','] last:after:content-[''] last:mr-0">
                            {item}
                          </span>
                        ))}
                      </p>
                      <time className="block tracking-tighter text-15 opacity-85 before:bg-theme-reverse before:content-[''] before:relative before:inline-block before:h-10 before:w-1 before:my-0 before:mx-8">
                        {`${dayjs(project.startDate).tz().format('YYYY-MM')} ~ ${dayjs(project.endDate).tz().format('YYYY-MM')}`}
                      </time>
                    </div>
                    <h4 className="block mt-15">
                      <span className="text-15 text-blue-highlight">{project.product}</span>
                      <span className="ellipsis font-[700] text-18 leading-23">{project.title}</span>
                      <span className="mt-5 text-15 ellipsis opacity-90">{project.description}</span>
                    </h4>
                  </header>
                  <footer className="mt-10 text-15 text-blue-highlight">
                    {project.tags?.map((item: any, index: any) => (
                      <span key={index} className='inline-block opacity-85 before:content-["#"] pr-5 last:pr-0'>
                        {item}
                      </span>
                    ))}
                  </footer>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </article>
  )
}

export const query = graphql`
  query MainPage {
    allContentfulWork {
      nodes {
        id
        category
        slug
        company
        product
        role
        title
        startDate
        endDate
        tags
        description
        ogImage {
          publicUrl
          gatsbyImageData
        }
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
