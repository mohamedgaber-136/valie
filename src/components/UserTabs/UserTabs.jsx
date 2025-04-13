import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const tabs = [
  {
    id: 1,
    href: "data",
    iconClass: "icon-book icon-pax",
    text: "Profile",
    number: "01",
  },
  {
    id: 2,
    href: "paymentcards",
    iconClass: "icon-book icon-payment",
    text: "Payment",
    number: "02",
  },
];

export default function UserTabs() {
  const [activePathIndex, setactivePathIndex] = useState(0);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract the last segment of the pathname
    const pathSegments = pathname.split("/");
    const currentSegment = pathSegments[pathSegments.length - 1]; 
    const activeTabIndex = tabs.findIndex((tab) => tab.href === currentSegment);
    setactivePathIndex(activeTabIndex !== -1 ? activeTabIndex : 0);
  }, [pathname]);

  return (
    <div className="box-booking-tabs justify-content-start">
      {tabs.map((tab, i) => (
        <div key={tab.id} className="item-tab wow fadeInUp">
          <div onClick={() => navigate(tab.href)}>
            <div className={`box-tab-step ${activePathIndex >= i ? "active" : ""}`}>
              <div className="icon-tab">
                <span className={tab.iconClass}></span>
                <span className="text-tab">{tab.text}</span>
              </div>
              <div className="number-tab">
                <span>0{i + 1}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
