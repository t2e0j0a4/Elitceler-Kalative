import React from 'react'
import styles from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";
import { Link } from 'react-router-dom';

const Footer = () => {

  const { app__footer, footer__center, footer__side1, side1__detail, side1__links, footer__side, copyright__sec } = styles;

  return (
    <footer className={app__footer}>
      <div className={footer__center}>

        {/* Side 1 */}

        <div className={footer__side1}>
          <div className={side1__detail}>
            <img src={Logo} alt="Kalative" />
            <p>We believe in achieving our customers' dreams and showing them that their dreams have become a reality. If you have one such, then we are the right place for you.</p>
          </div>
          <div className={side1__links}>
            <a href="/" target='_blank' rel='noopener'><ion-icon name='logo-instagram'></ion-icon></a>
            <a href="/" target='_blank' rel='noopener'><ion-icon name='logo-discord'></ion-icon></a>
          </div>
        </div>

        {/* Side 1 */}

        {/* Side 2 */}

        <div className={footer__side}>
          <p>Company</p>
          <ul>
            <li><Link to={'/'}>About Us</Link></li>
            <li><Link to={'/'}>Partners</Link></li>
            <li><Link to={'/'}>Products</Link></li>
            <li><Link to={'/'}>Resources</Link></li>
          </ul>
        </div>

        {/* Side 2 */}

        {/* Side 3 */}
        
        <div className={footer__side}>
          <p>Support</p>
          <ul>
            <li><Link to={'/'}>Help</Link></li>
            <li><Link to={'/'}>Privacy Policy</Link></li>
            <li><Link to={'/'}>Terms</Link></li>
            <li><Link to={'/'}>FAQ's</Link></li>
          </ul>
        </div>

        {/* Side 3 */}

      </div>

      <div className={copyright__sec}>
        <p>&copy; 2022 Kalative. All Right Reserved</p>
      </div>

    </footer>
  )
}

export default Footer