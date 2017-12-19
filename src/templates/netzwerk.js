import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import TriangleBoxLarge from '../components/triangle-box/TriangleBoxLarge';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/netzwerk.jpg';
import BackgroundTurquoise from '../components/svg/BackgroundTurquoise';
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
          <div className={styles.boxes}>
            {section_1.profile_boxes.map(( boxes ) => <TriangleBoxLarge box={boxes}/> )}
          </div>
        </section>
        <section>
          <BackgroundTurquoise/>
          <div className={styles.turquoise_content}>
            <h1><span>{section_2.title}</span></h1>
            <p>{section_2.paragraph}</p>
          </div>
          <div className={styles.boxes}>
            {section_2.profile_boxes.map(( boxes ) => <TriangleBoxLarge box={boxes}/> )}
          </div>
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
              profile_boxes {
                image
                name
                description
                link
              }
            }
            section_2 {
              title
              paragraph
              profile_boxes {
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
