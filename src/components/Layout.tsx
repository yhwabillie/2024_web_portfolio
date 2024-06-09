import * as React from 'react'
import { Link } from 'gatsby'

interface ILayoutProps {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: ILayoutProps) {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">LOGO</Link>
        </h1>
        <nav>
          <p>스크롤 네비게이션 헤더</p>
          <ul>
            <li>
              <Link to="">소개</Link>
            </li>
            <li>
              <Link to="">경력사항</Link>
            </li>
            <li>
              <Link to="">사이드 프로젝트</Link>
            </li>
            <li>
              <Link to="">문제 해결 문서</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  )
}
