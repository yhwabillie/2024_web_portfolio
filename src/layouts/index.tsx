import * as React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { PageProps, navigate } from 'gatsby'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useMainPageRefsStore, useSidebarStatusStore } from '@store/storehooks'
import { SIDEBAR_STATUS } from '@/types/enums'
import Header from '@components/MainHeader'
import { relative } from 'path'
import Layout from '@components/Layout'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const timeout = 200
const getTransitionStyles: any = {
  entering: {
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
}

export default function CategoryLayout(props: PageProps) {
  //zustand state
  const { mainPageRefs } = useMainPageRefsStore()
  const { setSidebarStatus } = useSidebarStatusStore()

  //console.log(props.location.state.key, props.location.state.direction)

  React.useEffect(() => {
    // gsap.fromTo(
    //   footerRef.current,
    //   {
    //     autoAlpha: 0,
    //   },
    //   {
    //     autoAlpha: 1,
    //     scrollTrigger: {
    //       scrub: 2,
    //       trigger: mainPageRefs[3]?.current,
    //       start: '100% 60%',
    //       end: '100% 100%',
    //     },
    //   },
    // )
    // let links = gsap.utils.toArray('nav.desktop-gnb-wrap > ul > li > a')
    // let mobile_links = gsap.utils.toArray('nav.mobile-gnb-wrap > ul > li > a')
    // function setActive(link: any) {
    //   link.parentElement.classList.add('active')
    // }
    // function removeActive() {
    //   links.forEach((el: any) => el.parentElement.classList.remove('active'))
    // }
    // //Desktop Nav Links
    // links.forEach((a: any, index: number) => {
    //   let element = document.querySelector(a.getAttribute('href').replace('/', ''))
    //   gsap.to(a, {
    //     scrollTrigger: {
    //       trigger: element,
    //       start: 'top center',
    //       end: 'bottom center',
    //       toggleClass: 'active',
    //       toggleActions: 'play none none reverse',
    //       onToggle: (self) => {
    //         self.isActive ? setActive(a) : removeActive()
    //       },
    //     },
    //   })
    //   //클릭하여 섹션 이동
    //   a.addEventListener('click', (e: any) => {
    //     e.preventDefault()
    //     gsap.to(window, {
    //       scrollTo: {
    //         y: element,
    //         offsetY: 90,
    //       },
    //     })
    //   })
    // })
    // //Mobile Side Menu Nav Links
    // mobile_links.forEach((a: any, index: number) => {
    //   let element = document.querySelector(a.getAttribute('href').replace('/', ''))
    //   gsap.to(a, {
    //     scrollTrigger: {
    //       trigger: element,
    //       start: 'top center',
    //       end: 'bottom center',
    //       toggleClass: 'active',
    //       toggleActions: 'play none none reverse',
    //       onToggle: (self) => {
    //         self.isActive ? setActive(a) : removeActive()
    //       },
    //     },
    //   })
    //   //클릭하여 섹션 이동
    //   a.addEventListener('click', (e: any) => {
    //     e.preventDefault()
    //     setSidebarStatus(SIDEBAR_STATUS.CLOSE)
    //     gsap.to(window, {
    //       scrollTo: {
    //         y: element,
    //         offsetY: 90,
    //       },
    //     })
    //   })
    // })
  }, [mainPageRefs])

  const getDocumentTitle = (path: string): string => {
    switch (true) {
      case path === '/':
        return '메인 페이지 본문'
      case path.startsWith('/category/work-experience'):
        return '경력사항 본문'
      case path.startsWith('/category/projects'):
        return '개인 프로젝트 본문'
      case path.startsWith('/category/problem-solving'):
        return '문제 해결 본문'
      default:
        return '디폴트 본문'
    }
  }

  return (
    <main className="pt-header-small lg:pt-header-medium xl:pt-header-large px-14 sm:px-0">
      <h2 className="sr-only">{getDocumentTitle(`${props.path}`)}</h2>
      {props.children}
    </main>
  )
}
