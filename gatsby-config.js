module.exports = {
  siteMetadata: {
    title: 'Web studio | digital solutions',
    siteUrl: 'https://www.creatiweb.ca',
    description: 
      'CREATIWEB is a web studio who helps store owners increase their sales. We are specialized in developing Shopify ecommerce websites for clients all over the world.',
    keywords: 
      'developer,digital,solutions,ecommerce,shopify,partner,web,studio,design,cloud'
  },
  pathPrefix: `/cds`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CREATIWEB studio',
        short_name: 'Creatiweb',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
        icon: `src/images/logo-manifest.png`,
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        navigationStyle: 'header', 
        iconPath: './src/images/logo-manifest.png',
        additionalFontWeights: ['200', '200i'],
        mdxExtensions: ['.mdx'],
        titleType: 'page',
        mediumAccount: '@creatiwebca',
      },
    },
    'gatsby-plugin-netlify-cache',
    `gatsby-plugin-sitemap`,

  ],
};
