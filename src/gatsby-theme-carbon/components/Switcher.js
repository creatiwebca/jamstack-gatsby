import React from 'react';
import Switcher, {SwitcherLink } from 'gatsby-theme-carbon/src/components/Switcher';

const NewChildren = () => (
    <>
      <SwitcherLink href="https://www.linkedin.com/in/haroldcaicedo" target="_blank">LinkedIn</SwitcherLink>   
      <SwitcherLink href="https://github.com/creatiwebca" target="_blank">GitHub CREATIWEB</SwitcherLink>  
    </>
  );

const CustomSwitcher = () => (<Switcher children={<NewChildren />} />)

export default CustomSwitcher;