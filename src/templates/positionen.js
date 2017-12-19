import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import topImage from '../img/positionen.jpg';

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div>
      <TopImage imageSource={topImage} clip={data.markdownRemark.frontmatter.clip}/>
      <section>
        <h1><span>{post.frontmatter.title}</span></h1>
      </section>
    </div>
  );
};

export const PositionenPageQuery = graphql`
  query PositionenPage($path: String!) {
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
