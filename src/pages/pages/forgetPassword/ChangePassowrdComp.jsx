import ToastNotifi from "@/components/Toast";
import { useAddItemMutation } from "@/Redux/api";
import { setUser } from "@/Redux/authSlice";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function ChangePassowrdComp() {
  const dispatch = useDispatch();
const navigate = useNavigate()
  // Validation schema
  const validationSchema = Yup.object().shape({
Newpassword: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("Newpassword"), null], "Passwords must match")
    .required("Confirm password is required"),
  });

  // Initial values
  const initialValues = {
    Newpassword : "",
  };
  const [addItem, { isLoading ,isError ,error } ] = useAddItemMutation();

  // Form submission handler
  const handleSubmit = async(values) => {
    const token = sessionStorage.getItem('token') || ''
    const endpoint ='auth/forget-password/update'
    try {
      const response = await addItem({endpoint,newItem:{'token':token,'password':values.Newpassword}}).unwrap();
                      sessionStorage.removeItem('token')
      // Log the entire response for debugging

      if (response.status === 200 && response.data) {
        dispatch(setUser({
          accessToken: response.data.accessToken,
          user: response.data.userData,
        }));
        navigate('/');
      } else {
        console.error('Unexpected response structure:', response);
      }
    } catch (error) {
      console.error('changepassowrd failed:', error);

      // Detailed error handling with AxiosError check
      if (axios.isAxiosError(error)) {
        console.error('Error details from backend:', error.response?.data);
      } else {
        console.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <section className="section mt-120 mb-100">
      <div className="container-sub">
        <div className="text-center">
          <h2 className="heading-44-medium wow fadeInUp">ForgetPassword</h2>
          <p className="color-text text-14 wow fadeInUp">
            Enter New Password ...
          </p>
          {
            isError&& <ToastNotifi errorMsg={error?.data?.error}/>
          }
     
        </div>
        <div className="box-login mt-70">
          <div className="form-contact form-comment wow fadeInUp">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div
                        className={`form-group ${
                          values.Newpassword ? "focused" : ""
                        }`}
                      >
                        <label className="form-label" htmlFor="Newpassword">
                          New Password
                        </label>
                        <Field
                          className={`form-control ${
                            values.Newpassword ? "filled" : ""
                          }`}
                          id="Newpassword"
                          name="Newpassword"
                          type="password"
                        />
                        <ErrorMessage
                          name="Newpassword"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div
                        className={`form-group ${
                          values.cpassword ? "focused" : ""
                        }`}
                      >
                        <label className="form-label" htmlFor="cpassword">
                         Confirm Password
                        </label>
                        <Field
                          className={`form-control ${
                            values.cpassword ? "filled" : ""
                          }`}
                          id="cpassword"
                          name="cpassword"
                          type="password"
                        />
                        <ErrorMessage
                          name="cpassword"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                
                    <div className="col-lg-12">
                      <button className="btn btn-primary w-100" type="submit">
                    Confirm
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
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {isLoading&&    <div className="loaderParent">
                  <div className="loader"></div>
                  </div>}
    </section>
  );
}
