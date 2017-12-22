import React from 'react';
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import styles from './triangle-boxes.module.css';

const TriangleBoxLarge = ( props ) => {
  return ( <div className={styles.box_large}>
    <div style={{ backgroundImage: `url(${props.box.image})` }} className={styles.box_large_image}>
      <Triangle/>
    </div>
    <h1>{props.box.name}</h1>
    <p>{props.box.description}</p>
    <br/>
    <a href={props.box.link}>{props.box.link}</a>
    <TriangleBottom/>
  </div> );

};

export default TriangleBoxLarge;
