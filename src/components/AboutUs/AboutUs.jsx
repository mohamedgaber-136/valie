import { useTranslation } from 'react-i18next';
import imgData from '../../../public/assets/imgs/icons/aboutIcon.png';
import goldLogo from '../../../public/assets/imgs/Logo/logoGold.png';
import aboutImg from '../../../public/assets/imgs/about/about1.png';
import { VissionAndMission } from './VissionAndMission';

export const AboutUs = ({right}) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="container position-relative d-flex flex-column gap-5 my-50" id="about" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="imgAbout"></div>
      <div className="imgAbout2"></div>

      <div className="my-5 pt-5">
        <h3 className={`${right ? 'text-end' : 'text-center'} fw-bold mb-5 wow fadeInUp mainText`}>
          {t('aboutSection.title')}
        </h3>
        {!right&&<div className="d-flex justify-content-center my-5  wow fadeInUp ">
   <img src={imgData} alt="" /> 
</div>}

       
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 col-12 d-flex flex-column gap-2">
          <div className="d-flex align-items-center gap-2 mb-2">
            <h3 className="fw-lighter mainText">
              {t('aboutSection.about')}
            </h3>
            <img src={goldLogo} alt="" width="100px" />
          </div>

          <h3 className="fw-bold mainColor">
            {t('aboutSection.line1')}
          </h3>
          <h3 className="fw-bold mainColor">
            {t('aboutSection.line2')}
          </h3>
          <h5 className="p-0 m-0 fw-normal text-secondary">
            {t('aboutSection.description')}
          </h5>
          <h6 className="fw-normal mainColor">
            {t('aboutSection.readMore')}
          </h6>
        </div>

        <div className="col-md-6 position-relative d-flex justify-content-center col-12">
          <div className="imgParent bg-white wow fadeInUp">
            <img src={aboutImg} alt="" className={`${isArabic?'ms-3':'me-3'} mt-3  wow fadeInUp`} />
          </div>
          <div className={`blugBg ${isArabic?'':'ltr'}`}></div>
        </div>
      </div>

      <VissionAndMission />
    </div>
  );
};
