import PlacePicker from '../common/PlacePicker'
import TimePickerComponent from '../common/TimePicker'
import DatePickerComponent from '../common/DatePicker'
export const SearchBox = () => {
  return (
    <div className='testDiv'>
    <div className="  ">
    <div className="search-date">
      <div className="search-icon">
        <span className="item-icon icon-date"> </span>
      </div>
      <div className="search-inputs">
        <label className="text-14 color-grey">Date</label>
        <DatePickerComponent />
      </div>
    </div>
    <div className="search-time">
      <div className="search-icon">
        <span className="item-icon icon-time"> </span>
      </div>
      <div className="search-inputs">
        <label className="text-14 color-grey">Time</label>
        <TimePickerComponent />
      </div>
    </div>
    <div className="search-from">
      <div className="search-icon">
        <span className="item-icon icon-from"> </span>
      </div>
      <div className="search-inputs">
        <label className="text-14 color-grey">From</label>
        <PlacePicker />
      </div>
    </div>
    <div className="search-to">
      <div className="search-icon">
        <span className="item-icon icon-to"> </span>
      </div>
      <div className="search-inputs">
        <label className="text-14 color-grey">To</label>
        <PlacePicker />
      </div>
    </div>
    {
      disabled&& <div className="search-button">
      <button className="btn btn-search" type="submit">
        <img src="/assets/imgs/template/icons/search.svg" alt="luxride" />
        Search
      </button>
    </div>
    }
   
  </div>
  </div>
  )
}
