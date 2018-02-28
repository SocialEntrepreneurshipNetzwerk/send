import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/netzwerk_min.jpg';
import BackgroundTurquoise2 from '../components/svg/BackgroundTurquoise2';
import styles from './about.module.css';


export default ({ data }) => {

  const frontmatter = data.markdownRemark.frontmatter;

  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage}/>
      <div className={styles.turquoise_section}>
        <BackgroundTurquoise2/>
        <p className={styles.tagline}>{frontmatter.tagline}</p>
      </div>
    </div>
  );
};





export const AboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(fields: { slug: { eq: "/ueber-uns" } }) {
        frontmatter {
            title
            tagline
        }
    }
}
`;
