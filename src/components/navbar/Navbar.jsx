import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll" , handleScroll)

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav className={`navbarr ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo"><img src={logo} width={"100%"} alt="" /></div>
      <div className={`navbar-links ${open ? 'open' : ''}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        {open ? 'X' : '☰'}
      </div>
    </nav>
  );
};

export default Navbar;
