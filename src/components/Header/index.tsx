// React hooks
import {useRef, useEffect, useState } from 'react';

// Third-party library
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

// Images and icons
import Logo from '../../assets/svg/logo.svg';

export const Header = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > scrollPosition) {
        document.getElementById('header')?.classList.add('header-active');
      } else {
        if (currentScrollPosition === 0) {
          document.getElementById('header')?.classList.remove('header-active');
        }
      }
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const header = headerRef.current;
    if (header) {
      header.classList.toggle("header-active");
    }
  };


  return (
    <>
      <header id="header" className="header-menu " ref={headerRef}>
        <nav className="container flex-between">
          <Link to="/" className="logo" data-aos="fade-up" aria-label="Home">
            <ReactSVG src={Logo} data-alt="Logo Portfolio" />
          </Link>

           <div  className={`menu-hamburger ${isMenuOpen ? 'menu-hamburger-active' : ''}`} onClick={toggleMenu}></div>
          <ul className="menu-desktop flex">
            <li data-aos="fade-up" data-aos-delay="300">
              <a href="#services" className="nav-link-desktop" aria-label='Services'>
                Services
              </a>
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              <a href="#portfolio" className="nav-link-desktop" aria-label='Portfolio'>
                Portfolio
              </a>
            </li>
            <li data-aos="fade-up" data-aos-delay="900">
              <a href="#about" className="nav-link-desktop" aria-label='About Me'>
                About Me
              </a>
            </li>
            <li data-aos="fade-up" data-aos-delay="1200">
              <Link to="/contact" className="nav-link-desktop" aria-label='Contact'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="relative">
        <nav className="nav-mobile">
          <ul className={`menu-mobile ${isMenuOpen ? 'menu-mobile-active' : ''}`} onClick={toggleMenu}>
            <li>
              <a href="#services" className="nav-link-mobile" aria-label='Services'>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link-mobile" aria-label='Portfolio'>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#aboutMe" className="nav-link-mobile" aria-label='About Me'>
                About Me
              </a>
            </li>
            <li>
              <Link to="/contact" className="nav-link-mobile" aria-label='Contact' >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
