import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/ueber-uns.jpg';
import BackgroundTurquoise2 from '../components/svg/BackgroundTurquoise2';
import ProfileBox2 from '../components/profile-box/ProfileBox2';
import styles from './about.module.css';


export default ({ data }) => {

  const frontmatter = data.markdownRemark.frontmatter;
  const { tagline, section_1 } = frontmatter;

  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage}/>
      <div className={styles.turquoise_section}>
        <BackgroundTurquoise2/>
        <p className={styles.tagline}>{tagline}</p>
      </div>
      <main>
        <section>
          <h1><span>{section_1.title}</span></h1>
          <div className={styles.profile_container}>
            {section_1.profile_boxes.map(( item, index ) => <ProfileBox2 content={item} key={index}/> )}
          </div>
        </section>
      </main>
    </div>
  );
};





export const AbouPageQuery = graphql`
  query AbouPage {
    markdownRemark(fields: { slug: { eq: "/ueber-uns" } }) {
        frontmatter {
            title
            tagline
            section_1 {
              title
              profile_boxes {
                name
                role
                organization
                image
              }
            }
        }
    }
}
`;
