import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Github',
    href: 'https://github.com/creatiwebca',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/company/creatiweb-digital-solutions',
  },
  {
    title: 'Publications',
    href: '/publications',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
