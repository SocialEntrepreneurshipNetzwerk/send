import React from 'react';
import ReactMarkdown from 'react-markdown';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import ButtonCTA from '../components/cta/ButtonCTA';
import styles from './membership.module.css';


export default ({ data }) => {

  const frontmatter = data.markdownRemark.frontmatter;
  const { title, clip, image, cta, section_1 } = frontmatter;
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
        <section>
          <h1><span>{section_1.title}</span></h1>
          <p>{section_1.paragraph}</p>
          <div className={styles.columns}>
            <div className={styles.column}>
              <p>{section_1.column_1.title}</p>
              <ReactMarkdown source={section_1.column_1.paragraph}/>
            </div>
            <div className={styles.column}>
              <p>{section_1.column_2.title}</p>
              <ReactMarkdown source={section_1.column_2.paragraph}/>
            </div>
          </div>
          {frontmatter.cta &&
            <ButtonCTA label={cta.label} link={cta.link} color={"active"} />
          }
        </section>
      </main>
    </div>
  );
};





export const simplesPageQuery = graphql`
  query simplesPage ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
            title
            clip
            image
            cta {
              label
              link
            }
            section_1 {
              title
              paragraph
              column_1 {
                title
                paragraph
              }
              column_2 {
                title
                paragraph
              }
            }
        }
        html
    }
}
`;
