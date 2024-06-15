import * as React from 'react'
import useThemeStore from '../store/useThemeStore'
import { Link } from 'gatsby'

export default function Header() {
  const toggleTheme = useThemeStore((state: any) => state.toggleTheme)

  return (
    <header>
      <div className="container">
        <div>
          <div>Logo</div>
          <p>공통 헤더 컴포넌트</p>
          <button onClick={toggleTheme}>테마모드</button>
        </div>
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
      </div>
    </header>
  )
}
