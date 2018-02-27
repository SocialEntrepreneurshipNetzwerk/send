import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import logo_mobile from '../../img/logo-mobile.svg';
import BackgroundHeader from '../svg/BackgroundHeader.js';
import MobileNav from '../mobile-nav/MobileNav';
import Link from 'gatsby-link';
import styles from './top-nav.module.css';

const activeStyle = {
  color: 'white',
  backgroundColor: '#00027f'
};

class TopNav extends Component {
  state = {
    mobileNavOpen: false,
    overlayStyle: styles.overlay
  }
  
  mobileNavToggle = (e) => {
    if (this.state.mobileNavOpen){
      this.setState({
        mobileNavOpen: false,
        overlayStyle: styles.overlay
      })
      console.log( "now closed")
    } else {
      this.setState({
        mobileNavOpen: true,
        overlayStyle: styles.overlayOpen
      })
      console.log( "now open")
    }
  }
  
  render () {
    return (
      <div>
        <BackgroundHeader/>
        <MobileNav isOpen={this.state.mobileNavOpen} toggle={this.mobileNavToggle} style={this.state.overlayStyle}/>
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
              <Link className="navbar-item" to="/positionen" activeStyle={activeStyle}>
                  Social Entrepreneurship
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/netzwerk" activeStyle={activeStyle}>
                  Netzwerk
              </Link>
            </li>
          </ul>
          <div className={styles.hamburger} onClick={this.mobileNavToggle}>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </nav>
      </div>
    )
  }
    
}

export default TopNav;
