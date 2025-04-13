import { addLeftPaddingSwiper } from "@/utlis/addSwiperPadding";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Feet() {
  const { data } = useSelector((state) => state.products.products);
  const swiperRef = useRef(null);

  useEffect(() => {
    addLeftPaddingSwiper();
    window.addEventListener("resize", addLeftPaddingSwiper);
    return () => {
      window.removeEventListener("resize", addLeftPaddingSwiper);
    };
  }, []);

  return (
    <section className="section pt-120 pb-120 bg-our-fleet">
      <div className="container-sub">
        <div className="row align-items-center">
          <div className="col-lg-6 col-7">
            <h2 className="heading-44-medium title-fleet swiper-title wow fadeInUp">
              Our Fleet
            </h2>
          </div>
          <div className="col-lg-6 col-5 text-end">
            <Link className="text-16-medium color-primary wow fadeInUp" to="/fleet-list">
              More Fleet
              <svg
                className="icon-16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="box-slide-fleet swiper-padding mt-50">
        <div className="box-swiper">
          <Swiper
            ref={swiperRef}
            style={{ maxWidth: "100vw", overflow: "hidden" }}
            spaceBetween={30}
            slidesPerView={4}
            slidesPerGroup={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              1399: { slidesPerView: 4 },
              1100: { slidesPerView: 3 },
              670: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              350: { slidesPerView: 1 },
            }}
            className="swiper-container swiper-group-4-fleet pb-0"
          >
            {data?.map((elm, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="cardFleet wow fadeInUp">
                  <div className="cardInfo">
                    <Link to={`/fleet-single/${elm.id}`}>
                      <h3 className="text-20-medium color-text mb-10">{elm.title}</h3>
                    </Link>
                    <p className="text-14 color-text mb-30">{elm.description}</p>
                  </div>
                  <div className="cardImage mb-30">
                    <Link to={`/fleet-single/${elm.id}`}>
                      <img src={elm.imgSrc} alt="Luxride" />
                    </Link>
                  </div>
                  <div className="cardInfoBottom">
                    <div className="passenger">
                      <span className="icon-circle icon-passenger"></span>
                      <span className="text-14">
                        Passengers<span>{elm.passenger}</span>
                      </span>
                    </div>
                    <div className="luggage">
                      <span className="icon-circle icon-luggage"></span>
                      <span className="text-14">
                        Luggage<span>{elm.luggage}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
