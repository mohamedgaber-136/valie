
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import MetaComponent from "@/components/common/MetaComponent";
import VerifyPhone from ".";
export const VerifyPhoneMain = () => {
    const metadata = {
        title:
          "VerifyPhone || Maviways Chauffeur Limousine Transport and Car Hire ",
        description:
          "Maviways Chauffeur Limousine Transport and Car Hire ",
      };
  return (
    <div>
           <MetaComponent meta={metadata} />
              <Header1 /> <MobailHeader1 />
              <main className="main">
                <VerifyPhone />
              </main>
              <Footer1 />
    </div>
  )
}
export default VerifyPhoneMain ;
