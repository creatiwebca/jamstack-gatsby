import React from 'react';
import Switcher, {SwitcherLink } from 'gatsby-theme-carbon/src/components/Switcher';

const NewChildren = () => (
    <>
      <SwitcherLink href="https://www.linkedin.com/company/creatiweb-digital-solutions" target="_blank">Linkedin company Creatiweb.ca</SwitcherLink>   
      <SwitcherLink href="https://github.com/creatiwebca" target="_blank">GitHub profile: Creatiwebca</SwitcherLink>  
    </>
  );

const CustomSwitcher = () => (<Switcher children={<NewChildren />} />)

export default CustomSwitcher;