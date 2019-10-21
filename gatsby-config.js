module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Prisma CLI Docs',
    directory: __dirname,
  },
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        globalScope: `
          require('typeface-open-sans')
          require('typeface-montserrat')
          require('typeface-roboto-mono')
          require('normalize.css')
        `,
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/Layout.tsx'),
        },
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
  ],
}
