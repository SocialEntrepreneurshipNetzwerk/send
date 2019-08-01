import React from 'react';
import ClipProfile2 from '../svg/ClipProfile2';
import styles from './profile-box.module.css';

const ProfileBox3 = ( props ) => (
  <div className={styles.box2_wrapper}>
    <div className={styles.box2}>
      <p className={styles.clip_profile2} style={{ backgroundImage: `url(${props.content.image})` }}>
        <ClipProfile2/>
      </p>
      <p>{props.content.title}</p>
      <p><a className={styles.mail_profile3} href={"mailto:"+props.content.mail}>{props.content.mail}</a></p>
    </div>
  </div>
);

export default ProfileBox3;
