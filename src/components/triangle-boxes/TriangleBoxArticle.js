import React from 'react';
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import styles from './triangle-box-article.module.css';
import ReactMarkdown from 'react-markdown';
import Link from 'gatsby-link';
import classNames from 'classnames';

const TriangleBoxArticle = ( props ) => {

  return (
    <article className = {classNames({[styles.triangle_box_article]: !props.blogpreview, [styles.triangle_box_article_blogpreview]: props.blogpreview})}>
      <Link to={props.box.slug} style={{ backgroundImage: `url(${props.box.image})` }} className={classNames({[styles.article_image]: !props.blogpreview, [styles.article_image_blogpreview]: props.blogpreview})}>
        <Triangle/>
      </Link>
      <div className={classNames({[styles.article_preview_content]: !props.blogpreview, [styles.article_preview_content_blogpreview]: props.blogpreview})}>
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
