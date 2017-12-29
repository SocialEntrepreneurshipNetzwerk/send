import React from 'react';
import styles from './cta.module.css';

const StickyCTA = () => (
  <a href="https://wikipedia.de">
    <svg viewBox="0 0 267 104" version="1.1" xmlns="http://www.w3.org/2000/svg" className={styles.sticky_cta}>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Mitglied-werden--F-L-O-A-T-I-N-G">
          <polygon id="Triangle-2" fill="#FF007B" points="19.8022532 6.51555868 266.168704 0 266.168704 80.4039192 79.6272301 104 0 86.2091724"></polygon>
          <text id="JETZT-MITGLIED-WERDE" fontFamily="Karla-Bold, Karla" fontSize="20" fontWeight="bold" letterSpacing="2" fill="#FDFCF4">
            <tspan x="38" y="48">JETZT MITGLIED</tspan>
            <tspan x="38" y="71">WERDEN</tspan>
            <tspan x="133.7" y="71">!</tspan>
          </text>
        </g>
      </g>
    </svg>
  </a>
);

export default StickyCTA;
