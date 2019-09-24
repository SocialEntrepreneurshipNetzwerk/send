import React from 'react';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/positionen_minified.jpg';
// UI
import TopImage from '../components/top-image/TopImage';
import StickyCTA from '../components/cta/StickyCTA';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
import ProfileBox2 from '../components/profile-box/ProfileBox2';
import ReactMarkdown from 'react-markdown';

export default ({ data }) => {
  const frontmatter = data.page.frontmatter;
  const partner = data.partners.edges.map(i => i.node.frontmatter);
  const sponsors = data.sponsors.edges.map(i => i.node.frontmatter);
  const sponsorOrganization = sponsors.filter(sponsor => sponsor.organization === true);
  const sponsorPrivate = sponsors.filter(sponsor => sponsor.organization === false);
  const { cta_sticky, clip } = frontmatter;
  const section_1 = frontmatter.section_1;
  const section_2 = frontmatter.section_2;
  const section_3 = frontmatter.section_3;

  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage} clip={clip}/>
      {
        cta_sticky.showOnPage && <StickyCTA data={cta_sticky}/>
      }
      <main>
        <section>
          <h1><span>{section_1.title}</span></h1>
          <ReactMarkdown source={section_1.paragraph}/>
          <TriangleBoxContainer boxes={partner} partner={true} size="large"/>
        </section>
        <section>
          <h1><span>{section_2.title}</span></h1>
          <ReactMarkdown source={section_2.paragraph}/>
          <TriangleBoxContainer boxes={sponsorOrganization} sponsor={true} size="large"/>
          <h1><span>{section_3.title}</span></h1>
          <ReactMarkdown source={section_3.paragraph}/>
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
              paragraph
            }
            section_2{
              title
              paragraph
            }
            section_3{
              title
              paragraph
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
