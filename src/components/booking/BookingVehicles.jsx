import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../service/serviceSingle/SearchBox";
import { setItem } from "@/Redux/cart";

export default function BookingVehicles() {
  const { item } = useSelector((selected) => selected.cart);
  const {data} = useSelector((state) => state.products.products);
const dispatch = useDispatch()
const changeCar = (car)=>{
  dispatch(setItem(car))
}
  // Filter cars excluding the selected item
  const filteredCars = item ? data?.filter((car) => car.id !== item.id) : data;
  return (
    <div className="row">
      <div className="col-12 col-md-8 mt-50 order-2 order-md-1">
        <div className="box-tab-left">
          <div className="box-content-detail">
            <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">
              Select Your Car
            </h3>
            <div className="list-vehicles wow fadeInUp">
              {/* Render selected car first */}
              {item && (
                <div className="item-vehicle item-vehicle-active wow fadeInUp">
                  <div className="vehicle-left">
                    <div className="vehicle-image">
                      <img src={item.imgSrc} alt="luxride" />
                    </div>
                    <div className="vehicle-facilities">
                      <div className="text-fact meet-greeting">
                        Meet & Greet included
                      </div>
                      <div className="text-fact free-cancel">
                        Free cancellation
                      </div>
                      <div className="text-fact free-waiting">
                        Free Waiting time
                      </div>
                      <div className="text-fact safe-travel">
                        Safe and secure travel
                      </div>
                    </div>
                  </div>
                  <div className="vehicle-right">
                    <h5 className="text-20-medium color-text mb-10">
                      {item.title}
                    </h5>
                    <p className="text-14 color-text mb-20">{item.description}</p>
                    <div className="vehicle-passenger-luggage mb-10">
                      <span className="passenger">
                        Passengers {item.passenger}
                      </span>
                      <span className="luggage">Luggage {item.luggage}</span>
                    </div>
                    <div className="vehicle-price">
                      <h4 className="heading-30-medium color-text">
                        ${item.price}
                      </h4>
                    </div>
                    <div className="price-desc mb-20">
                      All prices include VAT, fees &amp; tip.
                    </div>
                    <button
                      className="btn btn-primary w-100"
                      style={{ backgroundColor: "#e95440" }}
                      aria-disabled
                    >
                      Selected
                      <svg
                        className="icon-16 ml-5"
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
                    </button>
                  </div>
                </div>
              )}

              {/* Render remaining cars */}
              {filteredCars?.map((elm, i) => (
                <div key={i} className="item-vehicle wow fadeInUp">
                  <div className="vehicle-left">
                    <div className="vehicle-image">
                      <img src={elm.imgSrc} alt="luxride" />
                    </div>
                    <div className="vehicle-facilities">
                      <div className="text-fact meet-greeting">
                        Meet & Greet included
                      </div>
                      <div className="text-fact free-cancel">
                        Free cancellation
                      </div>
                      <div className="text-fact free-waiting">
                        Free Waiting time
                      </div>
                      <div className="text-fact safe-travel">
                        Safe and secure travel
                      </div>
                    </div>
                  </div>
                  <div className="vehicle-right">
                    <h5 className="text-20-medium color-text mb-10">
                      {elm.title}
                    </h5>
                    <p className="text-14 color-text mb-20">{elm.description}</p>
                    <div className="vehicle-passenger-luggage mb-10">
                      <span className="passenger">
                        Passengers {elm.passenger}
                      </span>
                      <span className="luggage">Luggage {elm.luggage}</span>
                    </div>
                    <div className="vehicle-price">
                      <h4 className="heading-30-medium color-text">
                        ${elm.price}
                      </h4>
                    </div>
                    <div className="price-desc mb-20">
                      All prices include VAT, fees &amp; tip.
                    </div>
                    <button onClick={()=>changeCar(elm)} className="btn btn-primary w-100" to="/booking-extra">
                      Change
                      <svg
                        className="icon-16 ml-5"
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
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 order-1 order-md-2">
        <SearchBox disabled={false}/>
      </div>
    </div>
  );
}
