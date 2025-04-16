import imgData from '../../../public/assets/imgs/icons/aboutIcon.png'
import goldLogo from '../../../public/assets/imgs/Logo/logoGold.png'
import aboutImg from '../../../public/assets/imgs/about/about1.png'
import { VissionAndMission } from './VissionAndMission'
export const AboutUs = () => {
  return (
    <div className='container position-relative d-flex flex-column gap-5 my-50'>
           <div className="imgAbout"></div>
           <div className="imgAbout2"></div>
        <div className='my-5'>
        <h3 className='text-center fw-bold mb-5  wow fadeInUp mainText'>
    من نحن
</h3>
<div className="d-flex justify-content-center my-5  wow fadeInUp ">
   <img src={imgData} alt="" /> 
</div>
        </div>

<div className="row align-items-center">
    <div className="col-md-6 col-12 d-flex flex-column gap-2">
    <div className="d-flex align-items-center gap-2 mb-2 ">
        <h3 className='text-center fw-lighter  mainText'>
            عن 
        </h3>
        <img src={goldLogo} alt="" width={'100px'} />
    </div>
    <h3 className=' fw-bold  mainColor'>
    التقييم الدقيق ....... 
        </h3>
    <h3 className=' fw-bold  mainColor'>
    ضمانة للحقوق        </h3>
    <h5 className='p-0 m-0 text-secondary'>
    تعد عملية التقييم ركيزة أساسية في عمليات تحديد القيمة  للعقار، وهي إحدى أهم الخطوات الضرورية في الكثير من الحالات ذات الصلة باستثمار وإدارة أصول الشركات، وتكمن أهمية التقييم والتثمين العقاري في الحاجة الملحة والضرورية للقطاعات الاقتصادية كالبنوك وشركات الت
    </h5>
    <h6 className=' fw-normal  mainColor'>
        اعرف المزيد .....
    </h6>
    </div>
    <div className="col-md-6 position-relative  d-flex justify-content-center col-12">
        <div className="imgParent bg-white  wow fadeInUp">
        <img src={aboutImg} alt="" className=' mt-3 ms-3  wow fadeInUp' />

        </div>
        <div className="blugBg"></div>
     
    </div>
</div>
<VissionAndMission/>
    </div>
  )
}
