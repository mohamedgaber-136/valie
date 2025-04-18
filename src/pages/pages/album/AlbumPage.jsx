import { useState, useRef } from 'react';
import MetaComponent from '@/components/common/MetaComponent';
import CustomNavbar from '@/components/headers/CustomNavbar';
import Footer1 from '@/components/footers/Footer1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import './albumPage.css';

import img1 from '/assets/imgs/team/img1.png';
import img2 from '/assets/imgs/team/Image2.png';
import img3 from '/assets/imgs/team/Image3.png';
import img4 from '/assets/imgs/team/img4.png';
import img5 from '/assets/imgs/team/img5.png';
import img6 from '/assets/imgs/shapeOne.png';
import rightimg from '/assets/imgs/icons/purposeRightImg.png';

const AlbumPage = () => {
  const data = [img1, img2, img3, img4, img5];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null); // 🔁 Swiper instance

  const metadata = {
    title: "فالي | منصة التقييم العقاري وخدمات تقدير الممتلكات",
    description: "فالي هي منصة احترافية تقدم خدمات التقييم العقاري بدقة وشفافية، من خلال فريق معتمد من الخبراء في مختلف القطاعات العقارية.",
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // 🎯 Go to selected slide
    }
  };

  return (
    <div className="AlbumParent position-relative">
      <MetaComponent meta={metadata} />
      <CustomNavbar dark={true} />

      <main className="albumContainer">
        <h4 className="teamTitle">معرض صورنا</h4>
        <div className="Blubg" />

        {/* Main Swiper */}
        <Swiper
          navigation={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Navigation]}
          className="mainSwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)} // 🔌 Save swiper instance
        >
          {data.map((src, idx) => (
            <SwiperSlide key={idx} className="mainSwiperSlide">
              <div
                className="mainImage"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <h5 className="teamTitle">معرض الصور ({data.length} صورة)</h5>

        {/* Native Thumbnail List */}
        <div className="nativeThumbnails">
          {data.map((src, idx) => (
            <div
              key={idx}
              className={`thumbImage ${activeIndex === idx ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => handleThumbnailClick(idx)}
            />
          ))}
        </div>
      </main>

      <img src={img6} className="topArrow" alt="" />
      <Footer1 />
      <img src={rightimg} className="leftImg" alt="" />
      <img src={rightimg} className="rightimg" alt="" />
    </div>
  );
};

export default AlbumPage;
