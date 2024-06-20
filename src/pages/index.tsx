import * as React from 'react'
import { HeadFC, Link, graphql, type PageProps } from 'gatsby'
import dayjs from 'dayjs'
import ko from 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import SEO from '../components/Seo'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useSectionRefStore } from '../store/storehooks'

dayjs.locale(ko)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('Asia/Seoul')

export default function Page({ data }: PageProps<Queries.PageQuery>) {
  const mainRef = React.useRef<HTMLDivElement>(null)
  const aboutRef = React.useRef<HTMLElement>(null)
  const careerRef = React.useRef<HTMLElement>(null)
  const projectRef = React.useRef<HTMLElement>(null)
  const problemRef = React.useRef<HTMLElement>(null)
  const contactRef = React.useRef<HTMLElement>(null)
  const sectionsRefArray = [aboutRef, careerRef, projectRef, problemRef, contactRef]

  const { setRefArray }: any = useSectionRefStore()

  React.useEffect(() => {
    setRefArray(sectionsRefArray)
  }, [])

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
    <article className="relative z-2">
      <section id="about" ref={aboutRef} className="h-[800px] rounded-3xl mb-[31px] bg-gray">
        <div ref={mainRef}>
          <h2>1. 소개</h2>
          <p>어쩌고한 개발잡니다</p>
        </div>
      </section>
      <section id="career" ref={careerRef} className="h-[800px] rounded-3xl mb-[31px] bg-gray">
        <h2>2. 경력사항</h2>
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
      </section>
      <section id="project" ref={projectRef} className="h-[800px] rounded-3xl mb-[31px] bg-gray">
        <h2>3. 사이드 프로젝트</h2>
      </section>
      <section id="problem" ref={problemRef} className="h-[800px] rounded-3xl mb-[31px] bg-gray">
        <h2>4. 문제 해결 문서</h2>
      </section>
      <section id="contact" ref={contactRef} className="h-[800px] rounded-3xl bg-gray">
        <h2>5. 연락</h2>
        <p>이리로 연락하세요</p>
      </section>
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
