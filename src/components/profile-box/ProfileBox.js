import React from 'react';
import styles from './profile-box.module.css';

const ProfileBox = ( props ) => (
  <div className={styles.box}>
    <p>{props.content.description}</p>
    <p>{props.content.name}</p>
    <p>{props.content.project}</p>
  </div>

);

export default ProfileBox;
