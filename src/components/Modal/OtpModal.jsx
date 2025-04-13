import PropTypes from 'prop-types'; // Import PropTypes
import { Modal } from 'antd';
import OtpComp from './OtpComp';

const OtpModal = ({ setIsModalOpen, isModalOpen, verifyBase, verifyType ,changes}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
console.log(changes,'changhes')
  return (
    <>
      <Modal
        className="p-0"
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false} // Prevent closing on overlay click
      >
        <OtpComp verifyBase={verifyBase} verifyType={verifyType} changes={changes} setIsModalOpen={setIsModalOpen}/>
      </Modal>
    </>
  );
};

// Prop validation
OtpModal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired, // Function to toggle modal visibility
  isModalOpen: PropTypes.bool.isRequired, // Boolean value to control modal visibility
  verifyBase: PropTypes.string.isRequired, // String for base verification (e.g., phone number or email)
  verifyType: PropTypes.string.isRequired, // String for the type of verification
};

export default OtpModal;
