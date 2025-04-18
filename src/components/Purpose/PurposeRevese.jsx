// Purpose.jsx
import './purpose.css';
import rightimg from '../../../public/assets/imgs/icons/purposeRightImg.png';

export const PurposeReverse = ({ title, subtitle, data, image }) => {
  return (
    <div className="grandparen">
      <div className="overflow-x-hidden position-relative PurposeContainer my-2 my-md-5">
        <div className="row gap-3 p-0 m-0 align-items-center gap-md-0">
        <div className="col-12  col-md-6 p-0 m-0">
            <img src={image} className="floatImg2" alt="" />
          </div>
          <div className="col-12 d-flex flex-column gap-3 p-0 m-0 col-md-6">
            <h4 className="title">{title}</h4>
            <h2 className="MainTitle">{subtitle}</h2>
            <div className="d-flex flex-column gap-1">
              {data.map((item, index) => (
                <p className="contentPurpose" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
      
        </div>
        <img src={rightimg} className="leftImg" alt="" />
      </div>
    </div>
  );
};
