import React from 'react';
import TriangleBoxSmall from './TriangleBoxSmall';
import TriangleBoxLarge from './TriangleBoxLarge';
import styles from './triangle-boxes.module.css';

const TriangleBoxContainer = ( props ) => {
  return (
    <div className={styles.triangle_box_container}>
      {props.boxes.map(( box ) => {
        if ( props.size === 'small' ) {
          return <TriangleBoxSmall box={box} className={styles.box_small}/>;
        } else if ( props.size === 'large' ) {
          return <TriangleBoxLarge box={box} className={styles.box_small}/>;
        } else {
          null;
        }
      }
      )}
    </div> );
};


export default TriangleBoxContainer;
