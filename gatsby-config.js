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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GOOGLE_TAGMANAGER_ID,
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be a stringified object or object
        //
        // Defaults to null
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        },  

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: process.env.GATSBY_ROUTE_CHANGE,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: process.env.GATSBY_GOOGLE_OPTIMIZE_TRACKING_ID,
        // Enables Google Optimize Experiment ID
        experimentId: process.env.GATSBY_GOOGLE_EXPERIMENT_ID,
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "creatiweb.ca",
      },
    },    
  ],
};
