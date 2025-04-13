import { useEffect, lazy, Suspense, useMemo } from "react";
import "./styles/style.scss";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import WOW from "wow.js";
import { LoadingPage } from "./pages/LoadingPage/LoadingPage";
import ProfileData from "./pages/pages/UserProfile/ProfileData";
import { MainRegister } from "./pages/pages/register/MainRegister";
import { PaymentCards } from "./pages/pages/UserProfile/PaymentCards";

// Lazy-loaded components to optimize performance
const Home = lazy(() => import("./pages"));
const HomePage1 = lazy(() => import("./pages/homes/home-1"));
const AboutTest = lazy(() => import("./pages/pages/about/AboutTest"));
const ContactPage1 = lazy(() => import("./pages/pages/contact"));
const ContactPage2 = lazy(() => import("./pages/pages/contact-2"));
const OurTeamPage = lazy(() => import("./pages/pages/our-team"));
const PrivacyPolicy = lazy(() => import("./pages/pages/PrivacyPolicy"));
const TeamSinglePage = lazy(() => import("./pages/pages/team-single"));
const LoginPage = lazy(() => import("./pages/pages/login"));
const RegisterPage = lazy(() => import("./pages/pages/register"));
const PricingPage = lazy(() => import("./pages/pages/pricing"));
const CommingSoonPage = lazy(() => import("./pages/pages/coming-soon"));
const PageNotFoundPage = lazy(() => import("./pages/page-not-found"));
const BookingVehiclePage = lazy(() => import("./pages/booking/booking-vehicle"));
const BookingPassengerPage = lazy(() => import("./pages/booking/booking-passenger"));
const BookingPaymentPage = lazy(() => import("./pages/booking/booking-payment"));
const InvoicePage = lazy(() => import("./pages/invoice"));
const FleetListPage1 = lazy(() => import("./pages/fleets/fleet-list"));
const FleetSinglePage = lazy(() => import("./pages/fleets/fleet-single"));
const ServiceSinglePage = lazy(() => import("./pages/services/service-single"));
const BlogsSinglePage = lazy(() => import("./pages/blogs/blog-single"));
const BookingRecevedPage = lazy(() => import("./pages/booking/booking-receved"));
const VerifyPhoneMain = lazy(() => import("./pages/pages/VerifyPhone/VerifyPhoneMain"));
const UserProfile = lazy(() => import("./pages/pages/UserProfile/index"));
const ForgetPassword = lazy(() => import("./pages/pages/forgetPassword"));
const ChangePassowrd = lazy(() => import("./pages/pages/forgetPassword/ChangePassowrd"));const MainEmailVerify = lazy(() => import("./pages/pages/verifyEmail"));

function App() {
  const { pathname } = useLocation();
  const { accessToken } = useSelector((state) => state.auth);

  // Import Bootstrap only when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm");
    }
  }, []);

  // Memoize WOW.js initialization to avoid re-creating the instance unnecessarily
  useMemo(() => {
    const wowInstance = new WOW({ live: false });
    wowInstance.init();
  }, [pathname]);

  /**
   * PrivateRoute component to handle protected routes
   * Redirects to login if user is not authenticated
   */
  const PrivateRoute = ({ element, nav }) => {
    return accessToken ? element : <Navigate to={nav} />;
  };
  const RegisterRoute = ({ element, nav }) => {
    return !accessToken ? element : <Navigate to={nav} />;
  };

  PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired,
    nav: PropTypes.string.isRequired,
  };
  RegisterRoute.propTypes = {
    element: PropTypes.element.isRequired,
    nav: PropTypes.string.isRequired,
  };

  return (
    <Suspense fallback={<LoadingPage/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home-1" element={<HomePage1 />} />
        <Route path="about" element={<AboutTest />} />
        <Route path="contact" element={<ContactPage1 />} />
        <Route path="contact-2" element={<ContactPage2 />} />
        <Route path="our-team" element={<OurTeamPage />} />
        <Route path="Privacy" element={<PrivacyPolicy />} />
        <Route path="team-single/:id" element={<TeamSinglePage />} />
        <Route path="register">
          <Route index  element={<RegisterRoute element={<MainRegister />} nav="/" />}/>
          <Route path="phoneVerify" element={<VerifyPhoneMain />} />
          <Route path="emailVerify" element={<MainEmailVerify />} />
          <Route path="Detalis/:id" element={<RegisterPage />} />
        </Route>
        <Route path="User" element={<PrivateRoute element={<UserProfile />} nav="/login" />} >
        <Route index path={'data'} element={<ProfileData/>}/>
        <Route path="paymentcards" element={<PaymentCards/>}/>
        
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="forgetpassword">
          <Route index element={<ForgetPassword />} />
          <Route path="changePassword/:id" element={<ChangePassowrd />} />
        </Route>
        <Route path="pricing" element={<PricingPage />} />
        <Route path="coming-soon" element={<CommingSoonPage />} />
        <Route path="page-not-found" element={<PageNotFoundPage />} />
        <Route path="booking-vehicle/:id" element={<PrivateRoute element={<BookingVehiclePage />} nav="/login" />} />
        <Route path="booking-vehicle" element={<PrivateRoute element={<BookingVehiclePage />} nav="/login" />} />
        <Route path="booking-passenger" element={<PrivateRoute element={<BookingPassengerPage />} nav="/login" />} />
        <Route path="booking-payment" element={<PrivateRoute element={<BookingPaymentPage />} nav="/login" />} />
        <Route path="booking-receved" element={<PrivateRoute element={<BookingRecevedPage />} nav="/login" />} />
        <Route path="invoice" element={<InvoicePage />} />
        <Route path="fleet-list" element={<FleetListPage1 />} />
        <Route path="fleet-single/:id" element={<FleetSinglePage />} />
        <Route path="service-single/:id" element={<ServiceSinglePage />} />
        <Route path="blog-single/:id" element={<BlogsSinglePage />} />
        <Route path="*" element={<PageNotFoundPage />} />

      </Routes>

      <ScrollTopBehaviour />
    </Suspense>
  );
}

export default App;
