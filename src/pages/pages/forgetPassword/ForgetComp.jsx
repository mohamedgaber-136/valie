import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useAddItemMutation } from "@/Redux/api";
import { useState } from "react";
import 'react-phone-input-2/lib/style.css';
import OtpModal from "@/components/Modal/OtpModal";
export const ForgetComp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

     const validationSchema = Yup.object().shape({
       email: Yup.string()
         .email("Invalid email format")
         .required("Email is required"),
     
     });
 
  
  const initialValues = {
    email: "",
  };
  const [addItem, { isLoading , isError,error}] = useAddItemMutation();
 
  const handleSubmit = async (values, { setSubmitting }) => {
     const endpoint = 'auth/forget-password'
     try {
       const newItem = { ...values };
     const newData= await addItem({ endpoint, newItem }).unwrap();
     sessionStorage.setItem('token',newData.data.token)
     setIsModalOpen(true)
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
          <h2 className="heading-44-medium wow fadeInUp">Forget Passowrd</h2>
          <p className="color-text text-14 wow fadeInUp">
          Enter Your Email .....         </p>
        </div>
        <div className="box-login mt-70">
          <div className="form-contact form-comment wow fadeInUp">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting ,values }) => (
                
                
                <Form>
                    <OtpModal isModalOpen={isModalOpen} verifyType={'forget'}  verifyBase ={'auth/forget-password/verify'} setIsModalOpen={setIsModalOpen}/>
                    <div className="col-lg-12">
                                     <div
                                       className={`form-group ${
                                         values.email ? "focused" : ""
                                       }`}
                                     >
                                       <label className="form-label" htmlFor="email">
                                         Email
                                       </label>
                                       <Field
                                         className={`form-control ${
                                           values.email ? "filled" : ""
                                         }`}
                                         id="email"
                                         name="email"
                                         type="text"
                                       />
                                       <ErrorMessage
                                         name="email"
                                         component="div"
                                         className="text-danger"
                                       />
                                     </div>
                                   </div>
                                   <div className="col-lg-12">
                      <button
                        className="btn btn-primary w-100"
                        type="submit"
                        disabled={isSubmitting}
                      >
Confirm                      </button>
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
