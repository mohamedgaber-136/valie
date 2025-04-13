import { partners } from "@/data/partners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

export default function Partners() {
  const swiperSettings = {
    spaceBetween: 30,
    slidesPerView: 3, // Default to 3 slides per view
    slidesPerGroup: 1,
    freeMode: true, // Enable free sliding
    loop: false, // Optional: Disable loop for true free mode experience
    navigation: {
      nextEl: ".snbn1",
      prevEl: ".snbp1",
    },
    modules: [Navigation, Autoplay, FreeMode],
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      1399: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section className="section pt-65 pb-35 border-bottom">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg-4 mb-30">
            <h3 className="color-primary wow fadeInUp">
              The partners who sell
              <br className="d-none d-lg-block" />
              our products
            </h3>
          </div>
          <div className="col-xl-9 col-lg-8 mb-30">
            <div className="swiper-container">
              <Swiper {...swiperSettings} className="swiper-wrapper">
                {partners.map((partner, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <img
                      src={partner.url}
                      alt={`Partner ${i + 1}`}
                      style={{
                        width: "100%",
                        maxWidth: "130px",
                        objectFit: "contain",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
