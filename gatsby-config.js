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
      resolve: 'gatsby-plugin-google-marketing-platform',
      options: {
        dataLayer: {
          // Preset dataLayer values
          gaPropertyId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID || "none",
        },
        tagmanager: {
          id: process.env.GATSBY_GOOGLE_TAGMANAGER_ID || "none",
          params: {
            // GTM URL Parameters
            // Ex: https://www.googletagmanager.com/gtm.js?id=[ID]&gtm_cookies_win=x
            gtm_cookies_win: 'x',
            // Include GTM in development.            
    
            // Name of the event that is triggered
            // on every Gatsby route change.
            //
            // Defaults to gatsby-route-change
            routeChangeEventName: process.env.GATSBY_ROUTE_CHANGE || "none",
          }
        },
        analytics: {
          id: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID || "none",
        },
        optimize: {
          id: process.env.GATSBY_GOOGLE_OPTIMIZE_TRACKING_ID || "none",
          activateOn: true,
        },
        includeInDevelopment: true,
      }
    },
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
