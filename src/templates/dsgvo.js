import React from 'react';
import PageHelmet from '../components/PageHelmet';
import styles from './dsgvo.module.css';



export default ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const content = data.markdownRemark.html;

  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <main className={styles.main} >
        <h1>{ frontmatter.title }</h1>
        <section>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </section>
      </main>
    </div>
  );
};




export const dsgvoPageQuery = graphql`
  query dsgvoPage {
    markdownRemark(fields: { slug: { eq: "/dsgvo" } }) {
        frontmatter {
	          title
        }
        html
    }
	}
`;
