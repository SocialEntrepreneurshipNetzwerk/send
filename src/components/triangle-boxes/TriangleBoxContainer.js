import React from 'react';
import TriangleBoxSmall from './TriangleBoxSmall';
import TriangleBoxLarge from './TriangleBoxLarge';
import styles from './triangle-boxes.module.css';

const TriangleBoxContainer = ( props ) => {
  return (
    <div className={styles.triangle_box_container}>
      {props.boxes.map(( box, index ) => {
        if ( props.size === 'small' ) {
          return <TriangleBoxSmall box={box} className={styles.box_small} key={index}/>;
        } else if ( props.size === 'large' ) {
          return <TriangleBoxLarge box={box} className={styles.box_small} key={index}/>;
        } else {
          null;
        }
      }
      )}
    </div> );
};


export default TriangleBoxContainer;
