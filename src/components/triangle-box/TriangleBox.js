import React from 'react';
import Triangle from '../svg/Triangle.js';
import ReactMarkdown from 'react-markdown';
import PositionenIcon from '../svg/PositionenIcon';
import styles from './triangle-box.module.css';

const TriangleBox = ( props ) => {
  return (
    <div className={styles.box}>
      {props.box.icon && <PositionenIcon {... props.box}/>}
      <p>
        <Triangle/>
        <ReactMarkdown source={props.box.description}/>
      </p>

    </div>

  );
};
export default TriangleBox;
