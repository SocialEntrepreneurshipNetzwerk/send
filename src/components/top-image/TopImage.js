import React from 'react';
import styles from './top-image.module.css';



const TopImage = ( props ) => {
  const imageStyle = props.isHome ? styles.background_image_home : styles.background_image;
  return ( <div className={imageStyle} style={{ backgroundImage: `url(${props.imageSource})` }}></div> );
};

export default TopImage;
