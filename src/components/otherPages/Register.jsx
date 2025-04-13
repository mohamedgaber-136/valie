import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAddItemMutation } from "@/Redux/api";
import 'react-phone-input-2/lib/style.css';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/authSlice";
import ToastNotifi from "../Toast";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";


export default function Register() {
    const [phone, setPhone] = useState('+90');

 const {id} = useParams()
 const {state}= useLocation()
  const navigate = useNavigate()
  const [addItem, { isLoading , isError,error}] = useAddItemMutation();
  const dispatch = useDispatch()

  const initialValues = {
    username: "",
  [state]:'',
    password: "",
    
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    [state]: state=='phone'?    Yup.string()
              .matches(/^[0-9]{10,}$/, "Phone number must be at least 10 digits")
              .required("Phone number is required"):Yup.string().email("Invalid email address").required("Email is required"),



    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
  const handleSubmit = async (values, { setSubmitting }) => {
     const endpoint = 'auth/register'
    let newData ;
     try {
       const newItem = { ...values,token:id };
      newData= await addItem({ endpoint, newItem }).unwrap();
      dispatch(setUser({
        accessToken: newData.data.accessToken,
        user: newData.data.userData,
      }));
      sessionStorage.removeItem('phone')
      sessionStorage.removeItem('email')
      navigate('/')
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
            Sign in with this account across the following sites.
          </p>
        </div>
        <div className="box-login mt-70">
          <div className="form-contact form-comment wow fadeInUp">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting ,setFieldValue }) => (
                
                
                <Form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                       
                        <Field
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder='User Name'
                          type="text"
                        />
                        <ErrorMessage
                            className="error-message text-danger"                
                           name="username"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                    {state=='phone'?<>
                    
                      <PhoneInput
                        country={'us'} // You can set the default country or handle dynamically
                        value={phone}
                        onChange={(phone) => {
                          setPhone(phone);
                          setFieldValue("phone", phone); // Update Formik value when phone changes
                        }}
                        inputClass="form-control bg-transparent  border-seconadry w-100" // Apply the same class as other form fields
                        placeholder="Phone Number"

                        isValid={false} // Optionally, use validation flags
                      />
                         <ErrorMessage name="phone" component="div" className="error-message text-danger" />
                    </>:<>  <Field
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder='Email'
                          type="email"
                        />
                        <ErrorMessage
                          className="error-message text-danger"
                          name="email"
                          component="div"
                        /></>}
                      
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                   
                        <Field
                          className="form-control"
                          id="password"
                          name="password"
                          type="password"
                          placeholder='Password'
                        />
                        <ErrorMessage
 className="error-message text-danger"                          name="password"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                   
                        <Field
                          className="form-control"
                          id="cpassword"
                          name="cpassword"
                          type="password"
                          placeholder='Confirm password'

                        />
                        <ErrorMessage
 className="error-message text-danger"                    
       name="cpassword"
                          component="div"
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
        isError && 
        
         <ToastNotifi errorMsg={error?.data?.error} classData={'error'}/>
       
      }
    </section>
  );
}
