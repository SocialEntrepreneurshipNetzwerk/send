import React from 'react';
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import styles from './triangle-box-large.module.css';

const TriangleBoxLarge = ( props ) => {
  console.log( props.box );
  return ( <div className={styles.box}>
    <div style={{ backgroundImage: `url(${props.box.image})` }} className={styles.box_image}>
      <Triangle/>
    </div>
    <h1>{props.box.name}</h1>
    <p>{props.box.description}</p>
    <a href={props.box.link}>{props.box.link}</a>
    <TriangleBottom/>
  </div> );

};

export default TriangleBoxLarge;
