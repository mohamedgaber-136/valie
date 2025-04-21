
import img from '../../../../public/assets/imgs/icons/purposeRightImg.png'
export default function Facts() {
 
  return (
    <section className="section  position-relative    " >
      <div className="bgItem"></div>
<img src={img} className='banerLeftimg' alt="" />
      <div className="bg-showcase">
        <div className="container-sub ">
          <div className="row align-items-center">
            <div className="col-lg-12 flex-column d-flex gap-3 text-center mb-30">
              <h4 className=" mb-2 fw-bold color-white wow fadeInUp">
              ماذا نقدم 
              </h4>
              <h3 className=" text-gold  fw-bold wow fadeInUp mb-2">
              نقدم أفضل الخدمات وفق أعلى المواصفات              </h3>
              <h4 className=" mb-2 color-white AboutTitle wow fadeInUp">
              نقدم مجموعة واسعة من خدمات التقييم من خلال مقيمين معتمدين من قبل الهيئة السعودية للمقيمين المعتمدين
              </h4>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
}
