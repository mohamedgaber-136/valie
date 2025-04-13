import  { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import '../../../public/assets/css/custom/toase.css'
function ToastNotifi({errorMsg,classData}) {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Toast show={showA} onClose={toggleShowA} className={classData}  delay={3000} autohide>
            <button className='btn closeBtnToast ' onClick={toggleShowA} ><i className="fa-solid fa-xmark"></i></button>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className='d-flex justify-content-start'>{errorMsg}</Toast.Body>
        </Toast>
      </Col>
    
    </Row>
  );
}

export default ToastNotifi;