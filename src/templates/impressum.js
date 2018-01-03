import React from 'react';
import PageHelmet from '../components/PageHelmet';
import ButtonCTA from '../components/cta/ButtonCTA';
import ReactMarkdown from 'react-markdown';
import styles from './impressum.module.css';

export default ({data}) => {
	const frontmatter = data.markdownRemark.frontmatter;
	const { title, address, email, section_1, section_2, section_3, section_4 } = frontmatter;
	const content = data.markdownRemark.html;
	return (
	  <div>
	  	<main className={styles.main}>
	  		<PageHelmet frontmatter={frontmatter}/>
	  		<h1>{title}</h1>
	  		<p>{address}</p>
	  		<p>{email}</p>
	  		<section>
	  			<h2>{section_1.title}</h2>
	  			<p>{section_1.content}</p>
	  			<ButtonCTA color="active" label={section_1.cta.label} link={section_1.cta.link} className={styles.button}/>
	  		</section>
	  		<section>
	  			<h2>{section_2.title}</h2>
	  			<p>{section_2.content}</p>
	  		</section>
	  		<section>
	  			<h2>{section_3.title}</h2>
	  			<p>{section_3.content}</p>
	  		</section>
	  		<section>
	  			<h2>{section_4.title}</h2>
	  			<div dangerouslySetInnerHTML={{ __html: content }}>
          </div>
	  		</section>
	  	</main>
		</div> 
  );
 };

export const ImpressumPageQuery = graphql`
  query ImpressumPage {
    markdownRemark(frontmatter: { path: { eq: "/impressum" } }) {
        frontmatter {            
	          title
	          address
	          email
	          section_1 {
	            title
	            content
	            cta {
	            	label
	            	link
	            }
	          }
	       		section_2 {
	            title
	            content                           
	          }
	          section_3 {
	            title
	            content                           
	          }
	          section_4 {
	            title                                        
	          }
          
        }
        html
    }
	}
`;