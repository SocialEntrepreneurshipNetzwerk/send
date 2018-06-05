import React from 'react';
import styles from './cta.module.css';



const Button = ( props ) => {
  const buttonStyle = props.color == 'active' ? styles.button_pink : styles.button_blue;
  return (
    <a className={buttonStyle} onClick={props.loadMore} >
      {props.label}
    </a> );

};

export default Button;
