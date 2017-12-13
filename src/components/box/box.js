import React from 'react';
import styles from './box.module.css';

const Box = ( props ) => (
  <div className={styles.box}>
    <p>{props.content}</p>
  </div>

);

export default Box;
