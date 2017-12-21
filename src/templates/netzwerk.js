import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/netzwerk.jpg';
import BackgroundTurquoise from '../components/svg/BackgroundTurquoise';
import ReactMarkdown from 'react-markdown';
import styles from './netzwerk.module.css';



export default ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const { clip, section_1, section_2 } = frontmatter;
  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage} clip={clip}/>
      <main className={styles.main}>
        <section>
          <h1><span>{section_1.title}</span></h1>
          <TriangleBoxContainer boxes={section_1.triangle_boxes_large} size="large"/>
        </section>
        <section>
          <BackgroundTurquoise/>
          <div className={styles.turquoise_content}>
            <h1><span>{section_2.title}</span></h1>
            <p><ReactMarkdown source={section_2.paragraph}/></p>
          </div>
          <TriangleBoxContainer boxes={section_2.triangle_boxes_large} size="large"/>
        </section>
      </main>
    </div>
  );
};

export const NetzwerkPageQuery = graphql`
  query NetzwerkPage {
    markdownRemark(frontmatter: { path: { eq: "/netzwerk" } }) {
        frontmatter {
            clip
            title
            section_1 {
              title
              triangle_boxes_large {
                image
                name
                description
                link
              }
            }
            section_2 {
              title
              paragraph
              triangle_boxes_large {
                image
                name
                description
                link
              }
            }
        }
    }
}
`;
