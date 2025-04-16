import purposeImg from '../../../public/assets/imgs/purpose.png'
import rightimg from '../../../public/assets/imgs/icons/purposeRightImg.png'
import './purpose.css'
export const Purpose = () => {
    const data = [
        'تحديد القيمة السوقية للعقار',
        'تحديد القيمة الإيجارية للعقار',
        'قياس القيمة العادلة بتطبيق معايير مجلس المحاسبة الدولية',
        'قياس القيمه العادله بتطبيق معايير مجلس النحاسبه الدوليه من الهيئه السعوديه للمحاسبين القانويين 13 IFRS التققيم الغرض الاندماج والتصفيه',
        'تقييم الصناديق العقارية حسب متطلبات هيئة السوق المالية.',
        'التقييم لغرض حساب نسبة الزكاة الشرعية السنوية',
        'التقييم لغرض توزيع الأملاك والإرث',
        'تحديد أفضل استخدام للعقار',
     


    ]
  return (
    <div className="grandparen">
    <div className='overflow-x-hidden position-relative PurposeContainer my-5'>
        <div className="row gap-3 p-0 m-0 gap-md-0">
            <div className="col-12 d-flex flex-column gap-3 p-0 m-0  col-md-6">
                <h4 className="title">الغرض من عملية</h4>
                <h2 className="MainTitle">التقييم العقاري</h2>
                <div className="d-flex flex-column gap-1">
                    {data.map((item,index)=><p className='contentPurpose' key={index}>{item}</p>)}
                </div>
            </div>
            <div className="col-12 col-md-6 p-0 m-0">
                <img src={purposeImg} className='floatImg'alt="" />
            </div>
        </div>
        <img src={rightimg} className='leftImg' alt="" />
    </div>
    </div>
  )
}
