import React from 'react';
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import styles from './triangle-box-partner.module.css';
import ReactMarkdown from 'react-markdown';
import Link from 'gatsby-link';

const TriangleBoxPartner = ( props ) => {

  return (
    <article className = {styles.triangle_box_partner}>
      <span style={{ backgroundImage: `url(${props.box.image})` }} className={styles.partner_image}>
        <Triangle/>
      </span>
      <div className={styles.partner_preview_content}>
        <h1>{props.box.title}</h1>
        <ReactMarkdown source={props.box.description}/>
        <TriangleBottom/>
      </div>
    </article>
  );
};

export default TriangleBoxPartner;
