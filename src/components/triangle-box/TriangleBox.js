import React from 'react';
import styles from './triangle-box.module.css';

const TriangleBox = ( props ) => (
  <div className={styles.box}>
    <p>{props.content}</p>
  </div>

);

export default TriangleBox;
