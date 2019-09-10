import React from 'react';
import PageHelmet from '../components/PageHelmet';
import StickyCTA from '../components/cta/StickyCTA';
import TopImage from '../components/top-image/TopImage';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
import ButtonCTA from '../components/cta/ButtonCTA';
import topImage from '../img/positionen_minified.jpg';
import ColumnText from '../components/column-text/ColumnText';
import ReactMarkdown from 'react-markdown';
import ProfileBox2 from '../components/profile-box/ProfileBox2';

export default ({ data }) => {
  const frontmatter = data.page.frontmatter;
  const partner = data.partners.edges.map(i => i.node.frontmatter);
  const sponsors = data.sponsors.edges.map(i => i.node.frontmatter);
  const sponsorOrganization = sponsors.filter(sponsor => sponsor.organization === true);
  const sponsorPrivate = sponsors.filter(sponsor => sponsor.organization === false);
  const { cta_sticky, clip } = frontmatter;
  const title1 = frontmatter.section_1.title;
  const title2 = frontmatter.section_2.title;
  const title3 = frontmatter.section_3.title;
  
  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage} clip={clip}/>
      {cta_sticky.showOnPage &&
        <StickyCTA data={cta_sticky}/>        
      }
      <main>
        <section>
          <h1><span>{title1}</span></h1>
          <TriangleBoxContainer boxes={partner} partner={true} size="large"/>
        </section>
        <section>
          <h1><span>{title2}</span></h1>
          <TriangleBoxContainer boxes={sponsorOrganization} sponsor={true} size="large"/>
          <h1><span>{title3}</span></h1>
          {sponsorPrivate.map(( item, index ) => <ProfileBox2 content={item} key={index}/> )}
        </section>
      </main>
    </div>
  );
};

export const PartnerPageQuery = graphql`
  query Partners {
    page:
      markdownRemark(fields: { slug: { eq: "/partner" } }) {
        frontmatter {
            clip
            title
            cta_sticky {
              text
              link
              hexColor
              showOnPage
            }
            section_1{
              title
            }
            section_2{
              title
            }
            section_3{
              title
            }
        }
      }
    partners:
      allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/src/partners/"}}) {
        edges {
          node {
            frontmatter{
              title
              image
              description
            }
          }
        }
      }
    sponsors:
      allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/src/sponsors/"}}) {
        edges {
          node {
            frontmatter{
              title
              image
              homepage
              mail
              organization
            }
          }
        }
      } 
  }
`;
