import Card from "react-bootstrap/Card";
import "./aboutus.css";

import img from "../../../public/assets/imgs/icons/vission.png";
import bottom from "../../../public/assets/imgs/bottomContact.png";
import left from "../../../public/assets/imgs/bottomContact2.png";
import right from "../../../public/assets/imgs/bottomContact2.png";

const data = [
  {
    icon: img,
    title: "رؤيتنا",
    content: [
      "تقديم مفهوم جديد",
      "لمهنة التقييم العقاري",
      "يرتكز على أساليب علمية",
      "وقيم أخلاقية، مع توفير",
      "حلول متنوعة تلبي",
      "احتياجات العملاء.",
    ],
  },
  {
    icon: img,
    title: "رسالتنا",
    content: [
      "تقديم خدمات التقييم",
      "بدقة عالية وبأسلوب",
      "يرتكز على أساليب علمية",
      "واضح يعكس معطيات",
      "السوق، وفقًا لأعلى",
      "المعايير المحلية والدولية.",
    ],
  },
  {
    icon: img,
    title: "قيمنا",
    content: ["النزاهة", "الأمانة", "المسؤولية", "الحيادية والشفافية"],
  },
];

export const VissionAndMission = () => {
  return (
    <div className="container py-3 position-relative d-flex flex-column align-items-center align-items-lg-stretch flex-lg-row justify-content-center gap-5 mt-50">
      {data.map(({ icon, title, content }, index) => (
        <Card
          key={index}
          style={{ width: "18rem", borderRadius: "20px" }}
          className="d-flex flex-column boxShadowCard justify-content-between wow fadeInUp p-4 border-0"
        >
          <div className="d-flex justify-content-center">
            <Card.Img variant="top" src={icon} style={{ width: "75px" }} />
          </div>
          <Card.Body>
            <Card.Title className="text-center">{title}</Card.Title>
            {content.map((text, idx) => (
              <Card.Text key={idx} className="text-secondary AboutTitle my-2 text-center">
                {text}
              </Card.Text>
            ))}
          </Card.Body>
        </Card>
      ))}

      <img src={bottom} className="missioinAndVissionImg" alt="bottom decoration" />
      <img src={left} className="leftMission" alt="left decoration" />
      <img src={right} className="rightMission" alt="right decoration" />
    </div>
  );
};
