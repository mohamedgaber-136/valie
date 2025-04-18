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
        <div className="container-sub py-5">
    
          <div className="row py-5 ">
            <div className="col-lg-4 mb-40 col-6 d-flex justify-content-start flex-column align-items-center align-items-md-start">
            <a className="mr-md-30 " href="/">
                    <img src={logoImg} alt="Luxride" width={'150px'} />
                  </a>
                  <h2 className="footerText mt-2">
                    علم و خبره
                  </h2>
                  <div className="d-flex  mt-2 align-items-center justify-content-md-end justify-content-center">
              
                  {socialMediaPlatforms.map((elm, i) => (
                    <a key={i} className={elm.className} href={elm.href}></a>
                  ))}
                </div>
            </div>
            <div className="col-lg-4 mb-40 col-6 d-flex justify-content-start flex-column align-items-center align-items-md-start">
              <h5 className="text-18-medium text-gold mb-20 wow fadeInUp">
                روابط سريعه
              </h5>
              <ul className="menu-footer wow fadeInUp">
                {links1.map((elm, i) => (
                  <li key={i} className="text-start text-md-center fw-bolder">
                    <Link  className="text-end" to={elm.href}>{elm.text}</Link>
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
                    <a  className="text-end" href={elm.href}>{elm.name}</a>
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
