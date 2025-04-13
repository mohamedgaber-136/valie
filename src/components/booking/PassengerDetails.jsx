import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import SideBar from "./SideBar";
import PhoneInput from "react-phone-input-2";
import SearchBox from "../service/serviceSingle/SearchBox";
import { setItem } from "@/Redux/cart";
import { cars } from "@/data/cars";

// Yup Validation Schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "First name must contain only letters")
    .max(15, "First name cannot exceed 15 characters")
    .required("First name is required"),
  
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last name must contain only letters")
    .max(15, "Last name cannot exceed 15 characters")
    .required("Last name is required"),
  
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\+?\d{1,3}[- ]?\d{1,4}[- ]?\d{4}[- ]?\d{4}$/, "Phone number is not valid"),
  
  passengers: Yup.number().required("Please select the number of passengers"),
  
  luggage: Yup.number().required("Please select the number of luggage"),
  
  notes: Yup.string().max(255, "Notes cannot exceed 255 characters"),
});


export default function PassengerDetails() {
  const { item } = useSelector((selector) => selector.cart);
 const luggageOption= cars.find((car)=>car.id==item.id).luggage
 const PassengerOption= cars.find((car)=>car.id==item.id).passenger
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    passengers: "1",
    luggage: "0",
    notes: "",
 
  });

  const [phone, setPhone] = useState("+90");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Check sessionStorage for passengerData
    const storedData = sessionStorage.getItem("passengerData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setInitialValues(parsedData); // Update initial values if data exists
      setPhone(parsedData.phone || "+90"); // Set phone if available
    }
  }, []);

  return (
    <div className="box-row-tab justify-content-around row mt-50 mb-50">
      <div className="col-12 col-md-7">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">
            Passenger Details
          </h3>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Handle form submission here
              dispatch(
                setItem({
                  passenger: values.passengers,
                  luggage: values.luggage,
                })
              );
              values.pickUpDate=item.date,
              values.pickUpTime=item.time,
              values.pickUpLocation='turkey',
              values.dropOffLocation='turkey'
              sessionStorage.setItem("passengerData", JSON.stringify(values));
              navigate("/booking-payment");
            }}
          >
            {({ setFieldValue }) => (
              <Form className="form-contact form-comment wow fadeInUp">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <Field
                        name="firstName"
                        placeholder="First Name"
                        id="firstName"
                        className="form-control"
                        type="text"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <Field
                        name="lastName"
                        placeholder="Last Name"
                        id="lastName"
                        className="form-control"
                        type="text"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <PhoneInput
                        country={"us"}
                        value={phone}
                        onChange={(phone) => {
                          setPhone(phone);
                          setFieldValue("phone", phone);
                        }}
                        inputClass="form-control bg-transparent border-secondary w-100"
                        placeholder="Phone Number"
                        isValid={false}
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">
                  Options
                </h3>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <Field
                        as="select"
                        name="passengers"
                        id="passengers"
                        className="form-control"
                      >
                        <option defaultValue="" disabled selected>
                          Passengers
                        </option>
                     
                        {[...Array(PassengerOption || 10)].map((_, index) => (
                          <option key={index} defaultValue={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="passengers"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <Field
                        as="select"
                        name="luggage"
                        id="luggage"
                        className="form-control"
                      >
                        <option defaultValue="" disabled selected>
                          Luggage
                        </option>
                        <option defaultValue="0" >
                          0
                        </option>
                        {[...Array(luggageOption || 10)].map((_, index) => (
                          <option key={index} defaultValue={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="luggage"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                   
                      <Field
                        as="textarea"
                        placeholder=" Notes to driver"
                        name="notes"
                        id="notes"
                        className="form-control"
                        rows="5"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-30 mb-120 wow fadeInUp">
                  <button type="submit" className="btn btn-primary btn-primary-big w-100">
                    Continue
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
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="d-flex flex-column gap-2 col-md-4 col-12">
        <SearchBox disabled={true} />
        <SideBar item={item} />
      </div>
    </div>
  );
}
