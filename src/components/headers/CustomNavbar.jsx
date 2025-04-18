import { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import logo from '../../../public/assets/imgs/Logo/LogoWhite.png';
import logoDark from '../../../public/assets/imgs/Logo/LogoDark.png';
import './Navbar.css';

const CustomNavbar = ({ dark }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const isArabic = i18n.language === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = dir;

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [i18n.language]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? 'en' : 'ar');
  };

  const shouldUseDarkLinks = dark || scrolled;
  const logoToUse = dark || scrolled ? logoDark : logo;

  return (
    <Navbar expand="lg" fixed="top" className={`custom-navbar ${scrolled ? 'scrolled scrolledCustom' : ''}`} dir={dir}>
      <Navbar.Brand href="/">
        <img src={logoToUse} alt="Logo" className="navLogo" />
      </Navbar.Brand>

      

      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </button>

      <Navbar.Collapse className={menuOpen ? 'show' : ''}>
        <Nav className={` gap-3 ${isArabic ? 'text-end me-auto' : 'text-start ms-auto'}`}>
          <Nav.Link href="/#home" className={shouldUseDarkLinks ? 'linknavDark' : 'linkNav text-white'}>{t('home')}</Nav.Link>
          <Nav.Link href="/about" className={shouldUseDarkLinks ? 'linknavDark' : 'linkNav text-white'}>{t('about')}</Nav.Link>
          <Nav.Link href="/#services" className={shouldUseDarkLinks ? 'linknavDark' : 'linkNav text-white'}>{t('services')}</Nav.Link>
          <Nav.Link href="/#team" className={shouldUseDarkLinks ? 'linknavDark' : 'linkNav text-white'}>{t('team')}</Nav.Link>
          <Nav.Link href="/#clients" className={shouldUseDarkLinks ? 'linknavDark' : 'linkNav text-white'}>{t('clients')}</Nav.Link>
          <Nav.Link href="/contact" className={shouldUseDarkLinks ? 'linknavDark' : 'linkNav text-white'}>{t('contact')}</Nav.Link>
          <Button variant="light"  className={shouldUseDarkLinks ? 'switchBtnDark' : 'switchBtn '} size="sm" onClick={toggleLanguage}>
        {isArabic?'en':'ar'}
      </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
