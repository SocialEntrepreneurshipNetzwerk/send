import React from 'react';
import ClipPositionen from '../svg/ClipPositionen';
import ClipNetzwerk from '../svg/ClipNetzwerk';
import ClipArticle from '../svg/ClipArticle';
import styles from './top-image.module.css';



const TopImage = ( props ) => {
  const imageStyle = props.isHome ? styles.background_image_home : styles.background_image;
  return (
    <div className={imageStyle} style={{
      backgroundImage: `url(${props.imageSource})`,
      clipPath: `url(#${props.clip})`
    }}>
      <ClipPositionen/>
      <ClipNetzwerk/>
      <ClipArticle/>
    </div> );
};

export default TopImage;
