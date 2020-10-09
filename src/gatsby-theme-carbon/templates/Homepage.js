import React from 'react';
import { HomepageCallout, ResourceCard } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import styles from './Homepage.module.scss';
import HomepageVideo from '../../components/HomepageVideo/';
import laptopMobile from '../../images/laptop-mobile.jpg';

const FirstLeftText = () => <p>Think digital</p>;
const FirstRightText = () => (
  <p>
    Get your Shopify store up and running, with options ranging from basic theme setup 
    to completely custom solutions for your existing business or business idea.
   
  </p>    
);

const SecondLeftText = () => <p>You want to work with us?</p>;
const SecondRightText = () => (
  <p>Because we believe each project is unique, you deserve our best attention. 
    We hope to hear from you, your projects and your ideas. 
    <a className={styles.calloutLink} href="/start-a-project">Start a project →</a>
  </p>
);

//const BannerText = () => <h1>Your growth partner</h1>;
const customProps = {
  Banner: (
    <>
    <span className="homepage--dots" />
      <section className="homepage--header">
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-2 bx--offset-lg-8 bx--offset-md-4 bx--offset-sm-2 homepage--tile-header">
              <ResourceCard
                className={styles.callToAction}
                title="Our work"
                href="/our-work"
                color="dark"
                actionIcon="arrowRight"
              />
            </div>
            <HomepageVideo />
          </div>
        </div>
      </section>
    </>
  ),
  FirstCallout: (
    <HomepageCallout
      className={styles.firstCallout}
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      className={styles.secondCallout}
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
