/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Brad Porter`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.png"
    }
  },
  {
    resolve: 'gatsby-plugin-typography',
    options: {
      pathToConfigModule: "src/utils/typography"
    }
  }]
};