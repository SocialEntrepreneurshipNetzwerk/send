import React from 'react';
import styles from './cta.module.css';



const ButtonCTA = ( props ) => {

  let buttonStyle;

  switch ( props.color ){
    case 'active':
      buttonStyle = styles.button_pink;
      break;
    case 'blue':
      buttonStyle = styles.button_blue;
      break;
    case 'aqua':
      buttonStyle = styles.button_aqua;
      break;
    default:
      buttonStyle = styles.button_white;
      break;
  }
  return (
    <a href={props.link} className={buttonStyle} target="_blank">
      {props.label}
    </a> );

};

export default ButtonCTA;
