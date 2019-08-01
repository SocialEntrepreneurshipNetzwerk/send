import React from 'react';
import PageHelmet from '../components/PageHelmet';
import StickyCTA from '../components/cta/StickyCTA';
import TopImage from '../components/top-image/TopImage';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
import ButtonCTA from '../components/cta/ButtonCTA';
import topImage from '../img/positionen_minified.jpg';
import ColumnText from '../components/column-text/ColumnText';
import ReactMarkdown from 'react-markdown';
import ProfileBox3 from '../components/profile-box/ProfileBox3';

export default ({ data }) => {
  const frontmatter = data.page.frontmatter;
  const partner = data.partners.edges.map(i => i.node.frontmatter);
  const sponsors = data.sponsors.edges.map(i => i.node.frontmatter);
  const sponsorOrganization = sponsors.filter(sponsor => sponsor.organization === true);
  const sponsorPrivate = sponsors.filter(sponsor => sponsor.organization === false);
  const { clip } = frontmatter;
  const title1 = frontmatter.section_1.title;
  const title2 = frontmatter.section_2.title;
  
  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage} clip={clip}/>
      <StickyCTA/>
      <main>
        <section>
          <h1><span>{title1}</span></h1>
          <TriangleBoxContainer boxes={partner} partner={true} size="large"/>
        </section>
        <section>
          <h1><span>{title2}</span></h1>
          <TriangleBoxContainer boxes={sponsorOrganization} sponsor={true} size="large"/>
          {sponsorPrivate.map(( item, index ) => <ProfileBox3 content={item} key={index}/> )}
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
            section_1{
              title
            }
            section_2{
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
