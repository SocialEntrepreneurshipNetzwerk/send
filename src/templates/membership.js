import React from 'react';
import ReactMarkdown from 'react-markdown';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import ButtonCTA from '../components/cta/ButtonCTA';
import styles from './membership.module.css';
import StickyCTA from '../components/cta/StickyCTA';


export default ({ data }) => {

  const frontmatter = data.markdownRemark.frontmatter;
  const { cta_sticky, title, clip, image, cta_link, cta_download, section_1 } = frontmatter;
  const content = data.markdownRemark.html;

  return (
    <div>

      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={image} clip={clip}/>
      {cta_sticky.showOnPage &&
        <StickyCTA data={cta_sticky}/>        
      }
      <main>
        <section className={styles.content}>
          <h1><span>{title}</span></h1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>

          {frontmatter.cta_link &&
            <ButtonCTA label={cta_link.label} link={cta_link.link} color={"active"} />
          }
          {frontmatter.cta_download &&
            <ButtonCTA label={cta_download.label} link={cta_download.link} color={"blue"} />
          }
        </section>
        <section>
          <h1><span>{section_1.title}</span></h1>
          <p>{section_1.paragraph}</p>
          <div className={styles.columns}>
            <div className={styles.column}>
              <ReactMarkdown source={section_1.column_1.title} escapeHtml={false} />
              <ReactMarkdown source={section_1.column_1.paragraph}/>
            </div>
            <div className={styles.column}>
              <ReactMarkdown source={section_1.column_2.title} escapeHtml={false} />
              <ReactMarkdown source={section_1.column_2.paragraph}/>
            </div>
          </div>
          {frontmatter.cta_link &&
            <ButtonCTA label={cta_link.label} link={cta_link.link} color={"active"} />
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
            cta_link {
              label
              link
            }
            cta_download {
              label
              link
            }
            cta_sticky {
              text
              link
              hexColor
              showOnPage
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
