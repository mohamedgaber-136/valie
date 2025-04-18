import { useTranslation } from "react-i18next";
import i18n from "../../../i18n"; // Adjust path based on your file structure
import logo from '../../../../public/assets/imgs/Logo/logoSingle.png'
import Icon1 from '../../../../public/assets/imgs/icons/icon1.png'
import Icon2 from '../../../../public/assets/imgs/icons/icon2.png'
import './hero.css'

export default function Hero() {
  const { t } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <section className="banner-home1" id="home">
      <div className={`box-swiper ${isArabic ? 'rtl' : 'ltr'}`}>
        <img src={Icon1} alt="" className="iconImageONE" />
        <img src={Icon2} alt="" className="iconImageONE" />

        <div className="HeroContent d-flex flex-column px-2 gap-3">
          <img src={logo} className='logoImg' alt="" />
          <div className="MainTitletwo">{t("hero.mainTitle")}</div>
          <div className="subTitle">{t("hero.subTitle")}</div>
        </div>
      </div>
    </section>
  );
}
