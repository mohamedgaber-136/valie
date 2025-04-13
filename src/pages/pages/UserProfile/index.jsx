import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import MetaComponent from "@/components/common/MetaComponent";
import UserTabs from "@/components/UserTabs/UserTabs";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useGetItemsQuery } from "@/Redux/api";

export const UserProfile = () => {
  const { data, isSuccess, isLoading } = useGetItemsQuery('user/profile');
  const metadata = {
    title: "User || Maviways Chauffeur Limousine Transport and Car Hire",
    description: "Maviways Chauffeur Limousine Transport and Car Hire",
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <div>
      <MetaComponent meta={metadata} />
      <Header1 />
      <MobailHeader1 />
      <main className="main container py-5">
        <div>
          <UserTabs />
          <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
          <Outlet context={{ data, isSuccess, isLoading }} />
                    </div>
        </div>
      </main>
      <Footer1 />
    </div>
  );
};

export default UserProfile;
