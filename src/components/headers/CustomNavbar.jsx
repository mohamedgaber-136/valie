import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../../public/assets/imgs/Logo/LogoWhite.png';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
      dir="rtl"
    >
        <Navbar.Brand href="#" className="text-white">
          <img src={logo} alt="Logo" className="navLogo" />
        </Navbar.Brand>
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </button>
        <Navbar.Collapse className={menuOpen ? 'show' : ''} id="basic-navbar-nav">
          <Nav className="me-auto gap-3">
            <Nav.Link href="#home" className="text-white">الرئيسية</Nav.Link>
            <Nav.Link href="#about" className="text-white">عن فالي</Nav.Link>
            <Nav.Link href="#services" className="text-white">خدماتنا</Nav.Link>
            <Nav.Link href="#team" className="text-white">فريق العمل</Nav.Link>
            <Nav.Link href="#clients" className="text-white">عملاؤنا</Nav.Link>
            <Nav.Link href="#contact" className="text-white">تواصل معنا</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
