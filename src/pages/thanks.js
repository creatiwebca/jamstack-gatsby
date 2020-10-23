import React from 'react';
import { Link } from 'gatsby';
import Layout from 'gatsby-theme-carbon/src/components/Layout';
import {
  container,
  thanks,
  paragraph,
  heading,
  link,
  list,
} from '../styles/Thanks.module.scss';

const Thanks = () => (
  <Layout homepage>
    <div className={container}>
    <h2 className={heading}>Thank you for getting in touch!</h2>
    <p className={paragraph}>
        We’re thrilled to hear from you. Our inbox can’t wait to get your messages, so talk to us any time you like.
    </p>
    
    <span className={thanks}>Cheers!</span>

    </div>
  </Layout>
);

export default Thanks;

//         {links && ' Maybe some of these most visited links will help you?'}

// {links && (
//   <ul className={list}>
//     {links.map(({ href, text }, i) => (
//       <li key={i}>
//         <Link className={link} to={href}>
//           {text}
//         </Link>
//       </li>
//     ))}
//   </ul>
// )}


