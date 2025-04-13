import "../../../../public/assets/css/custom/VisaCard.css"; // Ensure you have the corresponding CSS file

const VisaCard = ({cardAssociation,lastFourDigits}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="heading_8264 fw-bold">{cardAssociation}</p>
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48">
            <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
            <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
            <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48C20.376,15.05,18,19.245,18,24z"></path>
          </svg>
          <svg className="chip" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
          </svg>
          <svg className="contactless" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
          </svg>
        </div>
        <div className="flip-card-back">
          <p className="card-number">**** **** **** {lastFourDigits}</p>
   
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
