import React from 'react';
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import styles from './triangle-boxes.module.css';
import ReactMarkdown from 'react-markdown';
import Link from 'gatsby-link';

const TriangleBoxLarge = ( props ) => {
  const box_styles = props.article ? styles.box_large_article : styles.box_large;
  return ( <div className={box_styles}>
    <div style={{ backgroundImage: `url(${props.box.image})` }} className={styles.box_large_image}>
      <Triangle/>
    </div>
    {props.article ?
      <article>
        <h1>{props.box.title}</h1>
        <h2>{props.box.date} | {props.box.category}</h2>
        {props.box.excerpt ? <p><ReactMarkdown source={props.box.excerpt}/></p> : <p>{props.excerpt}</p>}
        <Link to={props.box.path}><span>Mehr lesen</span></Link>
      </article> :
      <div>
        <h1>{props.box.name}</h1>
        <p>{props.box.description}</p>
        <br/>
        <a href={props.box.link}>{props.box.link}</a>
      </div>}
    <TriangleBottom/>
  </div> );

};

export default TriangleBoxLarge;
