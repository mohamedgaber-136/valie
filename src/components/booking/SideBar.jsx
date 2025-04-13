import PropTypes from 'prop-types';

export default function SideBar({ item }) {
  return (
    <div className="box-tab-right p-0 w-100">
      <div className="sidebar wow fadeInUp">
        <h4 className="text text-start my-1">{item?.brand}</h4>
        <ul className="list-prices list-prices-2">
          <li>
            <span className="text"> vehicle Price</span>
            <span className="price">${Number(item?.price)}</span>
          </li>
          <li>
            <span className="text">Selected vehicle</span>
            <span className="price fs-6">{item?.title}</span>
          </li>
          <li>
            <span className="text"> Passenger</span>
            <span className="price fs-6">{Number(item?.passenger)}</span>
            </li>
          <li>
            <span className="text"> Luggage</span>
            <span className="price fs-6">{Number(item?.luggage)}</span>
          </li>
        </ul>
        <div className="border-bottom mt-30 mb-15"></div>
        <ul className="list-prices">
          <li>
            <span className="text text-20-medium">Total</span>
            <span className="price text-20-medium">${Number(item?.price)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Prop validation using PropTypes
SideBar.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    price:  PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    passenger: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Accept both string and number
    luggage:  PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

