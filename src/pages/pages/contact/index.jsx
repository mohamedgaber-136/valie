import ContactForm from "@/components/contact/ContactForm";
import Footer1 from "@/components/footers/Footer1";
import MetaComponent from "@/components/common/MetaComponent";
import CustomNavbar from "@/components/headers/CustomNavbar";

import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";

import { Container, Form, InputGroup, Button } from "react-bootstrap";

import rightimg from "/assets/imgs/icons/purposeRightImg.png";
import bottom from "/assets/imgs/bottomContact.png";
import contact from "/assets/imgs/contactPath.png";
import image1 from "../../../../public/assets/imgs/icons/AboutIcon3.png";

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
      <MetaComponent meta={metadata} />
      <CustomNavbar dark />

      <main className="main FormParent">
        <h4 className="teamTitle"> تواصل معنا </h4>
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

      <img src={image1} className="rightContactImg" alt="" />
      <img src={image1} className="leftContactImg" alt="" />

      <img src={rightimg} className="leftImg" alt="" />
      <img src={rightimg} className="rightimg" alt="" />
      <div className="Blubg" />
      <div className="bluBg" />
      <div className="bluBg2" />

      <section
        className="position-relative d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#f3f4f8", padding: "6rem 0" }}
      >
        <img src={contact} alt="" className="contact" />
        <img src={bottom} className="bottom" alt="" />

        <Container>
          <div className="text-center mb-4">
            <h5
              style={{
                fontFamily: "Tajawal",
                fontWeight: 700,
                fontSize: "clamp(1rem, 1.5vw + 0.3rem, 25px)",
                color: "#0a2c52",
              }}
            >
              اترك بريدك الالكتروني ليصلك منا كل جديد
            </h5>
          </div>

          <div className="d-flex justify-content-center">
            <Form className="w-100" style={{ maxWidth: 600 }}>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="اكتب بريدك الالكتروني"
                  style={{
                    fontFamily: "Tajawal",
                    textAlign: "right",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    borderLeft: "none",
                    paddingRight: "1rem",
                  }}
                  className="border p-2"
                />
                <div className="floatBtnContact py-1">
                  <Button
                    variant="dark"
                    style={{
                      fontFamily: "Tajawal",
                      borderRadius: 10,
                      padding: "0.6rem 1.5rem",
                      backgroundColor: "#032E4F",
                    }}
                  >
                    إرسال
                  </Button>
                </div>
              </InputGroup>
            </Form>
          </div>
        </Container>
      </section>

      <Footer1 />
    </div>
  );
}
