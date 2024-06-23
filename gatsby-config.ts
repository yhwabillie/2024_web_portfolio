import type { GatsbyConfig } from 'gatsby'
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  //메타데이터 정보 (동적 메타데이터)
  siteMetadata: {
    title: `웹사이트 이름`,
    description: `디폴트 메타데이터 디스크립션 설명입니다.`,
    ogImagePath: `/icon.png`,
    siteUrl: process.env.GATSBY_API_URL,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-adapter-netlify`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-advanced-sitemap',
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: process.env.GATSBY_API_URL,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_API_URL,
        sitemap: `${process.env.GATSBY_API_URL}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `웹사이트 이름`,
        short_name: `웹사이트 이름`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}

export default config
