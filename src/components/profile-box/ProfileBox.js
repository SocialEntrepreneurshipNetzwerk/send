import React from 'react';
import { withPrefix } from 'gatsby-link';
import ClipProfile from '../svg/ClipProfile';
import styles from './profile-box.module.css';

const ProfileBox = ( props ) => (
  <div className={styles.box}>
    <div className={styles.flex_wrapper}>
      <div className={styles.flex_top}>
        <span className={styles.clip_profile} style={{ backgroundImage: `url(${encodeURI(props.content.image)})` }}>
          <ClipProfile/>
        </span>
        <p>{props.content.description}</p>
      </div>
      <div className={styles.flex_bottom}>
        <p>{props.content.name}</p>
        <p>{props.content.project}</p>
        <a href={`mailto:${props.content.email}`}>{props.content.email}</a>
      </div>
    </div>
  </div>
);

export default ProfileBox;
