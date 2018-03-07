import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/netzwerk_min.jpg';
import BackgroundTurquoise from '../components/svg/BackgroundTurquoise';
import ButtonCTA from '../components/cta/ButtonCTA';
import ReactMarkdown from 'react-markdown';
import styles from './netzwerk.module.css';



export default ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const members = data.allMarkdownRemark.edges;
  const { clip, section_1, section_2 } = frontmatter;

  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage} clip={clip}/>
      <main className={styles.main}>
        <section>
          <h1><span>{section_1.title}</span></h1>
          <ReactMarkdown source={section_1.paragraph}/>
          <br/>
          <TriangleBoxContainer boxes={members} size="large"/>
        </section>
        <section className={styles.turquoise_section}>
          <BackgroundTurquoise/>
          <div className={styles.turquoise_content}>
            <h1><span>{section_2.title}</span></h1>
            <ReactMarkdown source={section_2.paragraph}/>
            <ButtonCTA color="white" label={section_2.cta.label} link={section_2.cta.link}/>
          </div>
        </section>
      </main>
    </div>
  );
};

export const NetzwerkPageQuery = graphql`
  query NetzwerkPage {
    markdownRemark(fields: { slug: { eq: "/netzwerk" } }) {
        frontmatter {
            clip
            title
            section_1 {
              title
              paragraph
            }
            section_2 {
              title
              paragraph
              cta {
                label
                link
              }
            }
        }
    }
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(members)/.*\\.md$/"}}) {
      edges {
        node {
          frontmatter{
            title
            description
            email
            link
            image
          }
        }
      }
    }
}
`;
