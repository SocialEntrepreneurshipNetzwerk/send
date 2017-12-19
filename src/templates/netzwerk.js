import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/netzwerk.jpg';

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;
  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage} clip={frontmatter.clip}/>
      <section className="section section--gradient">
        <h1><span>{frontmatter.title}</span></h1>
      </section>
    </div>
  );
};

export const NetzwerkPageQuery = graphql`
  query NetzwerkPage($path: String!)  {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        clip
      }
    }
  }
`;
