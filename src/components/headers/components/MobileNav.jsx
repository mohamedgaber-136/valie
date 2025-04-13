import { menuItemsMobile } from "@/data/MobileMenu";
import logoImg from  '../../../../public/assets/imgs/Logo/LogoDark.png'
import {   Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MobileNav() {
  const { pathname } = useLocation();
const navigate = useNavigate()
  return (
    <>

      {menuItemsMobile.map((elm, i) => (
        <li key={i} className="has-children">
          <a
             onClick={()=>navigate(elm.link)}
            className={`active mobileMenuParent ${         pathname.split("/")[1] == elm.link.split("/")[1] ? "active-link": ""            }`}
          >
            <span>{elm.title}</span>
            
          </a>
       
        </li>
      ))}
   {/* <li>
     <div className="header-logo d-flex justify-content-center">
                    <Link className="d-flex" to="/">
                      <img alt="maviways" src={logoImg} width={'150px'}/>
                    </Link>
                  </div>
   </li> */}
   </>
   
  );
}
