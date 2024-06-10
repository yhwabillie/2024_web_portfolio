import * as React from 'react'
import { Link, graphql, type PageProps } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.locale('ko')
dayjs.extend(utc)
dayjs.extend(timezone)

export default function Page({ data }: PageProps<Queries.WorksQuery>) {
  // 다이나믹 임포트
  // const RelativeDateTextComponent = React.lazy(() => import('../components/RelativeDateTextComponent'))
  return (
    <Layout title="메인 페이지">
      <section>
        <h2>1. 소개</h2>
        <p>어쩌고한 개발자입니다.</p>
      </section>
      <section>
        <h2>2. 경력사항</h2>
        <ul>
          {data.allContentfulWork.nodes.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/work-experience/${item.id}`}>
                  <span>{item.title}</span>
                  <span>{dayjs(item.createdAt).tz('Asia/Seoul').format('YYYY-MM-DD a hh:mm:ss')}</span>
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
  query Works {
    allContentfulWork {
      nodes {
        id
        title
        createdAt
      }
    }

    allContentfulProject {
      nodes {
        id
        title
        createdAt
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`

export const Head = ({ data }: PageProps<Queries.WorksQuery>) => <Seo title="웹 포트폴리오" />
