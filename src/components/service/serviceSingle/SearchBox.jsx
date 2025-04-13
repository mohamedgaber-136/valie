import DatePickerComponent from "@/components/common/DatePicker";
import PlacePicker from "@/components/common/PlacePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import '../../../../public/assets/css/custom/searchBox.css'
import { useNavigate } from "react-router-dom";
export default function SearchBox({ disabled }) {
  const naviage = useNavigate()
  return (
    <section className="section col-12 col-md-4 rounded ">
      <div className="box-form-service-single rounded">
        <div className="box-search-ride position-unset rounded box-search-ride-style-2  wow fadeInUp  light-input">
          <div className=" w-100  border wow fadeInUp">
            
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="tab-distance"
                role="tabpanel"
                aria-labelledby="tab-distance"
              >
                <div className="box-form-search">
                  <div className="search-item search-date">
                    <div className="search-icon">
                      <span className="item-icon icon-date"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Date</label>
                      <DatePickerComponent />
                    </div>
                  </div>
                  <div className="search-item search-time">
                    <div className="search-icon">
                      <span className="item-icon icon-time"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">Time</label>
                      <TimePickerComponent />
                    </div>
                  </div>
                  <div className="search-item search-from">
                    <div className="search-icon">
                      <span className="item-icon icon-from"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">From</label>
                      <PlacePicker />
                    </div>
                  </div>
                  <div className="search-item search-to">
                    <div className="search-icon">
                      <span className="item-icon icon-to"> </span>
                    </div>
                    <div className="search-inputs">
                      <label className="text-14 color-grey">To</label>
                      <PlacePicker />
                    </div>
                  </div>
                  {
                    !disabled&& <div className="search-item search-button mb-0">
                    <button className="btn btn-primary w-100" type="submit" onClick={()=>naviage('/booking-passenger')}>
                    
                      Confirm
                    </button>
                  </div>
                  }
                 
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
