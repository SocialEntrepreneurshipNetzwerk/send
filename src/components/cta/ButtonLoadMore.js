import React from 'react';
import styles from './cta.module.css';



const ButtonLoadMore = ( props ) => {
  return (
    <a className={styles.button_pink} onClick={props.loadMore} >
      Mehr anzeigen
    </a> );

};

export default ButtonLoadMore;
