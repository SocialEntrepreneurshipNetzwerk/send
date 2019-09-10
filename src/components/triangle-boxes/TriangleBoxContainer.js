import React from 'react';
import TriangleBoxSmall from './TriangleBoxSmall';
import TriangleBoxLarge from './TriangleBoxLarge';
import TriangleBoxArticle from './TriangleBoxArticle';
import TriangleBoxPartner from './TriangleBoxPartner';
import TriangleBoxSponsor from './TriangleBoxSponsor';
import styles from './triangle-boxes.module.css';

const TriangleBoxContainer = ( props ) => {

  const boxes = props.article ? (
    props.boxes.map(( box, index ) => {
      return <TriangleBoxArticle box={box} article={props.article} blogpreview={props.blogpreview} key={index} />;
    })
  ) : (
    props.partner ? (
      props.boxes.map(( box, index ) => {
        return <TriangleBoxPartner box={box} partner={props.partner} key={index} />;
      })
    ) : (
      props.sponsor ? (
        props.boxes.map(( box, index ) => {
          return <TriangleBoxSponsor box={box} sponsor={props.sponsor} key={index} />;
        })
      ) : (
        props.boxes.map(( box, index ) => {
          if ( props.size === 'small' ) {
            return <TriangleBoxSmall box={box} key={index}/>;
          } else if ( props.size === 'large' ) {
            return <TriangleBoxLarge box={box} key={index} />;
          } else {
            null;
          }
        })
      )
    )
  );


  return (
    <div className={styles.triangle_box_container}>
      {boxes}
    </div>
  );


};


export default TriangleBoxContainer;
