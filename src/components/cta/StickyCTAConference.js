import React from 'react';
import styles from './cta.module.css';

const StickyCTA = () => (
  <a href="/konferenz">
    <svg viewBox="0 0 292.07 104" version="1.1" xmlns="http://www.w3.org/2000/svg" className={styles.sticky_cta_conf}>
      <path class="cls-1" fill="#05ffa9" d="M22,6.52,292.07,0V80.4L87.84,104,0,86.2Z"/><text class="cls-2" transform="translate(41.43 48.41)">SEND KONFERENZ<tspan x="0" y="24.11">SEI DABEI!</tspan></text>
    </svg>
  </a>
);

export default StickyCTA;
