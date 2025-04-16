import { useState, useEffect } from 'react';
import MetaComponent from '@/components/common/MetaComponent';
import CustomNavbar from '@/components/headers/CustomNavbar';
import Footer1 from '@/components/footers/Footer1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './albumPage.css';
import rightimg from '/assets/imgs/icons/purposeRightImg.png'

// Import your images
import img1 from '/assets/imgs/team/img1.png';
import img2 from '/assets/imgs/team/Image2.png';
import img3 from '/assets/imgs/team/Image3.png';
import img4 from '/assets/imgs/team/img4.png';
import img5 from '/assets/imgs/team/img5.png';
import img6 from '/assets/imgs/shapeOne.png';

const AlbumPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  const data = [img1, img2, img3, img4, img5];
  const metadata = {
    title: "فالي | منصة التقييم العقاري وخدمات تقدير الممتلكات",
    description: "فالي هي منصة احترافية تقدم خدمات التقييم العقاري بدقة وشفافية، من خلال فريق معتمد من الخبراء في مختلف القطاعات العقارية.",
  };

  useEffect(() => {
    return () => {
      // Cleanup Swiper instances when component unmounts
      if (mainSwiper) {
        mainSwiper.destroy();
      }
      if (thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    };
  }, [mainSwiper, thumbsSwiper]);

  return (
    <div className="AlbumParent position-relative">
      <MetaComponent meta={metadata} />
      <CustomNavbar bg='blueBg' />

      <main className="albumContainer">
        {/* Main Swiper */}
        <h4 className="teamTitle"> معرض صورنا </h4>

        <div className="Blubg"></div>
        <Swiper
          onSwiper={setMainSwiper}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mainSwiper"
        >
          {data.map((src, idx) => (
            <SwiperSlide key={idx} className='mainSwiperSlide'>
              <div 
                className="mainImage"
                style={{
                  backgroundImage: `url(${src})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center'
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <h5 className="teamTitle">
            معرض الصور ({data.length} صورة)
          </h5>
        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbnailSwiper"
        >
          {data.map((src, idx) => (
            <SwiperSlide key={idx} className="thumbnailSlide">
              <div 
                className="thumbnailImage"
                style={{
                  backgroundImage: `url(${src})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center'
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>

<img src={img6} className='topArrow' alt="" />
      <Footer1 />
              <img src={rightimg} className='leftImg' alt="" />
              <img src={rightimg} className='rightimg' alt="" />
      
    </div>
  );
};

export default AlbumPage;