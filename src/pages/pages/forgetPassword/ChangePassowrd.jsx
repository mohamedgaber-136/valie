import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import MetaComponent from "@/components/common/MetaComponent";
import ChangePassowrdComp from "./ChangePassowrdComp";
const metadata = {
  title:
    "ChangePassoword || Maviways Chauffeur Limousine Transport and Car Hire ",
  description:
    "Maviways Chauffeur Limousine Transport and Car Hire ",
};
export default function ChangePasswrd() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 /> <MobailHeader1 />
      <main className="main">
        <ChangePassowrdComp />
      </main>
      <Footer1 />
    </>
  );
}