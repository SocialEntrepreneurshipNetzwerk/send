import React from 'react';
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import styles from './triangle-boxes.module.css';
import ReactMarkdown from 'react-markdown';
import Link from 'gatsby-link';

const TriangleBoxLarge = ( props ) => {
  const box_styles = props.article ? styles.box_large_article : styles.box_large;
  return ( <div className={box_styles}>

    {props.article ?
      <article>
        <div style={{ backgroundImage: `url(${props.box.image})` }} className={styles.box_large_image}>
          <Triangle/>
        </div>
        <h1>{props.box.title}</h1>
        <h2>{props.box.date} | {props.box.category}</h2>
        {props.box.excerpt ? <ReactMarkdown source={props.box.excerpt}/> : <p>{props.excerpt}</p>}
        <Link to={props.slug}><span>Mehr lesen</span></Link>
      </article> :
      <div>
        <div style={{ backgroundImage: `url(${props.box.node.frontmatter.image})` }} className={styles.box_large_image}>
          <Triangle/>
        </div>
        <h1>{props.box.node.frontmatter.name}</h1>
        <p>{props.box.node.frontmatter.description}</p>
        <br/>
        <div>
          {props.box.node.frontmatter.email && <a href={`mailto:${props.box.node.frontmatter.email}`}>{props.box.node.frontmatter.email}</a>}
          {props.box.node.frontmatter.link && <a href={props.box.node.frontmatter.link} target="_blank">{props.box.node.frontmatter.link.replace( /(https?:\/\/)|\/?$/g, '' )} </a>}
        </div>
      </div>}
    <TriangleBottom/>
  </div> );

};

export default TriangleBoxLarge;
