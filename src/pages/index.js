import React from 'react';
//import Link from "gatsby-link";
//import Helmet from "react-helmet";
//import Script from "react-load-script";
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import Box from '../components/box/box';
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
    const { frontmatter } = data.markdownRemark;
    return (
      <div>
        <PageHelmet frontmatter={frontmatter}/>
        <TopImage imageSource={topImage} isHome={true}/>
        <div className={styles.content} >
          <section>
            {frontmatter.tagline.split( '\n' ).map( item => (
              <h1>{item}</h1>
            ))}
            <p>{frontmatter.tagline_large}</p>
            <h4>{frontmatter.title}</h4>
            <p className={styles.paragraph}>{frontmatter.section_1.paragraph}</p>
            <div className={styles.column}>
              {frontmatter.section_1.boxes.map(( item ) => <Box content={item}/> )}
            </div>
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
            title
            tagline
            tagline_large
            section_1 {
              title
              paragraph
              boxes
            }
            content 
        }
    }
}
`;
