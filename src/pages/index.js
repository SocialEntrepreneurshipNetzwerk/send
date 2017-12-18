import React from 'react';
//import Link from "gatsby-link";
//import Helmet from "react-helmet";
//import Script from "react-load-script";
import TopImage from '../components/top-image/TopImage';
import TriangleBox from '../components/triangle-box/TriangleBox';
import ProfileBox from '../components/profile-box/ProfileBox';
import topImage from '../img/Opener.png';
import styles from './index.module.css';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if ( window.netlifyIdentity ) {
      window.netlifyIdentity.on( 'init', user => {
        if ( !user ) {
          window.netlifyIdentity.on( 'login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { tagline, tagline_large, paragraph, section_1, section_2, section_3 } = data.markdownRemark.frontmatter;
    console.log( section_2 );
    return (
      <div>
        <TopImage imageSource={topImage} isHome={true} />
        <div className={styles.content} >
          {tagline.split( '\n' ).map( item => (
            <h1>{item}</h1>
          ))}
          <p>{tagline_large}</p>
          <h2>{paragraph}</h2>
          <section>
            <h4><span>{section_1.title}</span></h4>
            <p className={styles.paragraph}>{section_1.paragraph}</p>
            <div className={styles.column}>
              {section_1.boxes.map(( item ) => <TriangleBox content={item}/> )}
            </div>
          </section>
          <section>
            <h4><span>{section_2.title}</span></h4>
            <p>{section_2.subtitle}</p>
            <div className={styles.column}>
              {section_2.boxes.map(( item ) => <ProfileBox content={item}/> )}
            </div>
            <p className={styles.paragraph}>{section_2.paragraph}</p>
          </section>
          <section>
            <h4><span>{section_3.title}</span></h4>
          </section>
        </div>
      </div>
    );
  }
}

export const IndexQuery = graphql`
  query Index {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
        frontmatter {
            tagline
            tagline_large
            paragraph
            section_1 {
              title
              paragraph
              boxes
            }
            section_2 {
              title
              subtitle
              paragraph
              boxes {
                name
                project
                description
              }
            }
            section_3 {
              title
            }
        }
    }
}
`;
