import React from 'react';
import styles from './cta.module.css';



const ButtonCTA = ( props ) => {
  const buttonStyle = props.color == 'active' ? styles.button_pink : styles.button_white;
  return (
    <a href={props.link} className={buttonStyle} target="_blank">
      {props.label}
    </a> );

};

export default ButtonCTA;
