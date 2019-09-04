import React from 'react';
import PageHelmet from '../components/PageHelmet';
import ButtonCTA from '../components/cta/ButtonCTA';
import ReactMarkdown from 'react-markdown';
import styles from './downloads.module.css';

export default ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const { title, downloadMaterial } = frontmatter;
  const content = data.markdownRemark.html;
  console.log(downloadMaterial);
  return (
	  <div>
	  	<PageHelmet frontmatter={frontmatter}/>
	  	<main className={styles.main}>
	  		<h1>{title}</h1>
              {downloadMaterial.map((item, index) => {
                  return(
                      <div key={index}>
                          <p>{item.downloadText}</p>
                          <ButtonCTA color="active" label={item.buttonText} link={item.file} />
                      </div>
                  )
              })}
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
          downloadText
          buttonText
          file
        }
      }
    }
  }
`;
