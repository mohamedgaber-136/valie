import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import MetaComponent from "@/components/common/MetaComponent";
import VerifyEmail from "./VerifyEmail";
 const MainEmailVerify = () => {
    const metadata = {
        title:
          "VerifyEmail || Maviways Chauffeur Limousine Transport and Car Hire ",
        description:
          "Maviways Chauffeur Limousine Transport and Car Hire ",
      };
  return (
     <div>
             <MetaComponent meta={metadata} />
                <Header1 /> <MobailHeader1 />
                <main className="main">
                                    <VerifyEmail/>
                    
                </main>
                <Footer1 />
      </div>
  )
}
export default MainEmailVerify ;