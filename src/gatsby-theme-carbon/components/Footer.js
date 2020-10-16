import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import logoCreatiw   from '../../images/logo-creati-md.png';
import { logo } from './Footer.module.scss';

const Content = ({ buildTime }) => (
  <>
    <p>
      Have questions? Email us
      <br />
      at <a href="mailto:developer@creatiweb.ca">developer@creatiweb.ca</a>
    </p>
    <p>
      We are a web studio specialized in developing Shopify ecommerce websites, 
      who helps store owners increase their sales. 
    </p>
    <p>
      <a href="/about">
        More about us
      </a>
    </p>
  </>
);

const links = {
  firstCol: [
    { href: '/services/development', linkText: 'Development and Troubleshooting' },
    { href: '/services/expert-guidance', linkText: 'Expert Guidance' },
    { href: '/services/store-setup', linkText: 'Store Setup' },
  ],
  secondCol: [
    { href: '/start-a-project', linkText: 'Get in Touch' },
    { href: '/publications', linkText: 'Publications' },
  ],
};

const our_logo = () => (<img src={logoCreatiw}  className={logo} alt="CREATIWEB studio"/>);

const CustomFooter = () => <Footer links={links} Content={Content}  Logo={our_logo}/>;

export default CustomFooter;
