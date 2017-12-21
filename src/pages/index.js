import React from 'react';
//import Script from 'react-load-script'; // not sure if we need this for cms. seems to work without it?
import TopImage from '../components/top-image/TopImage';
import TriangleBox from '../components/triangle-box/TriangleBox';
import ProfileBox from '../components/profile-box/ProfileBox';
import PageHelmet from '../components/PageHelmet';
import BackgroundTurquoise from '../components/svg/BackgroundTurquoise';
import topImage from '../img/Opener.png';
import ReactMarkdown from 'react-markdown';
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
    const frontmatter = data.markdownRemark.frontmatter;
    const { tagline, tagline_large, paragraph, section_1, section_2, section_3 } = frontmatter;
    return (
      <div>
        <PageHelmet frontmatter={frontmatter}/>
        <TopImage imageSource={topImage} isHome={true}/>
        <header className={styles.header}>
          <h1>{tagline}</h1>
          <p><ReactMarkdown source={tagline_large}/></p>
        </header>
        <main className={styles.main} >
          <h1>{paragraph}</h1>
          <section>
            <h1><span>{section_1.title}</span></h1>
            <p><ReactMarkdown source={section_1.paragraph}/></p>
            <div className={styles.column2}>
              {section_1.boxes.map(( box ) => <TriangleBox box={box}/> )}
            </div>
          </section>
          <section>
            <BackgroundTurquoise/>
            <h1><span>{section_2.title}</span></h1>
            <h2>{section_2.subtitle}</h2>
            <div className={styles.column3}>
              {section_2.profile_boxes.map(( item ) => <ProfileBox content={item}/> )}
            </div>
            <p className={styles.paragraph}><ReactMarkdown source={section_2.paragraph}/></p>
          </section>
          <section>
            <h1><span>{section_3.title}</span></h1>
          </section>
        </main>
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
            paragraph
            section_1 {
              title
              paragraph
              boxes {
                description
              }
            }
            section_2 {
              title
              subtitle
              paragraph
              profile_boxes {
                image
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
