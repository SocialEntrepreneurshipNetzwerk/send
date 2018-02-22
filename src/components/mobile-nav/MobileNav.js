import React, { Component } from 'react';
import CloseIcon from '../svg/CloseIcon';
import Link from 'gatsby-link';
import styles from './mobile-nav.module.css';



class MobileNav extends Component {

  render() {
    return (
      <div className={this.props.style}>
        <CloseIcon toggle={this.props.toggle}/>
      </div>
    );
  }
}

export default MobileNav;
