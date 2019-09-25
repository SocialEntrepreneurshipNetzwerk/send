import React from 'react';
// UI
import ReactMarkdown from 'react-markdown';
import PageHelmet from '../components/PageHelmet';
import ButtonCTA from '../components/cta/ButtonCTA';
// STYLES
import styles from './downloads.module.css';

export default ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const { title, downloadMaterial } = frontmatter;

  return (
    <div>
      <PageHelmet frontmatter={frontmatter}/>
      <main className={styles.main}>
        <h1>{title}</h1>
        {
          downloadMaterial.map(( item, index ) => {
            return (
              <div key={index}>
                <h3>{item.downloadHeadline}</h3>
                <ReactMarkdown source={item.downloadText}/>
                <ButtonCTA color="active" label={item.buttonText} link={item.file}/>
              </div>
            );
          })
        }
      </main>
    </div>
  );
};

export const DownloadsPageQuery = graphql`
query DownloadsPage {
    markdownRemark(fields: {slug: {eq: "/downloads"}}) {
      frontmatter {
        title
        downloadMaterial {
          downloadHeadline
          downloadText
          buttonText
          file
        }
      }
    }
  }
`;
