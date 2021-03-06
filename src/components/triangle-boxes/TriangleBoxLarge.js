import React from 'react';
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import styles from './triangle-boxes.module.css';
import ReactMarkdown from 'react-markdown';

const TriangleBoxLarge = ( props ) => {

  return (

    <div className={styles.box_large}>
      <div>
        <div style={{ backgroundImage: `url(${encodeURI(props.box.image)})` }} className={styles.box_large_image}>
          <Triangle/>
        </div>
        <h1>{props.box.title}</h1>
        <ReactMarkdown source={props.box.description} />

        <br/>
        <div>
          {props.box.email && <a href={`mailto:${props.box.email}`}>{props.box.email}</a>}
          {props.box.link && <a href={props.box.link} target="_blank">{props.box.link.replace( /(https?:\/\/)|\/?$/g, '' )} </a>}
        </div>
      </div>
      <TriangleBottom/>
    </div> );

};

export default TriangleBoxLarge;
