import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function NotFound() {
  return (
    <>
      <section className="section mt-120 mb-100" dir="rtl">
        <div className="container-sub">
          <div className="text-center">
            <img
              className="wow fadeInUp"
              src="/assets/imgs/page/404/404.svg"
              alt="luxride"
            />
            <h2 className="heading-44-medium color-text mt-50 mb-20 wow fadeInUp">
              عذرًا! يبدو أنك تائه.
            </h2>
            <p className="color-text text-16 mb-25 wow fadeInUp">
              الصفحة التي تبحث عنها غير متوفرة. حاول البحث مرة أخرى أو العودة إلى الصفحة الرئيسية.
            </p>
            <Link className="btn btn-primary pl-50 pr-50 wow fadeInUp" to="/">
              العودة إلى الصفحة الرئيسية
              <svg
                className="icon-16 mr-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
