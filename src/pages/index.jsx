import Footer1 from "@/components/footers/Footer1";

import Facts from "@/components/common/facts/Facts";

import Hero from "@/components/homes/home-1/Hero";

import MetaComponent from "@/components/common/MetaComponent";


import ContactForm from "@/components/contact/ContactForm";
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Purpose } from "@/components/Purpose/Purpose";
import { Team } from "@/components/Team/Team";
import { Partners } from "@/components/Partners/Partners";
import { Album } from "@/components/Album/Album";
import CustomNavbar from "@/components/headers/CustomNavbar";
import purposeImgX from '../../public/assets/imgs/about/about1.png'
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
        <Purpose
  title="عن فاليب"
  subtitle="التقييم الدقيق ...."
  data={[
    "تعد عملية التقييم والرأي الفني من العمليات التي تتطلب الدقة، وفي إحدى أهم مراحل الاستثمار في كثير من الحالات، كإعادة التمركز أو التوسع أو الخروج، والقرارات المرتبطة به من البيع، والشراء، والتمويل، وإعادة الهيكلة.",
    "تتطلب للمسؤولية للجهات المختلفة كالبنوك وشركات المال والتأمين والشركات العائلية والمكاتب الحكومية والخاصة في المجالات."
  ]}
  image={purposeImgX} // استبدل purposeImgX بصورة القسم
/>
    <Team/>
    <Partners/>
    <Album/>
        <ContactForm/>
      </main>
      <Footer1 />
    </>
  );
}
