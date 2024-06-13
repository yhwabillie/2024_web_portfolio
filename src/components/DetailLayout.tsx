import { Link, PageProps } from 'gatsby'
import * as React from 'react'

interface IDetailLayoutProps {
  category: string
  title: string
  nextList: readonly { readonly slug: string | null; readonly title: string | null; readonly createdAt: string | null }[]
}

export default function DetailLayout({ title, category }: any) {
  return (
    <main>
      <Link to="/">👈 Go Home</Link>
      <article>
        <h1>{title}</h1>
        <div>image</div>
      </article>
      <div>
        <strong>{`Next ${category}`}</strong>
        <ul></ul>
      </div>
      {/* <section>
      <h1>{title}</h1></section>
      <p>컨텐츠 내용</p>

      <div>
        <h2>Next</h2>
        <ul>
          {nextList.map((item, index) => {
            const date = new Date(`${item.createdAt}`)
            return (
              <li key={index}>
                <Link to={`/${category}/${item.slug}`}>
                  <span>{item.title}</span>
                  <span>{date.toLocaleString()}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div> */}

      <Link to="/">👈 Go Home</Link>
    </main>
  )
}
