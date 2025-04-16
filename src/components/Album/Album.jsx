import './Album.css'
import img1 from '../../../public/assets/imgs/team/img1.png'
import img2 from '../../../public/assets/imgs/team/Image2.png'
import img3 from '../../../public/assets/imgs/team/Image3.png'
import img4 from '../../../public/assets/imgs/team/img4.png'
import img5 from '../../../public/assets/imgs/team/img5.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
export const Album = () => {
    const data= [ 
        img1,
        img2,
        img3,
        img4,
        img5,
    ]
  return (
    <div className='container-fluid '>
                      <  h2 className='teamTitle'>معرض الصور</h2> 
                   
<div className="swiperParen">
<  h2 className=' mb-3 teamTitle text-start text-decoration-underline  cursorPointer'>عرض الكل </h2> 
<Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper  wow fadeInUp"
      >
        {data.map((img, index) => (
          <SwiperSlide key={index} className='sliderContainer' style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
           
          </SwiperSlide>
        ))}
      </Swiper>
</div>
      
    </div>
  )
}
