import React from 'react';
import ClipProfile from '../svg/ClipProfile';
import styles from './profile-box.module.css';

const ProfileBox2 = ( props ) => (
  <div className={styles.box2}>
    <p className={styles.clip_profile} style={{ backgroundImage: `url(${props.content.image})` }}>
      <ClipProfile/>
    </p>
    <p>{props.content.name}</p>
    <p>{props.content.role}</p>
    <p>{props.content.organization}</p>
  </div>
);

export default ProfileBox2;
