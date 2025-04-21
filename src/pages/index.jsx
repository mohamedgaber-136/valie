import Footer1 from "@/components/footers/Footer1";

import Facts from "@/components/common/facts/Facts";

import Hero from "@/components/homes/home-1/Hero";

import MetaComponent from "@/components/common/MetaComponent";

import rightimg from '../../public/assets/imgs/icons/purposeRightImg.png';

import ContactForm from "@/components/contact/ContactForm";
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Purpose } from "@/components/Purpose/Purpose";
import { Team } from "@/components/Team/Team";
import { Partners } from "@/components/Partners/Partners";
import { Album } from "@/components/Album/Album";
import CustomNavbar from "@/components/headers/CustomNavbar";
import purposeImgX from '../../public/assets/imgs/purpose.png'
const metadata = {
  title: "فالي | منصة التقييم العقاري وخدمات تقدير الممتلكات",
  description: "فالي هي منصة احترافية تقدم خدمات التقييم العقاري بدقة وشفافية، من خلال فريق معتمد من الخبراء في مختلف القطاعات العقارية.",
};


export default function Home() {
  

  return (
    <>
      <MetaComponent meta={metadata} />
      <CustomNavbar/>
      <main className="main">
        <Hero />
        <AboutUs/>
        <Facts />
        <div className="position-relative">
<img src={rightimg} className="rightimgPurpose" alt=""  />
        <Purpose
  title="الغرض من عملية "
  subtitle="  التقييم العقاري"
  data={[
   'تحديد القيمة السوقية للعقار',
   'تحديد القيمة الإيجارية للعقار',
   'قياس القيمة العادلة بتطبيق معايير مجلس المحاسبة الدولية',
   '  IFRS من الهيئة السعودية للمحاسبين القانونيين ١٣    ',
   'تقييم الصناديق العقارية حسب متطلبات هيئة السوق المالية.',
   'التقييم لغرض حساب نسبة الزكاة الشرعية السنوية',
   'التقييم لغرض توزيع الأملاك والإرث',
   'تحديد أفضل استخدام للعقار',
   "الحراسة القضائية"
  ]}
  image={purposeImgX} // استبدل purposeImgX بصورة القسم
/>
  </div>
    <Team/>
    <Partners/>
    <Album/>
        <ContactForm/>
      </main>
      <Footer1 />
    </>
  );
}
