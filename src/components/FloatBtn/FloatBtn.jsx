import '../../../public/assets/css/custom/FloatBtn.css';
import whatsapp from '../../../public/assets/imgs/icons/icons8-whatsapp.svg';

export const FloatBtn = () => {
  const handleClick = () => {
    window.open("https://wa.me/905540172222", "_blank");
  };

  return (
    // From Uiverse.io by Creatlydev
    <button className="floatBtn" onClick={handleClick}>
      <p className="button__text">
        <span style={{ "--index": 0 }}>W</span>
        <span style={{ "--index": 1 }}>H</span>
        <span style={{ "--index": 2 }}>A</span>
        <span style={{ "--index": 3 }}>T</span>
        <span style={{ "--index": 4 }}>S</span>
        <span style={{ "--index": 5 }}>A</span>
        <span style={{ "--index": 6 }}>P</span>
        <span style={{ "--index": 7 }}>P </span>
        <span style={{ "--index": 8 }}></span>
        <span style={{ "--index": 9 }}>C</span>
        <span style={{ "--index": 10 }}>O</span>
        <span style={{ "--index": 11 }}>N </span>
        <span style={{ "--index": 12 }}>T</span>
        <span style={{ "--index": 13 }}>A</span>
        <span style={{ "--index": 14 }}>C</span>
        <span style={{ "--index": 15 }}>T</span>
      </p>

      <div className="button__circle">
        <img src={whatsapp} alt="WhatsApp" />
      </div>
    </button>
  );
};
