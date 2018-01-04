import React from 'react';
import PageHelmet from '../components/PageHelmet';
import TopImage from '../components/top-image/TopImage';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
import ButtonCTA from '../components/cta/ButtonCTA';
import topImage from '../img/positionen_minified.jpg';
import ReactMarkdown from 'react-markdown';
import styles from './positionen.module.css';

export default ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const { clip, section_1, section_2 } = frontmatter;
  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage} clip={clip}/>
      <main>
        <section>
          <h1><span>{section_1.title}</span></h1>
          <div className={styles.columns}><ReactMarkdown source={section_1.paragraph}/></div>
        </section>
        <section>
          <h1><span>{section_2.title}</span></h1>
          <TriangleBoxContainer boxes={section_2.boxes} size="small"/>
          <ButtonCTA color="active" label={section_2.cta.label} link={section_2.cta.link}/>
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
            title
            section_1 {
              title
              paragraph
            }
            section_2 {
              title
              cta {
                label
                link
              }
              boxes{
                icon
                description
              }
            }
        }
    }
}
`;
