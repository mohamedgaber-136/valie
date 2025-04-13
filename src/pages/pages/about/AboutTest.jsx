import MobailHeader1 from "@/components/headers/MobailHeader1";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MetaComponent from "@/components/common/MetaComponent";
import CvModal from '@/components/Modal/CvModal';
import collegeImg from '../../../../public/assets/imgs/Test/about.png'
import personOne from "../../../../public/assets/imgs/Test/Eyup.png"
import persontwo from "../../../../public/assets/imgs/Test/sofia.png"
import personthree from "../../../../public/assets/imgs/Test/Elif.jpg"
import mobileImg from "../../../../public/assets/imgs/Test/MobileApp.jpg"
import appStore from "../../../../public/assets/imgs/Test/app-store.svg"
import googlePlay from "../../../../public/assets/imgs/Test/google-play.svg"
import '../../../../public/assets/css/custom/about.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
 const AboutTest = () => {
    const metadata = {
        title:
          "About || Lixride Chauffeur Limousine Transport and Car Hire Reactjs Template",
        description:
          "Lixride Chauffeur Limousine Transport and Car Hire Reactjs Template",
      };
  return (
 <>
    <MetaComponent meta={metadata} />
       <Header1 /> <MobailHeader1 />

      <main>
        <section id="about" className='py-5'>
          <div className="cover  flex-column set-center ">
            <div className="container">
              <div className="row">
                <div className="col-md-5 align-self-center">
                  <h1 className="title mb-4">About Us</h1>
                  <p className="last-update fw-normal mb-5">
                    <span className="servex-font">Maviways</span> is a leading
                    logistics-technology company established in 2015 to provide
                    high-quality end-to-end supply chain management and
                    operations to expand and strengthen the logistics industry
                    across the region.
                  </p>
                </div>
                <div className="col-md-7 align-self-center">
                  <LazyLoadImage
                   effect="blur"
                    src={collegeImg}
                    className="img-fluid h-100"
                    alt="About Servex"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container py-10">
            <div className="row pb-10">
              <div className="col-md-5 offset-md-1">
                <div className="card gray-card border-0 py-3 py-md-5 px-4 mb-3 mb-md-5">
                  <h2 className="title mb-0 mb-md-4">Our Vision</h2>
                  <p className="paragraph">
                    To be the innovation and solution for the best customer
                    experience by showing the same sensitivity and care in all
                    shipments we carry, regardless of their quality and
                    quantity.
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div className="card gray-card border-0 py-3 py-md-5 px-4 mb-5">
                  <h2 className="title mb-0 mb-md-4">Our Mission</h2>
                  <p className="paragraph">
                    Sustainable quality and customer satisfaction by listening
                    to our customers to provide them with value and
                    technology-oriented solutions and to innovate.
                  </p>
                </div>
              </div>
            </div>

            <div className="row gap-md-0 gap-3 py-10">
              <h1 className="title text-center mb-md-5 pb-md-5">
                Leadership Team
              </h1>

              <div className=" col-12 col-lg-4  text-center">
                  <LazyLoadImage
                  src={personOne} 
                                    effect="blur"
                  className="ship-image img-fluid mb-4"
                  alt="Eyup Mubtasim"
                />
                <h3 className="ship-name">Eyup Mubtasim</h3>
                <h6 className="ship-position fw-light">Executive Director
                </h6>
              </div>

              <div className=" col-12 col-lg-4  text-center">
                 <LazyLoadImage
                   effect="blur"
                   src={persontwo}
                  className="ship-image img-fluid mb-4"
                  alt="Ali Al Mesned"
                />
                <h3 className="ship-name">Mrs Sofia khafallah </h3>
                <h6 className="ship-position fw-light">
                 CEO
                </h6>
              </div>

              <div className=" col-12 col-lg-4  text-center">
                   <LazyLoadImage
                   effect="blur"
                  src={personthree}
                  className="ship-image img-fluid mb-4"
                  alt="Mrs Elif Sinem"
                />
                <h3 className="ship-name">Mrs Elif Sinem</h3>
                <h6 className="ship-position fw-light">Human Resources</h6>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h1 className="small-title mb-4 my-5">Join Our Crew</h1>
                <p className="small-paragraph fs-5 fw-light pb-10 m-0">
                  Your contributions will empower businesses to conquer
                  ambitious goals, tackle supply chain obstacles head-on, and
                  transform their victories into positive impacts on our planet.
                  <br />
                  <br />
                  Ready to join our vibrant team? We are on the lookout for
                  passionate individuals eager to make a mark with us.
                  Currently, we have openings for:
                </p>

                <div className="border p-3 rounded-pill mt-4 d-flex flex-column flex-md-row justify-content-between align-items-center drop mb-4">
                  <h6 className=" fw-medium">Network Sales Specialist</h6>
                  <h6>Istanbul, Türkiye - Fulltime</h6>
                </div>

                <div className="border p-3 rounded-pill d-flex justify-content-between flex-column  flex-md-row align-items-center drop mb-4">
                  <h6 className="">Business Analyst</h6>
                  <h6>Istanbul, Türkiye - Fulltime</h6>
                </div>

                <div className="border p-3 rounded-pill  d-flex justify-content-between flex-column  flex-md-row align-items-center drop mb-4">
                  <h6 className="">Driver</h6>
                  <h6>Istanbul, Türkiye - Fulltime</h6>
                </div>
                <div className="border p-3 rounded-pill d-flex justify-content-between flex-column  flex-md-row align-items-center drop mb-4">
                  <h6 className="">Accountant</h6>
                  <h6>İstanbul, Türkiye - Fulltime</h6>
                </div>
<div className="w-100 d-flex justify-content-center">

                <CvModal/>
</div>
              </div>
            </div>
         
          </div>
        </section>

        <section id="application">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 px-0">
                <LazyLoadImage
                   effect="blur"
                  src={mobileImg}
                  className="img-fluid app"
                  alt="Application"
                  loading="lazy"
                />
              </div>

              <div className="col-md-5 set-center flex-column mt-5 mt-md-0">
                <h1 className="title text-black text-center fw-medium">
                  Download your personalized Maviways mobile app
                </h1>
                <p className="paragraph fw-light text-center my-0 my-md-5">
                  Instantly access everything you want to know <br />
                  about all your orders.
                </p>

                <div className="download text-center">
                  <h3 className="download-now mb-md-5">Soon!</h3>

                  <div className="set-center mb-3">
                    <a href="">
                      <LazyLoadImage
                   effect="blur"
                        src={appStore}
                        className="img-fluid "
                        alt="App Store"
                        style={{ maxWidth: "180px" }}
                      />
                    </a>

                    <a href="">
                      <LazyLoadImage
                   effect="blur"
                        src={googlePlay}
                        className="img-fluid"
                        alt="Google Play"
                        style={{ maxWidth: "180px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
 

        <Footer1 />
 </>
  )
}
export default AboutTest ;
