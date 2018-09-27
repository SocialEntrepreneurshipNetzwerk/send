import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import ButtonCTA from '../components/cta/ButtonCTA';
import styles from './simplePage.module.css';


export default ({ data }) => {

  const frontmatter = data.markdownRemark.frontmatter;
  const { title, clip, image, cta } = frontmatter;
  const content = data.markdownRemark.html;

  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={image} clip={clip}/>
      <main>
        <section className={styles.content}>
          <h1><span>{title}</span></h1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>

          {frontmatter.cta &&
            <ButtonCTA label={cta.label} link={cta.link} color={"active"} />
          }
        </section>
      </main>
    </div>
  );
};





export const simplePageQuery = graphql`
  query simplePage ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
            title
            clip
            image
            cta {
              label
              link
            }
        }
        html
    }
}
`;
