import React from 'react';
import PageHelmet from '../components/PageHelmet';
import ButtonCTA from '../components/cta/ButtonCTA';
import ReactMarkdown from 'react-markdown';
import styles from './impressum.module.css';

export default ({data}) => {
	const frontmatter = data.markdownRemark.frontmatter;
	const { section_1, section_2, section_3, section_4 } = frontmatter;
	return (
	  <div>
	  	{section_3}
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