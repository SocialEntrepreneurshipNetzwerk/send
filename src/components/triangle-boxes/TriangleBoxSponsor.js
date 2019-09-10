import React from 'react';
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import styles from './triangle-box-sponsor.module.css';
import ReactMarkdown from 'react-markdown';
import Link from 'gatsby-link';

const TriangleBoxSponsor = ( props ) => {

  return (
    <article className = {styles.triangle_box_sponsor}>
      <span style={{ backgroundImage: `url(${props.box.image})` }} className={styles.sponsor_image}>
        <Triangle/>
      </span>
      <div className={styles.sponsor_preview_content}>
        <h1>{props.box.title}</h1>
        <a href={"mailto:"+props.box.mail}>Email: {props.box.mail}</a>
        <a href={props.box.homepage}>Homepage: {props.box.homepage}</a>
        <TriangleBottom/>
      </div>
    </article>
  );
};

export default TriangleBoxSponsor;
