import React from 'react';
import TopImage from '../components/top-image/TopImage';
import TriangleBox from '../components/triangle-box/TriangleBox';
import topImage from '../img/positionen.jpg';
import styles from './positionen.module.css';

export default ({ data }) => {
  const { clip, section_1, section_2 } = data.markdownRemark.frontmatter;
  return (
    <div>
      <TopImage imageSource={topImage} clip={clip}/>
      <main>
        <section>
          <h1><span>{section_1.title}</span></h1>
          <p className={styles.columns}>{section_1.paragraph}</p>
        </section>
        <section>
          <h1><span>{section_2.title}</span></h1>
          <div className={styles.boxes}>
            {section_2.boxes.map(( item ) => <TriangleBox content={item}/> )}
          </div>
        </section>
      </main>
    </div>
  );
};

export const PositionenPageQuery = graphql`
  query Positionen {
    markdownRemark(frontmatter: { path: { eq: "/positionen" } }) {
        frontmatter {
            clip
            section_1 {
              title
              paragraph
            }
            section_2 {
              title
              boxes
            }
        }
    }
}
`;
