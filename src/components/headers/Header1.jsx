import { useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import logoImg from "../../../public/assets/imgs/Logo/LogoWhite.png";
import { Link  } from "react-router-dom";
import { GoUp } from "../GoUp/GoUp";

export default function Header1() {
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
        if (placeholderRef.current && headerRef.current) {
          placeholderRef.current.style.height = `${headerRef.current.offsetHeight}px`;
        }
      } else {
        setScrolled(false);
        if (placeholderRef.current) {
          placeholderRef.current.style.height = "0px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 

  return (
    <>
      {/* Placeholder for the sticky header */}
      <div ref={placeholderRef} style={{ height: 0 }}></div>

      <header
        className={`header  sticky-bar ${scrolled ? "stick bg-primary" : ""}`}
        ref={headerRef}
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left justify-content-between">
              <div className="header-logo">
                <Link className="d-flex" to="/">
                  <img alt="maviways" src={logoImg} />
                </Link>
              </div>
              <div className="header-nav">
              <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu gap-4" dir="rtl">
                    <Nav />
                  </ul>
                </nav>
               
              </div>
             
            </div>
          </div>
        </div>
      </header>

      <GoUp headerRef={headerRef} />
    </>
  );
}
