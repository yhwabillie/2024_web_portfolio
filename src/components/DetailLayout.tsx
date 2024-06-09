import { Link } from 'gatsby'
import * as React from 'react'

interface IDetailLayoutProps {
  category: string
  title: string
  nextList: readonly { readonly title: string | null; readonly id: string; readonly createdAt: string | null }[]
}

export default function DetailLayout({ category, title, nextList }: IDetailLayoutProps) {
  return (
    <main>
      <Link to="/">👈 Go Home</Link>
      <h1>{title}</h1>
      <p>컨텐츠 내용</p>

      <div>
        <h2>Next</h2>
        <ul>
          {nextList.map((item, index) => {
            const date = new Date(`${item.createdAt}`)
            return (
              <li key={index}>
                <Link to={`/${category}/${item.id}`}>
                  <span>{item.title}</span>
                  <span>{date.toLocaleString()}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <Link to="/">👈 Go Home</Link>
    </main>
  )
}
