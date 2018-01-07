import React from 'react';
import BackgroundFooter from '../svg/BackgroundFooter.js';
import SendLogoNegative from '../svg/SendLogoNegative.js';
import Facebook from '../svg/Facebook.js';
import FacebookHover from '../svg/FacebookHover.js';
import styles from './footer.module.css';
import Link from 'gatsby-link';


const Footer = () => (
	<div>
		<BackgroundFooter />
		<footer className={styles.footer}>
			<div className={styles.top}>				
				<div className={styles.links}>
					<SendLogoNegative className={styles.send_logo_negative} />
					<ul className={styles.socialNetworks}>
						<li><Link to="/positionen"><Facebook /></Link></li>	
						<li><Link to="/positionen"><Facebook /></Link></li>					
						<li><Link to="/positionen"><Facebook /></Link></li>																			
					</ul>
					<ul className={styles.linkList}>
						<li><Link to="/positionen">Presse</Link></li>	
						<li><Link to="/positionen">Kontakt</Link></li>		
						<li><Link to="/impressum">Impressum</Link></li>																															
					</ul>
					<ul className={styles.linkList}>
						<li><Link to="/positionen">Über Uns</Link></li>	
						<li><Link to="/positionen">Social Entrepreneurship</Link></li>
						<li><Link to="/positionen">Positionen</Link></li>	
						<li><Link to="/positionen">Netzwerk</Link></li>	
					</ul>
				</div>
			</div>
			<div className={styles.bottom}>
			</div>
		</footer>
	</div>
);

export default Footer;

