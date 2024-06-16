import * as React from 'react'
import { HeadFC, Link, graphql, type PageProps } from 'gatsby'
import Layout from '../components/Layout'
import dayjs from 'dayjs'
import ko from 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import SEO from '../components/Seo'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import useSectionRefStore from '../store/useSectionRefStore'

dayjs.locale(ko)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('Asia/Seoul')

export default function Page({ data }: PageProps<Queries.PageQuery>) {
  //Ref
  const mainRef = React.useRef<HTMLDivElement>(null)
  const aboutRef = React.useRef<HTMLElement>(null)
  const careerRef = React.useRef<HTMLElement>(null)
  const projectRef = React.useRef<HTMLElement>(null)
  const problemRef = React.useRef<HTMLElement>(null)
  const contactRef = React.useRef<HTMLElement>(null)
  const sectionsRefArray = [aboutRef, careerRef, projectRef, problemRef, contactRef]

  //useSectionRef
  const { setRefArray }: any = useSectionRefStore()

  React.useEffect(() => {
    setRefArray(sectionsRefArray)
  }, [setRefArray])

  useGSAP(() => {
    gsap.from(mainRef.current, {
      y: 50,
      duration: 2,
      opacity: 0,
      ease: 'elastic',
    })

    gsap.to(mainRef.current, {
      y: 0,
      duration: 2,
      opacity: 1,
      ease: 'elastic',
    })
  })

  return (
    <Layout title="메인 페이지">
      <section ref={aboutRef} className="h-screen pt-[103px] mb-[31px] bg-gray rounded-3xl p-7">
        <div ref={mainRef}>
          <h2>1. 소개</h2>
          <p>어쩌고한 개발잡니다</p>
        </div>
      </section>
      <section ref={careerRef} className="h-screen bg-gray rounded-3xl p-7 mb-[31px]">
        <h2>2. 경력사항</h2>
        <ul>
          {data.allContentfulWork.nodes.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/${item.category}/${item.slug}`}>
                  <strong>{item.title}</strong>
                  <p>{`게시일: ${dayjs(item.createdAt).tz().format('YYYY-MM-DD a hh:mm:ss')}`}</p>
                  {/* <p>{`업데이트: ${dayjs(item.updatedAt).tz().fromNow()}`}</p> */}
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
      <section id="projects" ref={projectRef} className="h-screen bg-gray rounded-3xl p-7 mb-[31px]">
        <h2>3. 사이드 프로젝트</h2>
      </section>
      <section ref={problemRef} className="h-screen bg-gray rounded-3xl p-7 mb-[31px]">
        <h2>4. 문제 해결 문서</h2>
      </section>
      <section ref={contactRef}>
        <h2>5. 연락</h2>
        <p>이리로 연락하세요</p>
      </section>
    </Layout>
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
