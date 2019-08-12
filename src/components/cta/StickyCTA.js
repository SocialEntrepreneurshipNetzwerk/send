import React from 'react';
import styles from './cta.module.css';

const StickyCTA = () => (
  <a href="https://www.lehrevaluation.ovgu.de/index.php/survey/21/1/lang/1">
    <svg viewBox="0 0 267 104" version="1.1" xmlns="http://www.w3.org/2000/svg" className={styles.sticky_cta}>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Mitglied-werden--F-L-O-A-T-I-N-G">
          <path className={styles.sticky_cta_polygon} fill="#ff007b" d="m19.8 6.52 246-6.52v80.4l-186 23.6-80-17.8z"/>
        </g>
      </g>
      <switch>
        <foreignObject x="25" y="10" width="215" height="75">
          <div className={styles.sticky_cta_text_container}>
            <p className={styles.sticky_cta_text} xmlns="http://www.w3.org/2000/svg">DSEM 2019: Gib dem Sektor eine Stimme und mach mit!</p>
          </div>
        </foreignObject>
      </switch>
    </svg>
  </a>
);

export default StickyCTA;
