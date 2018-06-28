import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import styles from './article.module.css';



export default ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const { clip, title, image, date, category } = frontmatter;
  const content = data.markdownRemark.html;
  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={image} clip={clip}/>
      <main className={styles.main}>
        <section>
          <article className={styles.article}>
            <h1>{title}</h1>
            <h3>{date} | {category}</h3>
            <div className={styles.flexContent} dangerouslySetInnerHTML={{ __html: content }}>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export const ArticlePageQuery = graphql`
  query ArticlePage ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug  } }) {
        frontmatter {
            clip
            title
            image
            date (formatString: "DD.MM.YYYY")
            category
        }
        html
    }
}
`;
