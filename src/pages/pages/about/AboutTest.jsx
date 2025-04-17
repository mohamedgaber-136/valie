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
 const AboutTest = () => {
  const metadata = {
    title: "فالي | منصة التقييم العقاري وخدمات تقدير الممتلكات",
    description: "فالي هي منصة احترافية تقدم خدمات التقييم العقاري بدقة وشفافية، من خلال فريق معتمد من الخبراء في مختلف القطاعات العقارية.",
  };
  return (
 <div className="AlbumParent position-relative">
    <MetaComponent meta={metadata} />
      <CustomNavbar bg='blueBg' />

      <main >
 <AboutUs/>
 <div className="bgItem"></div>
 <Purpose
  title="أولاً"
  subtitle="فريق العمل"
  data={[
    "في شركة فالي للتقييم العقاري نعمل وفقًا لأسس واضحة ومحكمة لضمان أعلى دقة في عمليات التقييم.",
    "يبدأ تقييمكم بفهم متكامل لكل مشروع أو عميل حتى نتمكن من تلبية متطلباته باحترافية عالية."
  ]}
  image={img1}
/>

<PurposeReverse
  title="ثانيًا"
  subtitle="إجراءات التقييم"
  data={[
    "مراجعة العقار واستلام المستندات المطلوبة من المالك أو وكيله",
    "التحقق الكامل للمعلومات عن العقار ورصد المدخلات",
    "إعداد صور للعقار داخليًا وخارجيًا",
    "إجراء مسح ميداني للمنطقة التي يقع فيها العقار",
    "تحليل السوق العقاري وتحليل الصفقات المماثلة",
    "إعداد التقرير المبدئي ومشاركته مع العميل للمراجعة",
    "إرسال نسخة من التقرير النهائي بعد التأكد من صحة الإجراءات"
  ]}
  image={img2}
/>

<Purpose
  title="ثالثًا"
  subtitle="إعداد التقرير"
  data={[
    "يقوم الفريق بإعداد التقرير بشكل مفصل شاملاً:",
    "بيانات التعريف التفصيلية",
    "موقع العقار ووصفه",
    "صور جوية وموضوعية",
    "تحليل طريقة الوصول للقيمة السوقية",
    "مقارنات ومؤشرات حسابية"
  ]}
  image={img3}
/>

<PurposeReverse
  title="رابعًا"
  subtitle="الغرض من عملية التقييم"
  data={[
    'تحديد القيمة السوقية للعقار',
    'تحديد القيمة الإيجارية للعقار',
    'قياس القيمة العادلة بتطبيق معايير مجلس المحاسبة الدولية',
    'تقييم الصناديق العقارية حسب متطلبات هيئة السوق المالية',
    'التقييم لغرض حساب نسبة الزكاة الشرعية السنوية',
    'التقييم لغرض توزيع الأملاك والإرث',
    'تحديد أفضل استخدام للعقار'
  ]}
  image={img4}
/>
 <div className="LeaveMssg position-relative">
  <div className="bluBg"></div>
  <div className="bluBg2"></div>
      <div style={{ backgroundColor: '#f3f4f8', padding: '5rem 0',    }} className=" d-flex justify-content-center
      align-items-center my-5">
      <Container>
        <Row className="justify-content-center align-items-center text-center mb-4">
          <Col md={10} lg={8}>
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
  )
}
export default AboutTest ;
