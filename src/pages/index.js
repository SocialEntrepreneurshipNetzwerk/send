import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';

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
    const frontmatter = data.markdownRemark.frontmatter;
    return (
        <section>
            {frontmatter.tagline.split("\n").map(item => (
                <h1>{item}</h1>
            ))}
            <p>{frontmatter.tagline_large}</p>
            <h4>{frontmatter.title}</h4>
            {frontmatter.content.blurbs.map((item)=><p>{item}</p>)}
            {frontmatter.boxes.blurbs.map((item)=><p>{item}</p>)}
        </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery ($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
  }
`;
