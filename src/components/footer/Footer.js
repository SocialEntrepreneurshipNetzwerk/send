import React from 'react';
import BackgroundFooter from '../svg/BackgroundFooter.js';
import logo from '../../img/logo-negative.svg';
import ButtonCTA from '../cta/ButtonCTA.js'
import Facebook from '../svg/icons_logos/Facebook.js';
import Twitter from '../svg/icons_logos/Twitter.js';
import Youtube from '../svg/icons_logos/Youtube.js';
import BMW from '../svg/icons_logos/BMW.js';
import BVDS from '../svg/icons_logos/BVDS.js';
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
        <ButtonCTA color="aqua" label="Jetzt spenden" link="https://www.betterplace.org/de/projects/66103-das-social-entrepreneurship-netzwerk-deutschland-mit-uns-gemeinsam-wirken/donations/new?utm_campaign=donate_btn&utm_content=project%2366103&utm_medium=external_banner&utm_source=projects"/>
      </div>
      <div className={styles.mobile_view}>
        <ul className={styles.socialNetworks}>
          <li><a href="https://www.facebook.com/SocEntNetDe/" target="_blank"><Facebook /></a></li>
          <li><a href="https://twitter.com/send_ev" target="_blank"><Twitter /></a></li>
          <li><a href="https://www.youtube.com/channel/UCnWi-MJEheSG_n48VlBCJoQ/videos" target="_blank"><Youtube /></a></li>
        </ul>
        <ul className={styles.linkList}>
          <li><a href="https://send-ev.us16.list-manage.com/subscribe?u=0bd9d2e440fd70368ee268dc7&id=ba0ebebd3d">Newsletter</a></li>
          <li><Link to="/impressum">Impressum</Link></li>
          <li><Link to="/dsgvo">Datenschutzerklärung</Link></li>
        </ul>
      </div>
    </div>
    <section>
      <p>Kooperationspartner und Premiumförderer</p>
      <div>
        <a href="https://www.deutschestartups.org/" target="_blank"><BVDS/></a>
        <a href="http://bmw-foundation.org/" target="_blank"><BMW/></a>
      </div>
    </section>
  </footer>
);

export default Footer;
