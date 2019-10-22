import React from 'react';
import BackgroundFooter from '../svg/BackgroundFooter.js';
import logo from '../../img/logo-negative.svg';
import ButtonCTA from '../cta/ButtonCTA.js';
import Facebook from '../svg/icons_logos/Facebook.js';
import Twitter from '../svg/icons_logos/Twitter.js';
import Youtube from '../svg/icons_logos/Youtube.js';
import BMW from '../svg/icons_logos/BMW.js';
import BVDS from '../svg/icons_logos/BVDS.js';
import KFW from '../svg/icons_logos/KFW.js';
import Schoepflin from '../svg/icons_logos/Schoepflin.js';
import styles from './footer.module.css';
import Link from 'gatsby-link';


const Footer = () => (
  <footer className={styles.footer}>
    <BackgroundFooter />
    <div>
      <div className={styles.mobile_view}>
        <figure className={styles.figure_desktop}>
          <img src={logo} alt="Send" />
        </figure>
        <ButtonCTA color="aqua" label="Newsletter" link="http://eepurl.com/dAQ3i5"/>
      </div>
      <div className={styles.mobile_view}>
        <ul className={styles.socialNetworks}>
          <li><a href="https://www.facebook.com/SocEntNetDe/" target="_blank"><Facebook /></a></li>
          <li><a href="https://twitter.com/send_ev" target="_blank"><Twitter /></a></li>
          <li><a href="https://www.youtube.com/channel/UCnWi-MJEheSG_n48VlBCJoQ/videos" target="_blank"><Youtube /></a></li>
        </ul>
        <ul className={styles.linkList}>
          <li><Link to="/impressum">Kontakt & Impressum</Link></li>
          <li><Link to="/dsgvo">Datenschutzerklärung</Link></li>
        </ul>
      </div>
    </div>
    <section>
      <p>Kooperationspartner und Premiumförderer</p>
      <div className={styles.partnerLogos}>
        <div >
          <a href="https://www.deutschestartups.org/" target="_blank"><BVDS/></a>
          <a href="http://bmw-foundation.org/" target="_blank"><BMW/></a>
        </div>
        <div>
          <a href="https://www.kfw-stiftung.de" target="_blank"><KFW/></a>
          <a href="https://www.kfw-stiftung.de" target="_blank"><Schoepflin/></a>
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
