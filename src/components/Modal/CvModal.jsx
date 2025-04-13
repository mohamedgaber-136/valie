import { activeInputFocus } from '@/utlis/activeInputFocus';
import {  Modal } from 'antd';
import { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
const CvModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
   const [phone, setPhone] = useState("+90");
  
  useEffect(() => {
    // Focus event
    activeInputFocus();
  }, []);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
<button className='btn btn-search ' onClick={()=>{
    setIsModalOpen(true)
}}>Send us Your Cv</button>
      <Modal className='p-0'  footer={''}  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className="form-contact  col-12  form-comment wow rounded-5 rounded p-4 fadeInUp">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
              <div className="col-12 ">
                <h2 className='text-center mb-10'>Work With Us</h2>
              </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                 
                    <input
                      className="form-control"
                      id="FirstName"
                      placeholder="FirstName"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                 
                    <input
                      className="form-control"
                      id="LastName"
                      placeholder="Last Name"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                   
                    <input
                      className="form-control"
                      id="email"
                      type="text"
                      placeholder='email'
                
                    />
                  </div>
                </div>
                <div className="col-12">
                <div className="form-group">
                      <PhoneInput
                        country={"us"}
                        value={phone}
                        onChange={(phone) => {
                          setPhone(phone);
                        }}
                        inputClass="form-control bg-transparent border-secondary w-100"
                        placeholder="Phone Number"
                        isValid={false}
                      />
                     
                    </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    
                    <input
                      className="form-control"
                      id="subject"
                      type="file"
                      placeholder="cv"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    
                    <textarea className="form-control" id="message" placeholder='message'></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button className="btn btn-primary w-100" type="submit">
                    send
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
            </form>
          </div>
      </Modal>
    </>
  );
};
export default CvModal;