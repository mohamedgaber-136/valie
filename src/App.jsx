import { useEffect, lazy, Suspense, useMemo } from "react";
import "./styles/style.scss";
import {  Route, Routes,  } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import WOW from "wow.js";
import { LoadingPage } from "./pages/LoadingPage/LoadingPage";


// Lazy-loaded components to optimize performance
const Home = lazy(() => import("./pages"));
const AlbumPageLazy =lazy(() => import("./pages/pages/album/AlbumPage"));
const AboutTest = lazy(() => import("./pages/pages/about/AboutTest"));
const PageNotFoundPage = lazy(() => import("./pages/page-not-found"));
const ContactPage1 = lazy(() => import("./pages/pages/contact"));

function App() {

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
  }, []);



  return (
    <Suspense fallback={<LoadingPage/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutTest />} />
        <Route path="contact" element={<ContactPage1 />} />
        
        <Route path="team" element={<AlbumPageLazy/>} />
       
        <Route path="*" element={<PageNotFoundPage />} />

      </Routes>

      <ScrollTopBehaviour />
    </Suspense>
  );
}

export default App;
