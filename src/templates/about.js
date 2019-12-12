import React from 'react';
import ReactMarkdown from 'react-markdown';
import StickyCTA from '../components/cta/StickyCTA';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/SEND_01.02.18_Internet-273.jpg';
import ColumnText from '../components/column-text/ColumnText';
import ProfileBox2 from '../components/profile-box/ProfileBox2';
import styles from './about.module.css';


export default ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const { cta_sticky, clip, section_1, section_2, section_3, section_4 } = frontmatter;
  const teamAll = data.allMarkdownRemark.edges.map( i => i.node.frontmatter ).sort((a,b) => a.name > b.name ? 1 : -1 );
  const executive = teamAll.filter( member => member.role === 'Vorstand' );
  const regionalGroups = teamAll.filter( member => member.role === 'Regionalgruppe' ).sort((a,b) => a.federalState > b.federalState ? 1 : -1 );
  const team = teamAll.filter( member => member.role === 'Team' );


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
          <ReactMarkdown source={section_2.paragraph}/>
          <div className={styles.profile_container}>
            {executive.map(( item, index ) => <ProfileBox2 content={item} key={index}/> )}
          </div>
        </section>
        <section>
          <h1><span>{section_3.title}</span></h1>
          <div className={styles.profile_container}>
            {team.map(( item, index ) => <ProfileBox2 content={item} key={index}/> )}
          </div>
        </section>
        <section>
          <h1><span>{section_4.title}</span></h1>
          <ReactMarkdown source={section_4.paragraph}/>
          <div className={styles.profile_container}>
            {regionalGroups.map(( item, index ) => <ProfileBox2 content={item} key={index}/> )}
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
              paragraph
            }
            section_3 {
              title
            }
            section_4{
              title
              paragraph
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
            federalState
            mail
            description
          }
        }
      }
    }
}
`;
