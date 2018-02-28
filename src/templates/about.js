import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/netzwerk_min.jpg';
import styles from './about.module.css';


export default ({ data }) => {

  const frontmatter = data.markdownRemark.frontmatter;

  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage}/>
    </div>
  );
};





export const AboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(fields: { slug: { eq: "/ueber-uns" } }) {
        frontmatter {
            title
        }
    }
}
`;
