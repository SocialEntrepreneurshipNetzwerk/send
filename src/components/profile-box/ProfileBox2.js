import React from 'react';
import ClipProfile2 from '../svg/ClipProfile2';
import styles from './profile-box.module.css';

const ProfileBox2 = ( props ) => (
  <div className={styles.box2_wrapper}>
    <div className={styles.box2}>
      <p className={styles.clip_profile2} style={{ backgroundImage: `url(${props.content.image})` }}>
        <ClipProfile2/>
      </p>
      {props.content.name &&
        <p>{props.content.name}</p>
      }
      {props.content.title &&
        <p>{props.content.title}</p>
      }
      {props.content.role &&
        <p>{props.content.role}</p>
      }
      {props.content.organization &&
        <p>{props.content.organization}</p>
      }
      {props.content.mail && 
        <p><a className={styles.mail_profile2} href={"mailto:"+props.content.mail}>{props.content.mail}</a></p>
      }
    </div>
  </div>
);

export default ProfileBox2;
