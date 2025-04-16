import logo from '../../../../public/assets/imgs/Logo/logoSingle.png'
import Icon1 from '../../../../public/assets/imgs/icons/icon1.png'
import Icon2 from '../../../../public/assets/imgs/icons/icon2.png'
;
import './hero.css'
export default function Hero() {
  return (
    <section className=" banner-home1" id="home">
      <div className="box-swiper">
        <img src={Icon1} alt="" className="iconImageONE" />
        <img src={Icon2} alt=""  className="iconImageONE"/>
   
   <div className="HeroContent d-flex flex-column px-2 gap-3">
<img src={logo} className='logoImg' alt="" />
<div className="MainTitle">
علم و خبرة
</div>
<div className="subTitle">
تعد عملية التقييم ركيزة أساسية في عمليات تحديد القيمة السوقية للعقار، وهي إحدى أهم الخطوات الضرورية في الكثير من الحالات ذات الصلة باستثمار وإدارة أصول الشركات،
وتكمن أهمية التقييم والتثمين العقاري في الحاجة الملحة والضرورية للقطاعات الاقتصادية كالبنوك وش
</div>
   </div>
        
        
      
      </div>
     
    </section>
  );
}
