import React from 'react';
import logo from '../../img/logo.svg';
import logo_mobile from '../../img/logo-mobile.svg';
import BackgroundHeader from '../svg/BackgroundHeader.js';
import Link from 'gatsby-link';
import styles from './top-nav.module.css';

const activeStyle = {
  color: 'white',
  backgroundColor: '#00027f'
};

const TopNav = () => (
  <div>
    <BackgroundHeader/>
    <nav className={styles.nav}>
      <Link to="/" className="navbar-item">
        <figure className={styles.figure_desktop}>
          <img src={logo} alt="Send" style={{ width: '240px' }} />
        </figure>
        <figure className={styles.figure_mobile}>
          <img src={logo_mobile} alt="Send" style={{ width: '140px' }} />
        </figure>
      </Link>
      <ul className={styles.ul}>
        {/*<li>
          <Link className="navbar-item" to="/ueber-uns">
              Über uns
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/social-entrepreneurship">
              Social Entrepreneurship
          </Link>
        </li>*/}
        <li>
          <Link className="navbar-item" to="/positionen" activeStyle={activeStyle} className={styles.label_mobile}>
              SocEntNet
          </Link>
          <Link className="navbar-item" to="/positionen" activeStyle={activeStyle} className={styles.label_desktop}>
              Social Entrepreneurship
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/netzwerk" activeStyle={activeStyle}>
              Netzwerk
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default TopNav;
