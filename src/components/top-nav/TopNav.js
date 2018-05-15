import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import logo_mobile from '../../img/logo-mobile.svg';
import BackgroundHeader from '../svg/BackgroundHeader.js';
import MobileNav from '../mobile-nav/MobileNav';
import CloseIcon from '../svg/CloseIcon';
import Link from 'gatsby-link';
import styles from './top-nav.module.css';

const activeStyle = {
  color: 'white',
  backgroundColor: '#00027f'
};

class TopNav extends Component {
  state = {
    mobileNavOpen: false,
    overlayStyle: styles.overlay,
    openIconStyle: styles.iconOpen,
    closeIconStyle: styles.iconHidden
  }
  
  mobileNavClose = (e) => {
    this.setState({
      mobileNavOpen: false,
      overlayStyle: styles.overlay,
      openIconStyle: styles.iconOpen,
      closeIconStyle: styles.iconHidden
    })
  }
  
  mobileNavToggle = (e) => {
    if (this.state.mobileNavOpen){
      this.mobileNavClose();
    } else {
      this.setState({
        mobileNavOpen: true,
        overlayStyle: styles.overlayOpen,
        openIconStyle: styles.iconHidden,
        closeIconStyle: styles.iconClose
      })
    }
  }
  
  render () {
    return (
      <div>
        <BackgroundHeader/>
        <MobileNav isOpen={this.state.mobileNavOpen} mobileNavClose={this.mobileNavClose} style={this.state.overlayStyle}/>
        <nav className={styles.nav}>
          <Link to="/" className="navbar-item">
            <figure className={styles.figure_desktop}>
              <img src={logo} alt="Send" style={{ width: '240px' }} onClick={this.mobileNavClose}/>
            </figure>
            <figure className={styles.figure_mobile}>
              <img src={logo_mobile} alt="Send" style={{ width: '140px' }} onClick={this.mobileNavClose}/>
            </figure>
          </Link>
          <ul className={styles.ul}>
            <li>
              <Link to="/positionen" activeStyle={activeStyle}>
                  Social Entrepreneurship
              </Link>
            </li>
            <li>
              <Link to="/netzwerk" activeStyle={activeStyle}>
                  Netzwerk
              </Link>
            </li> 
            <li>
              <Link to="/blog" activeStyle={activeStyle}>
                  Blog
              </Link>
            </li>           
          </ul>
          <div className={styles.toggle} onClick={this.mobileNavToggle}>
            <div className={this.state.openIconStyle}>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <div className={this.state.closeIconStyle}>
            <CloseIcon/>
            </div>
          </div>    
        </nav>
      </div>
    )
  }
    
}

export default TopNav;
