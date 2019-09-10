import React from 'react';
import ReactMarkdown from 'react-markdown';
import StickyCTA from '../components/cta/StickyCTA';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/SEND_01.02.18_Internet-273.jpg';
import ColumnText from '../components/column-text/ColumnText';
import BackgroundTurquoise2 from '../components/svg/BackgroundTurquoise2';
import GermanMap from '../components/svg/GermanMap';
import ProfileBox2 from '../components/profile-box/ProfileBox2';
import styles from './about.module.css';


export default ({ data }) => {

  const frontmatter = data.markdownRemark.frontmatter;

  const team = data.allMarkdownRemark.edges.map(i => i.node.frontmatter);
  const executive = team.filter(member => member.role === "Vorstand");


  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage} clip={clip}/>
      {cta_sticky.showOnPage &&
        <StickyCTA data={cta_sticky}/>
      }
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
          <div className={styles.executive_container}>
            {executive.map((item, index) => <ProfileBox2 content={item} key={index}/>)}
          </div>
        </section>
        <section>
          <h1><span>{section_3.title}</span></h1>
          <div className={styles.profile_container}>
            {section_3.profile_boxes.map(( item, index ) => <ProfileBox2 content={item} key={index}/> )}
          </div>
        </section>
        <section>
          <h1><span>{section_4.title}</span></h1>
          <ReactMarkdown source={section_4.paragraph}/>
          <div className={styles.column_wrapper}>
            <div className={styles.column}>
              <p className={styles.column_title}>{section_4.column_1.title}</p>
              <ul>
                {section_4.column_1.rows.map(( item, index ) => <li key={index}><ReactMarkdown source={item.row}/></li> )}
              </ul>
            </div>
            <div className={styles.column}>
              <p className={styles.column_title}>{section_4.column_2.title}</p>
              <ul>
                {section_4.column_2.rows.map(( item, index ) => <li key={index}>{item.row}</li> )}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};





export const AboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(fields: { slug: { eq: "/ueber-uns" } }) {
        frontmatter {
            title
            cta_sticky {
              text
              link
              hexColor
              showOnPage
            }
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
              column_1{
                title
                rows{
                  row
                }
              }
              column_2{
                title
                rows{
                  row
                }
              }
            }
        }
    }
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/src/team/"}}) {
      edges {
        node {
          frontmatter{
            name
            image
            role
          }
        }
      }
    }
}
`;
