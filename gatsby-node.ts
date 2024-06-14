import { GatsbyNode } from 'gatsby'
import path from 'path'

//category별 디테일 페이지 생성
export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const categoryPostTemplate = path.resolve(`src/templates/category-post.tsx`)

  const result = await graphql<Queries.AllWorkNodesQuery>(`
    query AllWorkNodes {
      allContentfulWork {
        nodes {
          id
          title
          slug
          category
          createdAt
          description
          ogImage {
            publicUrl
            gatsbyImageData(height: 200)
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨 Error: Loading "createPages" Query')
  }

  // AllWorkNodes 데이터
  const allWorks = result.data?.allContentfulWork.nodes || []

  allWorks.forEach((node) => {
    //template pageContext data
    createPage({
      path: `${node.category}/${node.slug}`,
      component: categoryPostTemplate,
      context: {
        id: node.id,
        title: node.title,
        slug: node.slug,
        category: node.category,
        createdAt: node.createdAt,
        description: node.description,
        ogImageUrl: node.ogImage?.publicUrl,
        headerImagePath: node.ogImage?.gatsbyImageData,
        workList: allWorks.filter((item) => item.id !== node.id),
      },
    })
  })
}
