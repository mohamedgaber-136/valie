import React, { useState } from 'react';
import { Input, Button, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAddItemMutation } from '@/Redux/api';

const OTPInputField = ({ verifyBase, verifyType, changes, setIsModalOpen }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // State to hold OTP input values
  const navigate = useNavigate();
  const [addItem, { isSuccess, isLoading, isError, error }] = useAddItemMutation();

  /**
   * Handle OTP input changes.
   * @param {Object} e - The event object
   * @param {number} index - The index of the OTP input field
   */
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return; // Allow only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input if a digit is entered
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  /**
   * Handle key down event on OTP input fields.
   * @param {Object} e - The event object
   * @param {number} index - The index of the OTP input field
   */
  const handleKeyDown = (e, index) => {
    // Move focus to previous input if Backspace is pressed and current field is empty
    if (e.key === 'Backspace' && otp[index] === '') {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }

    // Handle Tab key for navigating to the next input
    if (e.key === 'Tab') {
      e.preventDefault(); // Prevent default tab behavior
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  /**
   * Handle OTP submission.
   * Depending on verifyType, it sends the OTP code to the appropriate endpoint (phone, email, or token).
   */
  console.log(changes)
  const handleSubmit = async () => {
    const endpoint = verifyBase;
    let newData;
    const phone = sessionStorage?.getItem('phone') || '';
    const email = sessionStorage?.getItem('email') || '';

    try {
      // Handle different verification types (phone, email, token)
      if (verifyType === 'phone') {
        const newItem = { code: otp.join(''), 'phone': phone };
        newData = await addItem({ endpoint, newItem }).unwrap();

        if (!changes) {
          navigate(`Detalis/${newData?.data?.token}`, { state: 'email' });
        }
        setIsModalOpen(false);
      } else if (verifyType === 'email') {
        const newItem = { code: otp.join(''), 'email': email };
        newData = await addItem({ endpoint, newItem }).unwrap();
        if (!changes) {
          navigate(`/register/Detalis/${newData.data.token}`, { state: 'phone' });
        }
        setIsModalOpen(false);
      } else {
        const token = sessionStorage?.getItem('token') || '';
        const newItem = { code: otp.join(''), 'token': token };
        newData = await addItem({ endpoint, newItem }).unwrap();
        setIsModalOpen(false);
        navigate(`changePassword/${newItem.token}`);
      }
      sessionStorage.removeItem('phone');
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
      <h3 className='mb-2'>Mobile Phone Verification</h3>
      <small className='mb-2 text-secondary my-0 text-center'>
        Enter the 6-digit verification code that was sent to <br /> your phone number
      </small>
      <small className='mb-2 text-secondary my-0 text-center'>
        Your OTP expires after 10 minutes
      </small>

      <Row gutter={8}>
        {otp.map((value, index) => (
          <Col key={index}>
            <Input
              id={`otp-input-${index}`}
              style={{
                width: '40px',
                height: '40px',
                textAlign: 'center',
                fontSize: '20px',
                border: 0,
                borderRadius: '8px',
                backgroundColor: 'rgba(200, 200, 200, 0.2)',
              }}
              maxLength={1}
              value={value}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-end mt-3 w-100">
        <Button
          className={`btn ${otp.some((input) => input === '') ? 'btn-default text-dark ' : 'btn-default text-white bg-dark '}border`}
          onClick={handleSubmit}
          disabled={otp.some((input) => input === '')}
        >
          Submit OTP
        </Button>
      </div>
      {isLoading && (
        <div className="loaderParent">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default OTPInputField;
