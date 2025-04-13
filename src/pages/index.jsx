import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Cta from "@/components/homes/common/cta/Cta";
import Facts from "@/components/common/facts/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/common/features/Features";
import Feet from "@/components/homes/home-1/Feet";
import Hero from "@/components/homes/home-1/Hero";
import Partners from "@/components/common/partners/Partners";
import Process from "@/components/common/process/Process";
import Testimonials from "@/components/common/testimonials/Testimonials2";
import DownloadApp from "@/components/common/downloadApp/DownloadApp";
import MetaComponent from "@/components/common/MetaComponent";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetProductsQuery } from "@/Redux/api";
import { setProducts } from "@/Redux/productsSlice";
import _ from "lodash"; // ✅ Added Lodash for better deep comparison
import ContactForm from "@/components/contact/ContactForm";
import { AboutUs } from "@/components/AboutUs/AboutUs";

const metadata = {
  title: "Maviways || Lixride Chauffeur Limousine Transport and Car Hire Reactjs Template",
  description: "Lixride Chauffeur Limousine Transport and Car Hire Reactjs Template",
};

export default function Home() {
  const dispatch = useDispatch();
  const { data, isSuccess } = useGetProductsQuery();
  const storedProducts = useSelector((state) => state.products.products);

  useEffect(() => {
    if (isSuccess && data && !_.isEqual(storedProducts, data)) {
      dispatch(setProducts(data)); // ✅ Update only if data has changed
    }
  }, [isSuccess, data, dispatch, storedProducts]);

  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <MobailHeader1 />
      <main className="main">
        <Hero />
        <AboutUs/>
        {/* <Partners />
        <Feet />
        <Process />
        <Features />
        <Testimonials />
        <Cta />
        <Faq />
        <DownloadApp /> */}
        <Facts />
        <ContactForm/>
      </main>
      <Footer1 />
    </>
  );
}
