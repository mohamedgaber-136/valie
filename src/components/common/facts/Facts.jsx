import { useTranslation } from "react-i18next";
import img from "../../../../public/assets/imgs/icons/purposeRightImg.png";

export default function Facts() {
  const { t } = useTranslation();

  return (
    <section className="section  position-relative    " >
      <div className="bgItem"></div>
      {/* <img src={img} className="banerLeftimg" alt="" /> */}
      <div className="bg-showcase">
        <div className="container-sub ">
          <div className="row align-items-center">
            <div className="col-lg-12 flex-column d-flex gap-3 text-center mb-30">
              <h4 className=" mb-2 fw-bold color-white wow fadeInUp"  style={{fontFamily:'ge-light'}}>
              ماذا نقدم 
              </h4>
              <h3 className=" text-gold  fw-bold wow fadeInUp mb-2" style={{fontFamily:'ge-light'}}>
              نقدم أفضل الخدمات وفق أعلى المواصفات              </h3>
              <h4 className=" mb-2 color-white fw-bold wow fadeInUp"  style={{fontFamily:'ge-light'}}>
              نقدم مجموعة واسعة من خدمات التقييم من خلال مقيمين معتمدين من قبل الهيئة السعودية للمقيمين المعتمدين
              </h4>
            </div>
          </div>
        </div>
      </div>
      </section>
)
}