import React from 'react';
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import styles from './triangle-boxes.module.css';
import ReactMarkdown from 'react-markdown';
import Link from 'gatsby-link';

const TriangleBoxArticle = ( props ) => {

  return (

    <div className={styles.box_large_article}>
      <article className = {styles.box_large_article}>
        <div style={{ backgroundImage: `url(${props.box.image})` }} className={styles.box_large_article_image}>
          <Triangle/>
        </div>
        <div className={styles.articlePreviewContent}>
          <h1>{props.box.title}</h1>
          <h2>{props.box.date} | {props.box.category}</h2>
          <ReactMarkdown source={props.box.excerpt}/>
          <Link to={props.box.slug}><span>Mehr lesen</span></Link>
          <TriangleBottom/>
        </div>
      </article>
    </div> );
};

export default TriangleBoxArticle;
