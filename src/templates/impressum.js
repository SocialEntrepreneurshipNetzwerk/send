import React from 'react';
import PageHelmet from '../components/PageHelmet';
import styles from './impressum.module.css';



export default ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const { title, section_1 } = frontmatter;
  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <main>
        <section>
          <h2><span>{section_1.title}</span></h2>
          <p className={styles.paragraph}>{section_1.paragrap}</p>
        </section>
      </main>
    </div>
  );
};

export const ImpressumPageQuery = graphql`
  query ImpressumPage ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path  } }) {
        frontmatter {  
            title          
            section_1 {
              title
              paragrap             
            }

        }
        
    }
}
`;

