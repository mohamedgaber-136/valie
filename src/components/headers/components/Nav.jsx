import { menuItems } from "@/data/menu";
import {  useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate()

 
  return (
    <>
      {menuItems.map((elm, i) => (
        <li key={i} className="">
          <a
            className={`active  ${
              pathname.split("/")[1] == elm.link.split("/")[1] ? "active-link": ""} `}
             onClick={()=>navigate(elm.link)}
          >
            {elm.title}
          </a>
        
        </li>
      ))}

    
    </>
  );
}
