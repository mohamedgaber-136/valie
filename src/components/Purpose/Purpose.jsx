// Purpose.jsx
import "./purpose.css";
import rightimg from "../../../public/assets/imgs/icons/purposeRightImg.png";
import { useTranslation } from "react-i18next";

export const Purpose = ({ title, subtitle, data, image }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <div className="grandparen">
      <div className="overflow-x-hidden position-relative PurposeContainer">
        <div className="row gap-3 p-0 m-0 align-items-center gap-md-0">
          <div className="contentContainer col-12 d-flex flex-column gap-3 m-0 col-md-7">
            <h4 className="title">{title}</h4>
            <h2 className="MainTitle">{subtitle}</h2>
            <div className="d-flex CustomFont flex-column gap-1">
              {data.map((item, index) => (
                <p className="contentPurpose" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-5 p-0 m-0">
            <img src={image} className="floatImg" alt="" />
          </div>
        </div>
        <img src={rightimg} className="leftImg" alt="" />
      </div>
    </div>
  );
};
