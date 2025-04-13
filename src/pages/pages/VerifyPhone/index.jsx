import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAddItemMutation } from "@/Redux/api";
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import OtpModal from "@/components/Modal/OtpModal";
import { Link } from "react-router-dom";


export default function VerifyPhone() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phone, setPhone] = useState('+90');

    const validationSchema = Yup.object({

        phone: Yup.string()
          .matches(/^[0-9]{10,}$/, "Phone number must be at least 10 digits")
          .required("Phone number is required"),
      });
 
  
  const initialValues = {
  
    phone: "",
  };
  const [addItem, {isSuccess, isLoading , isError,error}] = useAddItemMutation();
 
  const handleSubmit = async (values, { setSubmitting }) => {
     const endpoint = 'auth/otp/send'
     try {
       const newItem = { ...values };

     const newData= await addItem({ endpoint, newItem }).unwrap();
     setIsModalOpen(true)
    sessionStorage.setItem('phone', values.phone)
   
    } catch (error) {
      console.error("Failed to add item:", error);
    } finally {
      setSubmitting(false);
    }
    
  
  };
  return (
    <section className="section mt-120 mb-100">
      <div className="container-sub">
        <div className="text-center">
          <h2 className="heading-44-medium wow fadeInUp">Create Account</h2>
          <p className="color-text text-14 wow fadeInUp">
          Starting verification for phone number...          </p>
        </div>
        <div className="box-login mt-20">
          <div className="form-contact form-comment wow fadeInUp">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting ,setFieldValue }) => (
                
                
                <Form>
                    <OtpModal isModalOpen={isModalOpen} verifyType={'phone'} verifyBase={'auth/otp/verify'} changes={true} setIsModalOpen={setIsModalOpen}/>
                  <div className="row"> 
                    <div className="col-lg-12">
                      <div className="form-group">
                      <PhoneInput
                        country={'us'} // You can set the default country or handle dynamically
                        value={phone}
                        onChange={(phone) => {
                          setPhone(phone);
                          setFieldValue("phone", phone); // Update Formik value when phone changes
                        }}
                        inputClass="form-control bg-transparent  border-seconadry w-100" // Apply the same class as other form fields
                        placeholder="Phone Number"
                        inputStyle={{ borderColor: 'grey', borderWidth: 1 }}

                        isValid={false} // Optionally, use validation flags
                      />
                         <ErrorMessage name="phone" component="div" className="error-message text-danger" />
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center gap-3">
                      <button
                        className="btn btn-primary w-100"
                        type="submit"
                        disabled={isSubmitting}
                      >
Confirm                      </button>
<Link to={'/register/emailVerify'} className="btn btn-search">Register By Email</Link>

                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {isLoading&&    <div className="loaderParent">
                  <div className="loader"></div>
                  </div>}
      {
        isError && <div className=' my-2 text-center'>{
         <b className="text-danger">
          { error?.data?.error}
         </b>
        }</div>
      }
    </section>
  );
}
