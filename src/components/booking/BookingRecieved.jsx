import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BookingRecieved() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state) return null; // Prevents rendering if state is null before redirection

  const infoData = [
    { id: 1, label: "Order Number", value: `#${state?.invoice?.orderNumber}` },
    { id: 2, label: "Date", value: new Date(state?.invoice?.date).toLocaleDateString() },
    { id: 3, label: "Total", value: `$${state?.invoice?.price}` },
  ];
  const rideData = [
    { id: 1, topText: "Pick Up Address", bottomText: state?.invoice?.pickUpLocation },
    { id: 2, topText: "Drop Off Address", bottomText: state?.invoice?.dropOffLocation },
    { id: 3, topText: "Pick Up Date", bottomText: state?.invoice?.pickUpDate },
    { id: 4, topText: "Pick Up Time", bottomText: state?.invoice?.pickUpTime },
  ];
  const personalData = [
    { id: 1, topText: "First name", bottomText: state?.invoice?.firstName },
    { id: 2, topText: "Last name", bottomText: state?.invoice?.lastName },
    { id: 3, topText: "Email", bottomText: state?.invoice?.email },
    { id: 4, topText: "Phone", bottomText: state?.invoice?.phone },
    { id: 5, topText: "City", bottomText: state?.invoice?.city },
    { id: 6, topText: "Country", bottomText: state?.invoice?.country },
  ];

  return (
    <section className="section">
      <div className="container-sub">
        <div className="box-completed-booking">
          <div className="text-center wow fadeInUp">
            <img className="mb-20" src="/assets/imgs/page/booking/completed.png" alt="luxride" />
            <h4 className="heading-24-medium color-text mb-10">
              System, your order was submitted successfully!
            </h4>
            <p className="text-14 color-grey mb-40">
              Booking details have been sent to: {state?.invoice?.email}
            </p>
          </div>
          <div className="box-info-book-border row wow fadeInUp">
            {infoData.map((elm) => (
              <div key={elm.id} className="col-4 text-center">
                <span className="color-text text-14">{elm.label}</span>
                <br />
                <span className="color-text text-14-medium">{elm.value}</span>
              </div>
            ))}
          </div>
          <div className="box-booking-border wow fadeInUp">
            <h6 className="heading-20-medium color-text">Reservation Information</h6>
            <ul className="list-prices">
              {rideData.map((elm) => (
                <li key={elm.id}>
                  <span className="text-top">{elm.topText}</span>
                  <span className="text-bottom">{elm.bottomText}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="box-booking-border wow fadeInUp">
            <h6 className="heading-20-medium color-text">Selected Car</h6>
            <div className="mt-20 mb-20 text-center">
              <img src={state?.invoice?.product?.imgSrc} alt={state?.invoice?.product?.brand} />
            </div>
            <ul className="list-prices">
              <li>
                <span className="text-top">Class</span>
                <span className="text-bottom">{state?.invoice?.product?.title}</span>
              </li>
              <li>
                <span className="text-top">Cars</span>
                <span className="text-bottom">{state?.invoice?.product?.brand}</span>
              </li>
            </ul>
          </div>
          <div className="box-booking-border wow fadeInUp">
            <h6 className="heading-20-medium color-text">Passenger Information</h6>
            <ul className="list-prices">
              {personalData.map((elm) => (
                <li key={elm.id}>
                  <span className="text-top">{elm.topText}</span>
                  <span className="text-bottom">{elm.bottomText}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex justify-content-center w-100">
            <button className="btn btn-search" onClick={() => navigate("/")}>
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
