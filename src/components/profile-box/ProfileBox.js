import React from 'react';
import styles from './profile-box.module.css';

const ProfileBox = ( props ) => (
  <div className={styles.box}>
    <div className={styles.flex_wrapper}>
      <div className={styles.flex_top}>
        <img src={props.content.image}></img>
        <p>{props.content.description}</p>
      </div>
      <div className={styles.flex_bottom}>
        <p>{props.content.name}</p>
        <p>{props.content.project}</p>
      </div>
    </div>
  </div>
);

export default ProfileBox;
