import React from 'react';
import Triangle from '../svg/Triangle.js';
import styles from './triangle-box.module.css';

const TriangleBox = ( props ) => (
  <div className={styles.box}>
    <p>
      <Triangle/>
      {props.content}
    </p>

  </div>

);

export default TriangleBox;
