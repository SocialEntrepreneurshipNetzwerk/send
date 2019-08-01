import React from 'react';
import styles from './cta.module.css';

const StickyCTA = () => (
  <a href="https://docs.google.com/forms/d/1SK6RcT-AMB_sZgGIkqQY8EOhIz_bnMuVSuJ7zCmd4Mg/viewform?edit_requested=true">
    <svg viewBox="0 0 267 104" version="1.1" xmlns="http://www.w3.org/2000/svg" className={styles.sticky_cta}>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Mitglied-werden--F-L-O-A-T-I-N-G">
          <path className={styles.sticky_cta_polygon} fill="#ff07b" d="m19.8 6.52 246-6.52v80.4l-186 23.6-80-17.8z"/>
        </g>
      </g>
      <switch>
        <foreignObject x="50" y="20" width="200" height="60">
          <p className={styles.sticky_cta_text} xmlns="http://www.w3.org/2000/svg">Jetzt Mitglied werden!</p>
        </foreignObject>
      </switch>
    </svg>
  </a>
);

export default StickyCTA;
