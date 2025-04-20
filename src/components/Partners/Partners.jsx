import "./partners.css";

import logoImage from "../../../public/assets/imgs/icons/vission.png";

export const Partners = () => {
  return (
    <div id="clients" className="partnersContainer position-relative">
      <img src={logoImage} className="pageLogoTop" />
      <img src={logoImage} className="pageLogoBottom" />
      <h2 className="teamTitle">شركائنا </h2>
      <div className="bgPartners"></div>
    </div>
  );
};
