import React from 'react';
import Triangle from '../svg/Triangle.js';
import ReactMarkdown from 'react-markdown';
import styles from './triangle-box.module.css';

const TriangleBox = ( props ) => (
  <div className={styles.box}>
    <p>
      <Triangle/>
      <ReactMarkdown source={props.content}/>
    </p>

  </div>

);

export default TriangleBox;
