import React from 'react';
//import Script from 'react-load-script'; // not sure if we need this for cms. seems to work without it?
import TopImage from '../components/top-image/TopImage';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
import ProfileBox from '../components/profile-box/ProfileBox';
import PageHelmet from '../components/PageHelmet';
import BackgroundTurquoise from '../components/svg/BackgroundTurquoise';
import ButtonCTA from '../components/cta/ButtonCTA';
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
    const newsEdges = data.allFile.edges;
    return (
      <div>
        <PageHelmet frontmatter={frontmatter}/>
        <TopImage imageSource={topImage} isHome={true}/>
        <header className={styles.header}>
          <h1>{tagline}</h1>
          <ReactMarkdown source={tagline_large}/>
        </header>
        <main className={styles.main} >
          <h1>{paragraph}</h1>
          <section>
            <h1><span>{section_1.title}</span></h1>
            <div className={styles.section_paragraph}><ReactMarkdown source={section_1.paragraph}/></div>
            <TriangleBoxContainer boxes={section_1.boxes} size="small"/>
          </section>
          <section>
            <div className={styles.turquoise_wrapper}>
              <BackgroundTurquoise/>
              <h1><span>{section_2.title}</span></h1>
              <h2>{section_2.subtitle}</h2>
              <div className={styles.column3}>
                {section_2.profile_boxes.map(( item, index ) => <ProfileBox content={item} key={index}/> )}
              </div>
            </div>
            <div className={styles.paragraph}><ReactMarkdown source={section_2.paragraph}/></div>
            <ButtonCTA color="active" label={section_2.cta.label} link={section_2.cta.link}/>
          </section>
          <section>
            <h1><span>{section_3.title}</span></h1>
            <TriangleBoxContainer boxes={newsEdges} article={true}/>
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
              cta {
                label
                link
              }
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
    allFile(filter:{relativeDirectory:{eq: "blog"}}){edges{node{name childMarkdownRemark {
          excerpt(pruneLength: 300)
  frontmatter {
    title
    excerpt
    path
    image
    date (formatString: "DD MMMM, YYYY")
    category
  }
}}}}
}
`;
