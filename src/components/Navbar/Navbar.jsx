import React from 'react'
import styles from "./Navbar.module.css";
import Logo from "../../assets/Logo.svg";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { app__navbar, nav__center, nav__logo, nav__links, link__activated } = styles;

  return (
    <nav className={app__navbar}>
      <div className={nav__center}>

        {/* Logo */}
        <div className={nav__logo}>
          <Link to='/' ><img src={Logo} alt="Kalative"/></Link>
        </div>

        {/* Links */}
        <ul className={`${nav__links}`}>
          <li>
            <Link to='/' className={`${(location.pathname === '/' && location.hash !== '#whyus') && link__activated}`} ><ion-icon name="home"></ion-icon> Home</Link>
            <div style={{ backgroundColor : '#54AFBC' }} className={`${(location.pathname === '/' && location.hash !== '#whyus') && link__activated}`} ></div>
          </li>
          <li>
            <a onClick={() => {navigate('/')}} className={`${(location.pathname === '/' && location.hash === '#whyus') && link__activated}`} href='#whyus'><ion-icon name="help-circle"></ion-icon> Why Us?</a>
            <div style={{ backgroundColor : '#54AFBC' }} className={`${(location.pathname === '/' && location.hash === '#whyus') && link__activated}`}></div>
          </li>
          <li>
            <Link to='/projects' className={`${location.pathname === '/projects' && link__activated}`} ><ion-icon name="extension-puzzle"></ion-icon> Projects</Link>
            <div style={{ backgroundColor : '#FE5C36' }} className={`${location.pathname === '/projects' && link__activated}`} ></div>
          </li>
          <li>
            <Link to='/blogs' className={`${(location.pathname === '/blogs' || location.pathname.includes('/blog/')) && link__activated}`} ><ion-icon name="book"></ion-icon> Blogs</Link>
            <div style={{ backgroundColor : '#FFB449' }} className={`${(location.pathname === '/blogs' || location.pathname.includes('/blog/')) && link__activated}`} ></div>
          </li>
          <li>
            <Link to='/newsletters' className={`${(location.pathname === '/newsletters' || location.pathname.includes('/news/')) && link__activated}`} ><ion-icon name="newspaper"></ion-icon> Newsletters</Link>
            <div style={{ backgroundColor : '#54AFBC' }} className={`${(location.pathname === '/newsletters' || location.pathname.includes('/news/')) && link__activated}`} ></div>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar