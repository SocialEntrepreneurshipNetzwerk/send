import React from 'react';
import { withPrefix } from 'gatsby-link';
import styles from './profile-box.module.css';

const ProfileBox = ( props ) => (
  <div className={styles.box}>
    <div className={styles.flex_wrapper}>
      <div className={styles.flex_top}>
        <img src={__PATH_PREFIX__ + props.content.image} alt={`Foto ${props.content.name}`} />
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
