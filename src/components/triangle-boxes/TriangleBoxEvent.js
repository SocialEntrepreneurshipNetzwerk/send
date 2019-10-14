import React from 'react';
import Triangle from '../svg/Triangle.js';
import TriangleBottom from '../svg/TriangleBottom.js';
import styles from './triangle-boxes.module.css';

const TriangleBoxEvent = ( props ) => {

  return (

    <div className={styles.box_large}>
      <div>
        <div style={{ backgroundImage: `url(${props.box.image})` }} className={styles.box_large_image}>
          <Triangle/>
        </div>
        <h1>{props.box.title}</h1>
        <p>{props.box.description}</p>
        <br/>
        <div>
          {props.box.link && <a href={props.box.link} target="_blank">Sign up for the Event here!</a>}
        </div>
      </div>
      <TriangleBottom/>
    </div> );

};

export default TriangleBoxEvent;
