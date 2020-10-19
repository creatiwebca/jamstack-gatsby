import React from 'react';
import Switcher, {SwitcherLink } from 'gatsby-theme-carbon/src/components/Switcher';

const NewChildren = () => (
    <>
      <SwitcherLink href="https://www.linkedin.com/company/creatiweb-digital-solutions" target="_blank">Linkedin</SwitcherLink>   
      <SwitcherLink href="https://github.com/creatiwebca" target="_blank">GitHub</SwitcherLink>  
    </>
  );

const CustomSwitcher = () => (<Switcher children={<NewChildren />} />)

export default CustomSwitcher;