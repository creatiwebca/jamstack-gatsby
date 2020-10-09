import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/our-story', text: 'Our story' },
  { href: '/services/shopify-packages', text: 'Shopify packages' },
  { href: '/publications', text: 'Publications' },
  { href: '/start-a-project', text: 'Get in Touch' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
