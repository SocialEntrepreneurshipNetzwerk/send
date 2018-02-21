import React from 'react';
import CloseIcon from '../svg/CloseIcon';
import Link from 'gatsby-link';
import styles from './mobile-nav.module.css';



const MobileNav = () => (
  <div className={styles.overlay}>
    <CloseIcon/>
  </div>
);

export default MobileNav;
