import type { GatsbyConfig } from 'gatsby'
require('dotenv').config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `2024_web_portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
    description: '2024년 웹 포트폴리오 사이트',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7akfolr02iof`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
      },
    },
  ],
}

export default config
