import ContactForm from "@/components/contact/ContactForm";
import Footer1 from "@/components/footers/Footer1";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

import MetaComponent from "@/components/common/MetaComponent";
import CustomNavbar from "@/components/headers/CustomNavbar";
import rightimg from '/assets/imgs/icons/purposeRightImg.png'
import bottom from '/assets/imgs/bottomContact.png'
import contact from '/assets/imgs/contactPath.png'
import './contactUs.css'
const metadata = {
  title: "فالي | منصة التقييم العقاري وخدمات تقدير الممتلكات",
  description: "فالي هي منصة احترافية تقدم خدمات التقييم العقاري بدقة وشفافية، من خلال فريق معتمد من الخبراء في مختلف القطاعات العقارية.",
};
export default function ContactPage1() {
  const data =[
    {
      icon:<IoCallOutline className="goldIcon"/>,
      title:'اتصل بنا',
      content:"920009518"
    },
    {
      icon:<FaRegEnvelope className="goldIcon"/>,
      title:' البريد الالكتروني',
      content:"info@valie.sa-valie@valie.sa"
    },
    {
      icon:<IoLocationOutline className="goldIcon"/>,
      title:' العنوان الوطني ',
      content:"A 12611-2506, ,Riyadh 8991 :Wasel"
    },
  ]
  return (
    <div className="AlbumParent  position-relative">
      <MetaComponent meta={metadata} />
      <CustomNavbar bg='blueBg' />
      <main className="main FormParent">
      <h4 className="teamTitle"> تواصل معنا </h4>

        <ContactForm />
        <div className="row gap-5 gap-md-0 justify-content-center p-0 my-5">
          {data.map((item,index)=><div key={index} className="col-12 gap-3 col-md-3 d-flex flex-column justify-content-center align-items-center">
            {item.icon}
            <h4 className="contact-title">
              {item.title}
            </h4>
            <h4 className="contact-content">
              {item.content}
            </h4>
          </div>)}
        </div>
      </main>
       <img src={rightimg} className='leftImg' alt="" />
                    <img src={rightimg} className='rightimg' alt="" />
         
      <div className="Blubg"></div>
      <div className="LeaveMssg position-relative">
  <div className="bluBg"></div>
  <div className="bluBg2"></div>
  <img src={contact} alt="" className="contact" />
  <img src={bottom} className='bottom' alt="" />
      <div style={{ backgroundColor: '#f3f4f8', padding: '5rem 0',    }} className=" d-flex justify-content-center
      align-items-center ">
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
      <Footer1 />

    </div>
  );
}
