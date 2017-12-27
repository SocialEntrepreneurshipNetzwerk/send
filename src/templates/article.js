import React from 'react';
import TopImage from '../components/top-image/TopImage.js';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/placeholder-article.jpg';
import ReactMarkdown from 'react-markdown';
import styles from './article.module.css';



export default ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const { clip, title, date, category } = frontmatter;
  const content = data.markdownRemark.html;
  console.log( data.markdownRemark.html );
  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <TopImage imageSource={topImage} clip={clip}/>
      <main className={styles.main}>
        <section>
          <article className={styles.article}>
            <h1>{title}</h1>
            <h2>{date} | {category}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }}>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export const ArticlPageQuery = graphql`
  query ArticePage {
    markdownRemark(frontmatter: { path: { eq: "/placeholder-article" } }) {
        frontmatter {
            clip
            title
            date
            category
        }
        html
    }
}
`;
