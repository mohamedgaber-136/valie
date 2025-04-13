import { useLoginMutation } from "@/Redux/api";
import { setUser } from "@/Redux/authSlice";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ToastNotifi from "../Toast";

export default function Login() {
  const dispatch = useDispatch();
const navigate = useNavigate()
  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Initial values
  const initialValues = {
    email: "",
    password:"",
  };
  const [login, { isLoading ,isError ,error } ] = useLoginMutation();

  // Form submission handler
  const handleSubmit = async(values) => {
    try {
      const response = await login(values).unwrap();

      // Log the entire response for debugging

      if (response.status === 200 && response.data) {
        dispatch(setUser({
          accessToken: response.data.accessToken,
          user: response.data.userData,
          refreshToken:response.data.refreshToken
        }));
        navigate('/');
      } else {
        console.error('Unexpected response structure:', response);
      }
    } catch (error) {
      console.error('Login failed:', error);

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
          <h2 className="heading-44-medium wow fadeInUp">Sign in</h2>
          <p className="color-text text-14 wow fadeInUp">
            Sign in with this account across the following sites.
          </p>
          {
            isError&& <ToastNotifi errorMsg={error?.data?.error} classData={'error'}/>
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
                      <div
                        className={`form-group ${
                          values.password ? "focused" : ""
                        }`}
                      >
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <Field
                          className={`form-control ${
                            values.password ? "filled" : ""
                          }`}
                          id="password"
                          name="password"
                          type="password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-20">
                        <div className="d-flex justify-content-end">
                         
                          <Link className="text-14 color-text" to="/forgetpassword">
                            Lost your password?
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="btn btn-primary w-100" type="submit">
                        Sign in
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
               
                    <div className="mt-0 text-center">
                      <span className="text-14-medium color-text">
                        Not signed up?{" "}
                      </span>
                      <Link className="text-14-medium color-text" to="/register">
                        Create an account
                      </Link>
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
