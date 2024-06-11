import type { GatsbyConfig } from 'gatsby'
require('dotenv').config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `jpatrickfulton.dev`,
    author: `J. Patrick Fulton`,
    description: `A personal blog on occasionally useful technical topics.`,
    image: `/icon.png`,
    siteUrl: `https://main--snazzy-medovik-177b8e.netlify.app`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-adapter-netlify`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        name: `J. Patrick Fulton - Blog`,
        short_name: `JPF.dev Blog`,
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
