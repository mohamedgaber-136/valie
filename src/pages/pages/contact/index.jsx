import ContactForm from "@/components/contact/ContactForm";
import Footer1 from "@/components/footers/Footer1";
import MetaComponent from "@/components/common/MetaComponent";
import CustomNavbar from "@/components/headers/CustomNavbar";

import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";

import { Container, Form, InputGroup, Button } from "react-bootstrap";

import {  Row, Col   } from 'react-bootstrap';


import "./contactUs.css";

const metadata = {
  title: "فالي | منصة التقييم العقاري وخدمات تقدير الممتلكات",
  description:
    "فالي هي منصة احترافية تقدم خدمات التقييم العقاري بدقة وشفافية، من خلال فريق معتمد من الخبراء في مختلف القطاعات العقارية.",
};

const contactData = [
  {
    icon: <IoCallOutline className="goldIcon" />,
    title: "اتصل بنا",
    content: "920009518",
  },
  {
    icon: <FaRegEnvelope className="goldIcon" />,
    title: " البريد الالكتروني",
    content: "info@valie.sa-valie@valie.sa",
  },
  {
    icon: <IoLocationOutline className="goldIcon" />,
    title: " العنوان الوطني ",
    content: "A 12611-2506, ,Riyadh 8991 :Wasel",
  },
];

export default function ContactPage1() {
  return (
    <div className="AlbumParent position-relative">
      <div className="bgBlue"></div>
      <MetaComponent meta={metadata} />
      <CustomNavbar dark />

      <main className="main FormParent">
        <h4 className="teamTitle" style={{                     fontFamily: 'ge-light !important',
}}> تواصل معنا </h4>
        <ContactForm />

        <div className="row gap-5 gap-md-3 justify-content-center p-0 my-5 mb-0 pt-5">
          {contactData.map((item, index) => (
            <div
              key={index}
              className="col-8 col-md-3 contactCard d-flex flex-column justify-content-center align-items-center gap-3 border"
            >
              {item.icon}
              <h4 className="contact-title">{item.title}</h4>
              <h4 className="contact-content">{item.content}</h4>
            </div>
          ))}
        </div>
      </main>

    
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
                     fontFamily: 'ge-light',
                     textAlign: 'right',
                     borderTopRightRadius: '8px',
                     borderBottomRightRadius: '8px',
                     borderLeft: 'none',
                     paddingRight: '1rem'
                   }}
                   className="border p-2"
                 />
 
                 <div className="floatBtnContact py-1">     <Button  variant="dark" style={{
                   fontFamily: 'ge-light',
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
