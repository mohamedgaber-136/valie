import Footer1 from "@/components/footers/Footer1";
import MetaComponent from "@/components/common/MetaComponent";
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import img1 from '../../../../public/assets/imgs/1.png'
import img2 from '../../../../public/assets/imgs/2.png'
import img3 from '../../../../public/assets/imgs/3.png'
import img4 from '../../../../public/assets/imgs/4.png'

import './aboutStyle.css'
import "react-lazy-load-image-component/src/effects/blur.css";
import CustomNavbar from "@/components/headers/CustomNavbar";
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Purpose } from "@/components/Purpose/Purpose";
import { PurposeReverse } from "@/components/Purpose/PurposeRevese";
import "./aboutStyle.css";

const AboutTest = () => {
  const metadata = {
    title: "فالي | منصة التقييم العقاري وخدمات تقدير الممتلكات",
    description:
      "فالي هي منصة احترافية تقدم خدمات التقييم العقاري بدقة وشفافية، من خلال فريق معتمد من الخبراء في مختلف القطاعات العقارية.",
  };
  return (
    <div className="AlbumParent position-relative">
      <MetaComponent meta={metadata} />
      <CustomNavbar dark={true} />

      <main className="pt-5">
        <AboutUs right={true} />
        <div className="bgItem"></div>
        {/* <h2 className="text-center text-votes">خطوات التقييم</h2> */}

        <Purpose
          mainTitle={"خطوات التقييم"}
          title="ما هي عملية"
          subtitle=" التقييم العقاري"
          data={[
            ` هي عمليه  تحديد قيم الاصول العقاريه او المنشأت الاقتصاديه علي اختلاف انواعها الاستفاده منها لغرض و وقت محدد و القيمه السوقيه وفقا للمعايير الدوليه للتفييم هي القيمه المقدره التي يتم تبادل الاصول علي اساسها وقت التقييم بين البائع والمشتري وفق لشروط مناسبه ضمن الصفقات التجاريه التي تعتمد علي الايجاب والقبول بين الطرفيين بعد عمليات التسويق المناسبه بحيث يكون كلا الطرفين علي علم ودرايه تامه بحقوقه والتزاماته
`,
          ]}
          image={img1}
        />

        <Purpose
          title="أولا"
          subtitle="فريق العمل "
          data={[
            "في شركة فالي للتقييم العقاري نعمل وفق أسس واضحة ومحددة لضمان أعلى دقة في عمليات التقييم، لذلك نقوم بتكوين فريق عمل متكامل لكل مشروع أو عميل على حده حتى يكون هناك فهم دقيق لمتطلبات واحتياجات العميل وأهدافه من عملية التقييم.",
          ]}
          image={img2}
        />

<PurposeReverse
  title="ثانيا"
  subtitle="إجراءات التقييم"
  data={[
    "معاينة العقار واستلام المستندات المطلوبة من المالك أو وكيله",
    "تسجيل كافة المعلمات عن العقار ورصد الملاحظات",
    "التقاط صور للعقار بالداخل والخارج لتوضيح العقار بشكل عام",
    "إجراء مسح ميداني للمنطقة التي يقع بها العقار",
    "إعداد تقرير مبدئي عن العقار من المؤمن (أحد أفراد الفريق)",
    "تحليل أسعار العقارات المشابهة ودراسة منطقة العقار بالكامل",
    "إعداد التقرير اللازم تمهيداً لإصدار التقرير النهائي بعد تحليل كافة المعلمات",
    "إرسال نسخة من التقرير للعميل عن طريق البريد الإلكتروني",
    "طباعة التقرير النهائي من نسختين (للعميل وللأرشيف)",
    "إرسال نسخة من التقرير لإدارة الجودة بالشركة للتأكد من اتباع الإجراءات الصحيحة"
  ]}
  image={img3}
/>

<Purpose
  title="ثالثا"
  subtitle="إعداد التقرير"
  data={[
    "يقوم الفريق بإعداد التقرير بشكل مفصل متضمناً:",
    "بيانات العقار التفصيلية",
    "نطاق العمل",
    "وصف العقار وموقعه",
    "صور جوية لموقع العقار",
    "مزايا وعيوب العقار",
    "العقارات المقارنة",
    "تحليل طريقة الوصول للقيمة السوقية النهائية باستخدام طرق التقييم المعتمدة (مثل طريقة الدخل، المقارنات، وحساب عائد الدخل... إلخ)"
  ]}
  image={img4}
/> 
 <div className="LeaveMssg position-relative my-5">

   <div style={{ padding: '6rem 0'    }} className="position-relative d-flex justify-content-center
       align-items-center ">

       <Container className="">
         <Row className="justify-content-center  align-items-center text-center mb-4">
           <Col md={10} lg={8}>
             <h5 style={{
               fontFamily: 'ge-light',
               fontWeight: 300,
               fontSize: 'clamp(12px, 1.5vw + 0.3rem, 15px)',
               color: ' rgba(6, 75, 115, 1)'
             }} className="mb-2">
نشرتنا الاخبارية             </h5>
             <h5 style={{
               fontFamily: 'Tajawal',
               fontWeight: 700,
               fontSize: 'clamp(1rem, 1.5vw + 0.3rem, 25px)',
               color: '#0a2c52'
             }}>
               اترك بريدك الالكتروني ليصلك منا كل جديد
             </h5>
           </Col>
         </Row>
         <Row className="justify-content-center">
           <Col md={10} lg={6}>
             <Form>
               <InputGroup className="position-relative">
             
                 <Form.Control
                   type="email"
                   placeholder="اكتب بريدك الالكتروني"
                   style={{
                     fontFamily: 'Tajawal',
                     textAlign: 'right',
                     borderTopRightRadius: '8px',
                     borderBottomRightRadius: '8px',
                     borderLeft: 'none',
                     paddingRight: '1rem'
                   }}
                   className="border p-2"
                 />
 
                 <div className="floatBtnContact py-1">     <Button  variant="dark" style={{
                   fontFamily: 'Tajawal',
                  borderRadius:'10px',
                   padding: '0.6rem 1.5rem',
                   backgroundColor: '#032E4F'
 
                 }}>
                   إرسال
                 </Button></div>
                
               </InputGroup>
             </Form>
           </Col>
         </Row>
       </Container>
     </div>
      </div>
      </main>

      <Footer1 />
    </div>
  );
};
export default AboutTest;
