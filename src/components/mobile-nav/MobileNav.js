import React, { Component } from 'react';
import Facebook from '../svg/icons_logos/Facebook.js';
import Twitter from '../svg/icons_logos/Twitter.js';
import Youtube from '../svg/icons_logos/Youtube.js';
import Link from 'gatsby-link';
import styles from './mobile-nav.module.css';

class MobileNav extends Component {

  render() {
    return (
      <div className={this.props.style}>
        <ul className={styles.ul}>
          <li>
            <Link className={styles.bold} to="/positionen" onClick={this.props.mobileNavClose}>
                Social Entrepreneurship
            </Link>
          </li>
          <li>
            <Link className={styles.bold} to="/netzwerk" onClick={this.props.mobileNavClose}>
                Netzwerk
            </Link>
          </li>
          <li>
            <Link className={styles.bold} to="/ueber-uns" onClick={this.props.mobileNavClose}>
                Über uns
            </Link>
          </li>
          <li>
            <Link className={styles.bold} to="/mitgliedschaft" onClick={this.props.mobileNavClose}>
                Mitglied werden
            </Link>
          </li>
          <li>
            <Link className={styles.bold} to="/blog" onClick={this.props.mobileNavClose}>
                Blog
            </Link>
          </li>
          <li>
            <Link className={styles.bold} to="/partner" onClick={this.props.mobileNavClose}>
                Partner & Förderer
            </Link>
          </li>
          <li>
            <a href="http://eepurl.com/dAQ3i5">
              Newsletter
            </a>
          </li>
          <li>
            <Link to="/impressum" onClick={this.props.mobileNavClose} >
                Impressum
            </Link>
          </li>
          <li>
            <Link to="/dsgvo" onClick={this.props.mobileNavClose} >
                Datenschutzerklärung
            </Link>
          </li>
        </ul>

        <div className={styles.div}>
          <a href="https://www.facebook.com/SocEntNetDe/" target="_blank" className={styles.social}><Facebook /></a>
          <a href="https://twitter.com/send_ev" target="_blank" className={styles.social}><Twitter /></a>
          <a href="https://www.youtube.com/channel/UCnWi-MJEheSG_n48VlBCJoQ/videos" target="_blank" className={styles.social}><Youtube /></a>
        </div>
      </div>
    );
  }
}

export default MobileNav;
