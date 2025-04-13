import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import '../../../../public/assets/css/custom/PrivacePolicy.css'
import MobailHeader1 from "@/components/headers/MobailHeader1";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "PrivacyPolicy || Lixride Chauffeur Limousine Transport and Car Hire Reactjs Template",
  description:
    "Lixride Chauffeur Limousine Transport and Car Hire Reactjs Template",
};
  function PrivacyPolicy() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 /> <MobailHeader1 />
      <main className="privacy-policy-main d-flex flex-column gap-2">
  <h1 className="privacy-policy-title">Privacy Policy</h1>
  <p className="last-updated">Last updated: February 02, 2025</p>
  <p className="privacy-policy-text text-center">This Privacy Policy describes Our policies and procedures...</p>

  <h2 className="section-title">Interpretation and Definitions</h2>
  <div className="border rounded p-2 ">
  <h3 className="subsection-title">Interpretation</h3>
  <p className="privacy-policy-text">The words of which the initial letter is capitalized...</p>
  </div>
  <h3 className="subsection-title">Definitions</h3>
  <div className="border rounded p-2 ">
  <ul className="definitions-list ">
    <li><p><strong>Account</strong> means a unique account created for You...</p></li>
    <li><p><strong>Affiliate</strong> means an entity that controls...</p></li>
    <li><p><strong>Company</strong> refers to maviways, turkey.</p></li>
    <li><p><strong>Cookies</strong> are small files that are placed...</p></li>
    <li><p><strong>Country</strong> refers to: Turkey</p></li>
    <li><p><strong>Device</strong> means any device...</p></li>
    <li><p><strong>Personal Data</strong> is any information...</p></li>
    <li><p><strong>Service</strong> refers to the Website.</p></li>
    <li><p><strong>Service Provider</strong> means any person who processes the data...</p></li>
    <li><p><strong>Usage Data</strong> refers to data collected...</p></li>
    <li><p><strong>Website</strong> refers to maviways, accessible from <a href="www.maviways.com" target="_blank">www.maviways.com</a></p></li>
    <li><p><strong>You</strong> means the individual accessing...</p></li>
  </ul>
  </div>
  <h2 className="section-title">Collecting and Using Your Personal Data</h2>

  <h3 className="subsection-title">Types of Data Collected</h3>

  <h4 className="sub-subsection-title">Personal Data</h4>
  <p className="privacy-policy-text">While using Our Service, We may ask You...</p>
  <div className="border rounded p-2 ">
  <ul className="data-list">
    <li><p>Email address</p></li>
    <li><p>First name and last name</p></li>
    <li><p>Phone number</p></li>
    <li><p>Usage Data</p></li>
  </ul>
  </div>
  <h4 className="sub-subsection-title">Usage Data</h4>
  <div className="border rounded p-2 ">

  <p className="privacy-policy-text m-0 p-0">Usage Data is collected automatically...</p>
  </div>
  <h4 className="sub-subsection-title">Tracking Technologies and Cookies</h4>
  <div className="border rounded p-2 ">

  <p className="privacy-policy-text p-0 m-0">We use Cookies and similar tracking technologies...</p>
  </div>
  <h3 className="subsection-title">Use of Your Personal Data</h3>
  <div className="border rounded p-2 ">

  <ul className="use-data-list">
    <li><p><strong>To provide and maintain our Service</strong>...</p></li>
    <li><p><strong>To manage Your Account:</strong>...</p></li>
    <li><p><strong>For the performance of a contract:</strong>...</p></li>
    <li><p><strong>To contact You:</strong>...</p></li>
  </ul>
  </div>
</main>

      <Footer1 />
    </>
  );
}
export default PrivacyPolicy;