import React from 'react';
import logo from '../../img/logo.svg';
import BackgroundHeader from '../svg/BackgroundHeader.js';
import Link from 'gatsby-link';
import styles from './top-nav.module.css';

const TopNav = () => (
  <div>
    <BackgroundHeader/>
    <nav className={styles.nav}>
      <Link to="/" className="navbar-item">
        <figure className={styles.figure}>
          <img src={logo} alt="Send" style={{ width: '153px' }} />
        </figure>
      </Link>
      <ul className={styles.ul}>
        <li>
          <Link className="navbar-item" to="/ueber-uns">
              Über uns
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/social-entrepreneurship">
              Social Entrepreneurship
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/positionen">
              Positionen
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/netzwerk">
              Netzwerk
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default TopNav;
