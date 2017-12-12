import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import MemberCTASection from '../components/MemberCTASection'

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const frontmatterHome = data.frontmatterHome.frontmatter;
    const frontmatterMemberCTASection = data.frontmatterMemberCTASection.frontmatter;
    return (
        <div>
            <section>
                {frontmatterHome.tagline.split("\n").map(item => (
                    <h1>{item}</h1>
                ))}
                <p>{frontmatterHome.tagline_large}</p>
                <h4>{frontmatterHome.title}</h4>
                {frontmatterHome.content.blurbs.map((item)=><p>{item}</p>)}
                {frontmatterHome.boxes.blurbs.map((item)=><p>{item}</p>)}
            </section>
            <MemberCTASection data={frontmatterMemberCTASection}/>
        </div>
    );
  }
}

export const IndexQuery = graphql`
  query Index {
    frontmatterHome: markdownRemark(frontmatter: { path: { eq: "/" } }) {
        frontmatter {
            title
            tagline
            tagline_large
            content {
                blurbs
            }
            boxes {
                blurbs
            }
        }
    }
    frontmatterMemberCTASection: markdownRemark(frontmatter:  { component: { eq:"MemberCTASection"}}){
        frontmatter{
            title
            content {
              blurbs
            }
        }
      }
}
`;
