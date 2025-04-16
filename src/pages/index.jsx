import Footer1 from "@/components/footers/Footer1";

import Facts from "@/components/common/facts/Facts";

import Hero from "@/components/homes/home-1/Hero";

import MetaComponent from "@/components/common/MetaComponent";


import _ from "lodash"; // ✅ Added Lodash for better deep comparison
import ContactForm from "@/components/contact/ContactForm";
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Purpose } from "@/components/Purpose/Purpose";
import { Team } from "@/components/Team/Team";
import { Partners } from "@/components/Partners/Partners";
import { Album } from "@/components/Album/Album";
import CustomNavbar from "@/components/headers/CustomNavbar";

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
    <Purpose/>
    <Team/>
    <Partners/>
    <Album/>
        <ContactForm/>
      </main>
      <Footer1 />
    </>
  );
}
