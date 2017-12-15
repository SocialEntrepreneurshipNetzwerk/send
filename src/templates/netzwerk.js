import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import topImage from '../img/netzwerk.jpg';

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div>
      <TopImage imageSource={topImage}/>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{post.frontmatter.title}</h2>
                <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
          </div>
        </div>
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
      }
    }
  }
`;
