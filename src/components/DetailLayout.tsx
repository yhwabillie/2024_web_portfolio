import { Link, PageProps } from 'gatsby'
import * as React from 'react'
import { WorkListType } from '../templates/category-post'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

interface IDetailLayoutProps {
  category: string
  title: string
  headerImageUrl: any
  nextList: WorkListType[]
}

export default function DetailLayout({ title, category, headerImageUrl, nextList }: IDetailLayoutProps) {
  const headerImage = getImage(headerImageUrl)!
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
            const image = getImage(item.ogImage.gatsbyImageData)!

            return (
              <li key={index}>
                <Link to={`/${category}/${item.slug}`}>
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                  <span>{date.toLocaleString()}</span>
                  <GatsbyImage image={image} alt={item.title} />
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
