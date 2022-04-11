module.exports = {
  siteMetadata: {
    title: `Brad Porter`,
    siteUrl: `https://www.prtr.co`,
  },
  plugins: [
    {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/favicon.png',
    }
  },
],
}
