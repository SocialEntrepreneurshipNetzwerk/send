import React from 'react';
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import styles from './triangle-boxes.module.css';
import ReactMarkdown from 'react-markdown';
import Link from 'gatsby-link';

const TriangleBoxArticle = ( props ) => {

  return (
    <article className = {styles.triangle_box_article}>
      <div style={{ backgroundImage: `url(${props.box.image})` }} className={styles.article_image}>
        <Triangle/>
      </div>
      <div className={styles.article_preview_content}>
        <h1>{props.box.title}</h1>
        <h2>{props.box.date} | {props.box.category}</h2>
        <ReactMarkdown source={props.box.excerpt}/>
        <Link to={props.box.slug}><span>Mehr lesen</span></Link>
        <TriangleBottom/>
      </div>
    </article>
  );
};

export default TriangleBoxArticle;
