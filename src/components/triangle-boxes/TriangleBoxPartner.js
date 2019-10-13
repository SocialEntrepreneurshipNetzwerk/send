import React from 'react';
// UI
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import ReactMarkdown from 'react-markdown';
// STYLES
import styles from './triangle-box-partner.module.css';

const TriangleBoxPartner = ( props ) => {

  const { image, title, description, homepage } = props.box;

  return (
    <article className = {styles.triangle_box_partner}>
      <span style={{ backgroundImage: `url(${image})` }} className={styles.partner_image}>
        <Triangle/>
      </span>
      <div className={styles.partner_preview_content}>
        <h1>{title}</h1>
        <ReactMarkdown source={description}/>
        <a href={homepage} >{homepage}</a>
        <TriangleBottom/>
      </div>
    </article>
  );
};

export default TriangleBoxPartner;
