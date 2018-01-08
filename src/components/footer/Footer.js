import React from 'react';
import BackgroundFooter from '../svg/BackgroundFooter.js';
import logo from '../../img/logo-negative.svg';
import Facebook from '../svg/icons_logos/Facebook.js';
import Twitter from '../svg/icons_logos/Twitter.js';
import Youtube from '../svg/icons_logos/Youtube.js';
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
        <li><a href="https://www.facebook.com/SocEntNetDe/" target="_blank"><Facebook /></a></li>
        <li><a href="https://twitter.com/send_ev" target="_blank"><Twitter /></a></li>
        <li><a href="https://www.youtube.com/channel/UCnWi-MJEheSG_n48VlBCJoQ/videos" target="_blank"><Youtube /></a></li>
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
