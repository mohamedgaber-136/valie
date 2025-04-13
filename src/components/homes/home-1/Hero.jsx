import logo from '../../../../public/assets/imgs/Logo/logoSingle.png'
import Icon1 from '../../../../public/assets/imgs/icons/icon1.png'
import Icon2 from '../../../../public/assets/imgs/icons/icon2.png'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../../public/assets/css/custom/Hero.css'
const banners = [
  { id: 1, url: "/assets/imgs/slider/BG.png", title: "علم و خبرة", text: "تعد عملية التقييم ركيزة أساسية في عمليات تحديد القيمة",textTwo:'السوقية للعقار، وهي إحدى أهم الخطوات الضرورية في الكثير', textThree:'من الحالات ذات الصلة باستثمار وإدارة أصول الشركات،'},
  
];

export default function Hero() {

  // State for inputs



  const settings = {
    slidesPerView: 1,
    loop: true,
    navigation: { nextEl: ".snbn2", prevEl: ".snbp2" },
    modules: [Navigation, Autoplay, Pagination],
    pagination: { el: ".sph1", clickable: true, type: "fraction" },
    autoplay: { delay: 10000 },
  };

  return (
    <section className="section banner-home1">
      <div className="box-swiper">
        <img src={Icon1} alt="" className="iconImageONE" />
        <img src={Icon2} alt=""  className="iconImageONE"/>
        <Swiper
          style={{ maxWidth: "100vw", overflow: "hidden" }}
          {...settings}
          className="swiper-container swiper-banner-1 pb-0"
        >
         {banners.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="box-cover-image boxBgImage">
                <img
                  src={elm.url}
                  alt={elm.title}
                  loading="lazy" // Lazy load image
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="box-banner-info">
                <img src={logo} width={'100px'} />
                <p className="MainTitle mb-20 wow fadeInUp">{elm.title}</p>
                <h6 className="heading-12 subTitle color-white wow fadeInUp">
                  {elm.text} <br className="d-none d-lg-block" />
                </h6>
                <h6 className="heading-12 subTitle color-white wow fadeInUp">
                  {elm.textTwo} <br className="d-none d-lg-block" />
                </h6>
                <h6 className="heading-12 subTitle color-white wow fadeInUp">
                  {elm.textThree} <br className="d-none d-lg-block" />
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     
    </section>
  );
}
