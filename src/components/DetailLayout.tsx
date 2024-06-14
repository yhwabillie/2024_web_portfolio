import { Link, PageProps } from 'gatsby'
import * as React from 'react'
import { NextWorkListType } from '../templates/category-post'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

interface IDetailLayoutProps {
  category: string
  title: string
  headerImagePath: any
  nextList: NextWorkListType[]
}

export default function DetailLayout({ title, category, headerImagePath, nextList }: IDetailLayoutProps) {
  const headerImage = getImage(headerImagePath)!

  return (
    <main>
      <Link to="/">👈 Go Home</Link>
      <article>
        <h1>{title}</h1>
        <GatsbyImage image={headerImage} alt={title} />
      </article>
      <div>
        <strong>{`Next ${category}`}</strong>
        <ul>
          {nextList.map((item, index) => {
            const date = new Date(`${item.createdAt}`)
            const headerImage = getImage(item.ogImage.gatsbyImageData)!

            return (
              <li key={index}>
                <Link to={`/${category}/${item.slug}`}>
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                  <span>{date.toLocaleString()}</span>
                  <GatsbyImage image={headerImage} alt={item.title} />
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
