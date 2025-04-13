import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Register from "@/components/otherPages/Register";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Register || Maviways Chauffeur Limousine Transport and Car Hire ",
  description:
    "Maviways Chauffeur Limousine Transport and Car Hire ",
};
export default function RegisterPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
       <MobailHeader1 />
      <main className="main">
        <Register />
      </main>
      <Footer1 />
    </>
  );
}
