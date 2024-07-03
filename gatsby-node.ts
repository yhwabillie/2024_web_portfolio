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
          company
          role
          startDate
          endDate
          product
          tags
          slug
          category
          createdAt
          description
          ogImage {
            publicUrl
            gatsbyImageData
          }
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData
                __typename
              }
            }
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
      path: `category/${node.category}/${node.slug}`,
      component: categoryPostTemplate,
      context: {
        id: node.id,
        category: node.category,
        slug: node.slug,
        company: node.company,
        role: node.role,
        startDate: node.startDate,
        endDate: node.endDate,
        product: node.product,
        tags: node.tags,
        title: node.title,
        createdAt: node.createdAt,
        description: node.description,
        ogImageUrl: node.ogImage?.publicUrl,
        headerImagePath: node.ogImage?.gatsbyImageData,
        workList: allWorks.filter((item) => item.id !== node.id),
        contentRawData: node.content,
      },
    })
  })
}
