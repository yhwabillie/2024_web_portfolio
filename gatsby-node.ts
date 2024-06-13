import { GatsbyNode } from 'gatsby'
import path from 'path'

//category별 디테일 페이지 생성
export const createPages: GatsbyNode['createPages'] = ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const categoryPostTemplate = path.resolve(`src/templates/category-post.tsx`)

  return graphql<Queries.AllWorkNodesQuery>(`
    query AllWorkNodes {
      allContentfulWork {
        nodes {
          category
          title
          slug
          createdAt
          ogImage {
            publicUrl
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data?.allContentfulWork.nodes.forEach((node) => {
      createPage({
        path: `${node.category}/${node.slug}`,
        component: categoryPostTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
