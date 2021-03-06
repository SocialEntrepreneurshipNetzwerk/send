import React from 'react';
//import Script from 'react-load-script'; // not sure if we need this for cms. seems to work without it?
import StickyCTA from '../components/cta/StickyCTA';
import TopImage from '../components/top-image/TopImage';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
import ProfileBox from '../components/profile-box/ProfileBox';
import PageHelmet from '../components/PageHelmet';
import BackgroundTurquoise from '../components/svg/BackgroundTurquoise';
import ButtonCTA from '../components/cta/ButtonCTA';
import topImage from '../img/Opener.jpg';
import ReactMarkdown from 'react-markdown';
import Link from 'gatsby-link';
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
    const { tagline, tagline_large, paragraph, cta_sticky, section_1, section_2, section_3 } = frontmatter;
    const graphqlArticleFrontmatter = data.allMarkdownRemark.edges.map(i => i.node.frontmatter);
    const graphqlArticleSlugs = data.allMarkdownRemark.edges.map(i=>i.node.fields.slug);
    const graphqlArticle = graphqlArticleFrontmatter.map((i,index)=>{return {...i, slug: graphqlArticleSlugs[index]}})
    const articles = graphqlArticle;

    return (
      <div>
        <PageHelmet frontmatter={frontmatter}/>
        <TopImage imageSource={topImage} isHome={true}/>
        {cta_sticky.showOnPage &&
          <StickyCTA data={cta_sticky}/>
        }
        <header className={styles.header}>
          <h1>{tagline}</h1>
        </header>
        <main className={styles.main} >
          <section>
            <h1><span>Aktuelles</span></h1>
            <TriangleBoxContainer boxes={articles} blogpreview={true} article={true}/>
          </section>
          <h1 className={styles.decorativeParagraph}>{paragraph}</h1>
          <section>
            <h1><span>{section_1.title}</span></h1>
            <div className={styles.section_paragraph}><ReactMarkdown source={section_1.paragraph}/></div>
            <TriangleBoxContainer boxes={section_1.boxes} size="small"/>
          </section>
          <section>
            <div className={styles.turquoise_wrapper}>
              <BackgroundTurquoise/>
              <Link to="/netzwerk" className={styles.title_link}>
                <h1><span>{section_2.title}</span></h1>
                <h2>{section_2.subtitle}</h2>
              </Link>
              <div className={styles.column3}>
                {section_2.profile_boxes.map(( item, index ) => <ProfileBox content={item} key={index}/> )}
              </div>
            </div>
            <div className={styles.paragraph}><ReactMarkdown source={section_2.paragraph}/></div>
            <ButtonCTA color="active" label={section_2.cta.label} link={section_2.cta.link}/>
          </section>
        </main>
      </div>
    );
  }
}

export const IndexQuery = graphql`
  query Index {
    allMarkdownRemark (limit:4 filter: {fileAbsolutePath: {regex: "/src/pages/blog\//"}}, sort:{fields:[frontmatter___date], order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter{
            title
            excerpt
            date (formatString: "DD.MM.YYYY")
            category
            image
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: "/" } }) {
        frontmatter {
            title
            cta_sticky {
              text
              link
              hexColor
              showOnPage
            }
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
                email
                project
                description
              }
            }
        }
    }
}
`;
