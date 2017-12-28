import React from 'react';
import TriangleBoxSmall from './TriangleBoxSmall';
import TriangleBoxLarge from './TriangleBoxLarge';
import styles from './triangle-boxes.module.css';

const TriangleBoxContainer = ( props ) => {
  if ( props.article ) {
    const largeArticle = props.boxes[ 0 ].node.childMarkdownRemark.frontmatter;
    const autoExcerpt = props.boxes[ 0 ].node.childMarkdownRemark.excerpt;
    return (
      <div className={styles.triangle_box_container_article}>
        <TriangleBoxLarge box={largeArticle} excerpt={autoExcerpt} article={props.article}/>
        {props.boxes.slice( 1 ).map(( box ) => {
          return <TriangleBoxSmall box={box.node.childMarkdownRemark.frontmatter} article={props.article}/>;
        })}
      </div>
    );
  } else {
    return (
      <div className={styles.triangle_box_container}>
        {props.boxes.map(( box ) => {
          if ( props.size === 'small' ) {
            return <TriangleBoxSmall box={box}/>;
          } else if ( props.size === 'large' ) {
            return <TriangleBoxLarge box={box} />;
          } else {
            null;
          }
        }
        )}
      </div> );

  }

};


export default TriangleBoxContainer;
