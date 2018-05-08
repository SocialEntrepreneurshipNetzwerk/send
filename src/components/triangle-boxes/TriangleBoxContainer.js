import React from 'react';
import TriangleBoxSmall from './TriangleBoxSmall';
import TriangleBoxLarge from './TriangleBoxLarge';
import styles from './triangle-boxes.module.css';

const TriangleBoxContainer = ( props ) => {
  if ( props.article ) { // articles

    return (
      <div className={styles.triangle_box_container_article}>

        {props.boxes.map(( box, index ) => {
          return <TriangleBoxLarge box={box} article={props.article} key={index} />;
        }
        )}
      </div>
    );
  } else { // members

    return (
      <div className={styles.triangle_box_container}>
        {props.boxes.map(( box, index ) => {
          if ( props.size === 'small' ) {
            return <TriangleBoxSmall box={box} key={index}/>;
          } else if ( props.size === 'large' ) {
            return <TriangleBoxLarge box={box} key={index} />;
          } else {
            null;
          }
        }
        )}
      </div> );

  }

};


export default TriangleBoxContainer;
