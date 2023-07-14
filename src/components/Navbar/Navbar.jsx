import React, { useEffect, useState } from 'react'
import styles from "./Navbar.module.css";
import Logo from "../../assets/Logo.svg";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { app__navbar, nav__center, nav__logo, nav__links, nav__smscreen, link__activated, menu__activated } = styles;
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const int = setInterval(() => {
      window.scrollY >= 200 && setToggleMenu(false);
    }, 0);

    return () => {clearInterval(int);}
  }, []);

  return (
    <nav className={app__navbar}>
      <div className={nav__center}>

        {/* Logo */}
        <div className={nav__logo}>
          <Link to='/' onClick={() => {setToggleMenu(false)}} ><img src={Logo} alt="Kalative"/></Link>
        </div>

        {/* Links */}
        <ul className={`${nav__links} ${toggleMenu && menu__activated}`}>
          <li onClick={() => {setToggleMenu(false)}} >
            <Link to='/' className={`${(location.pathname === '/' && location.hash !== '#whyus') && link__activated}`} ><ion-icon name="home"></ion-icon> Home</Link>
            <div style={{ backgroundColor : '#54AFBC' }} className={`${(location.pathname === '/' && location.hash !== '#whyus') && link__activated}`} ></div>
          </li>
          <li onClick={() => {setToggleMenu(false)}} >
            <a onClick={() => {navigate('/')}} className={`${(location.pathname === '/' && location.hash === '#whyus') && link__activated}`} href='#whyus'><ion-icon name="help-circle"></ion-icon> Why Us?</a>
            <div style={{ backgroundColor : '#54AFBC' }} className={`${(location.pathname === '/' && location.hash === '#whyus') && link__activated}`}></div>
          </li>
          <li onClick={() => {setToggleMenu(false)}} >
            <Link to='/projects' className={`${location.pathname === '/projects' && link__activated}`} ><ion-icon name="extension-puzzle"></ion-icon> Projects</Link>
            <div style={{ backgroundColor : '#FE5C36' }} className={`${location.pathname === '/projects' && link__activated}`} ></div>
          </li>
          <li onClick={() => {setToggleMenu(false)}} >
            <Link to='/blogs' className={`${(location.pathname === '/blogs' || location.pathname.includes('/blog/')) && link__activated}`} ><ion-icon name="book"></ion-icon> Blogs</Link>
            <div style={{ backgroundColor : '#FFB449' }} className={`${(location.pathname === '/blogs' || location.pathname.includes('/blog/')) && link__activated}`} ></div>
          </li>
          <li onClick={() => {setToggleMenu(false)}} >
            <Link to='/newsletters' className={`${(location.pathname === '/newsletters' || location.pathname.includes('/news/')) && link__activated}`} ><ion-icon name="newspaper"></ion-icon> Newsletters</Link>
            <div style={{ backgroundColor : '#54AFBC' }} className={`${(location.pathname === '/newsletters' || location.pathname.includes('/news/')) && link__activated}`} ></div>
          </li>
        </ul>

        {/* Small screen menu */}
        <div className={nav__smscreen}>
          <button type='button' onClick={() => {
            setToggleMenu(!toggleMenu);
          }}><ion-icon name="menu"></ion-icon></button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar