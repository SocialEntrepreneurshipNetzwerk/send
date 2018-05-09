import React from 'react';
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import styles from './triangle-boxes.module.css';
import ReactMarkdown from 'react-markdown';
import Link from 'gatsby-link';

const TriangleBoxArticle = ( props ) => {

  return (
    <article className = {styles.triangle_box_article}>
      <Link to={props.box.slug} style={{ backgroundImage: `url(${props.box.image})` }} className={styles.article_image}>
        <Triangle/>
      </Link>
      <div className={styles.article_preview_content}>
        <Link to={props.box.slug}>
          <h1>{props.box.title}</h1>
        </Link>
        <h2>{props.box.date} | {props.box.category}</h2>
        <ReactMarkdown source={props.box.excerpt}/>
        <Link to={props.box.slug}><span>Mehr lesen</span></Link>
        <TriangleBottom/>
      </div>
    </article>
  );
};

export default TriangleBoxArticle;
