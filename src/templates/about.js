import React from 'react';
import ReactMarkdown from 'react-markdown';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/SEND_01.02.18_Internet-273.jpg';
import ColumnText from '../components/column-text/ColumnText';
import BackgroundTurquoise2 from '../components/svg/BackgroundTurquoise2';
import ProfileBox2 from '../components/profile-box/ProfileBox2';
import styles from './about.module.css';


export default ({ data }) => {

  const frontmatter = data.markdownRemark.frontmatter;
  const { clip, section_1, section_2, section_3, section_4 } = frontmatter;

  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage} clip={clip}/>
      <main>
        <section>
          <h1><span>{section_1.title}</span></h1>
          <ColumnText text={section_1.paragraph}/>
        </section>
        <section className={styles.section2}>
          <h1><span>{section_2.title}</span></h1>
          <div className={styles.clip_image} style={{ backgroundImage: `url(${section_2.image})` }}>
            <BackgroundTurquoise2 image={section_2.image}/>
          </div>
          <ReactMarkdown source={section_2.paragraph}/>
        </section>
        <section>
          <h1><span>{section_3.title}</span></h1>
          <div className={styles.profile_container}>
            {section_3.profile_boxes.map(( item, index ) => <ProfileBox2 content={item} key={index}/> )}
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
            clip
            section_1{
              title
              paragraph
            }
            section_2{
              title
              image
              paragraph
            }
            section_3 {
              title
              profile_boxes {
                name
                role
                organization
                image
              }
            }
            section_4{
              title
              paragraph
            }
        }
    }
}
`;
