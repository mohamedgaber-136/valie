import {
  links1,
  links2,
  socialMediaPlatforms,
} from "@/data/footerLinks";

import { Link } from "react-router-dom";
import logoImg from "../../../public/assets/imgs/Logo/LogoWhite.png"

export default function Footer1() {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="container-sub">
          <div className="box-footer-top">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 text-md-start text-center mb-15 wow fadeInUp">
                <div className="d-flex align-items-center flex-column flex-md-row justify-content-md-start gap-3 justify-content-center">
                  <a className="mr-md-30" href="/">
                    <img src={logoImg} alt="Luxride" width={'150px'} />
                  </a>
                 
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-md-end text-center mb-15 wow fadeInUp">
                <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                  <span className="text-18-medium color-white mr-10">
                    تابعنا
                  </span>
                  {socialMediaPlatforms.map((elm, i) => (
                    <a key={i} className={elm.className} href={elm.href}></a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4 mb-40 col-6 d-flex justify-content-start flex-column align-items-center align-items-md-start">
              <h5 className="text-18-medium text-gold mb-20 wow fadeInUp">
                روابط سريعه
              </h5>
              <ul className="menu-footer wow fadeInUp">
                {links1.map((elm, i) => (
                  <li key={i} className="text-end text-md-center fw-bolder">
                    <Link to={elm.href}>{elm.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 col-6  d-flex  justify-content-start flex-column align-items-center  align-items-md-start mb-40">
              <h5 className="text-18-medium text-end text-md-center  text-gold mb-20 wow fadeInUp">
               اتصل بنا
              </h5>
              <ul className="menu-footer wow fadeInUp">
                {links2.map((elm, i) => (
                  <li key={i} className="text-end text-md-center">
                    <a href={elm.href}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
         
           
         
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div className="container-sub">
          <div className="footer-bottom text-center">

                <span className="text-14 text-center color-white mr-50">
                  جميع الحقوق محفوظه {new Date().getFullYear()} 
                </span>
              
           
         
          </div>
        </div>
      </div>
     
    
    </footer>
  );
}
