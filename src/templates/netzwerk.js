import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/netzwerk.jpg';
import BackgroundTurquoise from '../components/svg/BackgroundTurquoise';


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
        </section>
        <section>
          <BackgroundTurquoise/>
          <h1><span>{section_2.title}</span></h1>
          <p>{section_2.paragraph}</p>
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
            }
            section_2 {
              title
              paragraph
            }
        }
    }
}
`;
