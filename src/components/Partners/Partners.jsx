import "./partners.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import logoImage from "../../../public/assets/imgs/icons/vission.png";
import img1 from "../../../public/assets/imgs/slide1.png";
import img2 from "../../../public/assets/imgs/slide2.png";
import img3 from "../../../public/assets/imgs/slide3.png";

export const Partners = () => {
  const logos = [
    img1,img2,img3
  ]
  return (
    <div id="clients" className="partnersContainer position-relative">
      <img src={logoImage} className="pageLogoTop" />
      <img src={logoImage} className="pageLogoBottom" />
      <h2 className="teamTitle">شركائنا </h2>
      <div className="bgPartners d-none d-md-flex"></div>
      <div className="swiperParent d-flex d-md-none my-5">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={30}
        slidesPerView={"auto"}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        className="partnersSwiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <img src={logo} alt={`partner-${index}`} className="partnerLogo" />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};
