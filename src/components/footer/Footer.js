import React from 'react';
import BackgroundFooter from '../svg/BackgroundFooter.js';
import logo from '../../img/logo-negative.svg';
import Facebook from '../svg/Facebook.js';
import styles from './footer.module.css';
import Link from 'gatsby-link';


const Footer = () => (
  <footer className={styles.footer}>
    <BackgroundFooter />
    <div>
      <figure className={styles.figure_desktop}>
        <img src={logo} alt="Send" />
      </figure>
      <ul className={styles.socialNetworks}>
        <li><Link to="/positionen"><Facebook /></Link></li>
        <li><Link to="/positionen"><Facebook /></Link></li>
        <li><Link to="/positionen"><Facebook /></Link></li>
      </ul>
      <ul className={styles.linkList}>
        <li><Link to="/positionen">Social Entrepreneurship</Link></li>
        <li><Link to="/positionen">Netzwerk</Link></li>
        <li><Link to="/impressum">Impressum</Link></li>
      </ul>
    </div>

  </footer>
);

export default Footer;
