import * as React from 'react'
import { HeadFC, Link, graphql, type PageProps } from 'gatsby'
import dayjs from 'dayjs'
import ko from 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import SEO from '../components/Seo'
import { useSectionRefStore } from '../store/storehooks'

dayjs.locale(ko)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('Asia/Seoul')

export default function Page({ data }: PageProps<Queries.PageQuery>) {
  const { setRefArray }: any = useSectionRefStore()
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const careerRef = React.useRef<HTMLDivElement>(null)
  const projectRef = React.useRef<HTMLDivElement>(null)
  const problemRef = React.useRef<HTMLDivElement>(null)
  const contactRef = React.useRef<HTMLDivElement>(null)
  const sectionsRefArray = [aboutRef, careerRef, projectRef, problemRef, contactRef]

  React.useEffect(() => {
    setRefArray(sectionsRefArray)
  }, [])

  return (
    <article className="relative z-2">
      {/* 소개 */}
      <div id="about" ref={aboutRef} className="h-[800px] py-[84px] rounded-3xl mb-[120px] bg-gray">
        <strong>?</strong>
      </div>

      {/* 경력 */}
      <div id="career" ref={careerRef} className="h-[800px] pt-[84px] rounded-3xl mb-[120px] bg-gray">
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

      {/* 개인 프로젝트 */}
      <div id="project" ref={projectRef} className="h-[800px] pt-[84px] rounded-3xl mb-[120px] bg-gray">
        <h2>3. 사이드 프로젝트</h2>
      </div>

      {/* 해결 */}
      <div id="problem" ref={problemRef} className="h-[800px] pt-[84px] rounded-3xl bg-gray">
        <h2>4. 문제 해결 문서</h2>
      </div>
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
