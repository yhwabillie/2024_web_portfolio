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

dayjs.locale(ko)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('Asia/Seoul')

export default function Page({ data }: PageProps<Queries.PageQuery>) {
  const mainRef = React.useRef<HTMLDivElement>(null)

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
      <section className="h-screen pt-[103px] mb-[31px] bg-gray rounded-3xl p-7">
        <div ref={mainRef}>
          <h2>1. 소개</h2>
          <p>어쩌고한 개발잡니다</p>
        </div>
      </section>
      <section>
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
      <section>
        <h2>3. 사이드 프로젝트</h2>
        <ul>
          {/* {data.allContentfulProject.nodes.map((item, index) => {
            const date = new Date(`${item.createdAt}`)

            return (
              <li key={index}>
                <Link to={`/side-project/${item.id}`}>
                  <span>{item.title}</span>
                  <span>{moment(item.createdAt).local().format(`YYYY-MM-DD a hh:mm:ss`)}</span>
                </Link>
              </li>
            )
          })} */}
        </ul>
      </section>
      <section>
        <h2>4. 문제 해결 문서</h2>
        <ul>
          {/* {data.allContentfulProblems.nodes.map((item, index) => {
            const date = new Date(`${item.createdAt}`)

            return (
              <li key={index}>
                <Link to={`/problem-solving/${item.id}`}>
                  <span>{item.title}</span>
                  <span>{date.toLocaleString()}</span>
                </Link>
              </li>
            )
          })} */}
        </ul>
      </section>
      <section>
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
