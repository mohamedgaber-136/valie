import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SideBar from "./SideBar";
import { activeInputFocus } from "@/utlis/activeInputFocus";
import { useAddItemMutation, useGetItemsQuery } from "@/Redux/api";
import ToastNotifi from "../Toast";
import SearchBox from "../service/serviceSingle/SearchBox";
import countriesData from "../../data/countries+cities.json";
import cardlogo from '../../../public/assets/imgs/payments/Color.png'
import { clearItem } from "@/Redux/cart";
export default function BookingPayment() {
  const { item } = useSelector((state) => state.cart);
  console.log(item)
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  // paymentWay: "1" for Card, "0" for Cash.
  const [paymentWay, setPaymentWay] = useState("1");
  const dispatch = useDispatch();
  const { data } = useGetItemsQuery('user/profile');

  useEffect(() => {
    activeInputFocus();
  }, []);

  const [ip, setIP] = useState("");
  useEffect(() => {
    // Fetch IP address from ipify
    const fetchIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIP(data.ip);
      } catch (error) {
        console.error("Failed to fetch IP address:", error);
      }
    };
    fetchIP();
  }, []);

  const initialValues = {
    ip: "",
    userEmail: "",
    address: "",
    userIdentity: "",
    country: "",
    city: "",
    cardHolderName: "",
    cardNumber: "",
    cardMonthExpire: "",
    cardYearExpire: "",
    cardCVV: "",
    agreeTerms: false,
    paymentWay: "1",
    cardID: "", // New field for the radio selection
  };

  const validationSchema = Yup.object({
    userEmail: Yup.string().email("Invalid email format").required("Email is required"),
    address: Yup.string().required("Address is required"),
    userIdentity: Yup.string().required("Identity Number is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    paymentWay: Yup.string().required("Payment method is required"),
    // Only validate card details if paymentWay is "1" and a card is selected (CardID not empty)
    cardHolderName: Yup.string().when(["paymentWay", "cardID"], {
      is: (paymentWay, cardID) => paymentWay === "1" && cardID == "",
      then:()=> Yup.string().required("Card Holder Name is required"),
      otherwise:()=>  Yup.string().notRequired(),
    }),
    cardNumber: Yup.string().when(["paymentWay", "cardID"], {
      is: (paymentWay, cardID) => paymentWay === "1" && cardID == "",
      then: ()=>  Yup.string()
        .matches(/^\d{16}$/, "Card Number must be 16 digits")
        .required("Card Number is required"),
      otherwise: ()=>  Yup.string().notRequired(),
    }),
    cardMonthExpire: Yup.number().when(["paymentWay", "cardID"], {
      is: (paymentWay, cardID) => paymentWay === "1" && cardID == "",
      then: ()=> Yup.number().min(1, "Invalid month").max(12, "Invalid month").required("Month is required"),
      otherwise:()=>  Yup.number().notRequired(),
    }),
    cardYearExpire: Yup.number().when(["paymentWay", "cardID"], {
      is: (paymentWay, cardID) => paymentWay === "1" && cardID == "",
      then: ()=> Yup.number().min(new Date().getFullYear(), "Invalid year").required("Year is required"),
      otherwise:()=>  Yup.number().notRequired(),
    }),
    cardCVV: Yup.string().when(["paymentWay", "cardID"], {
      is: (paymentWay, cardID) => paymentWay === "1" && cardID == "",
      then:()=>  Yup.string().matches(/^\d{3}$/, "CVV must be 3 digits").required("CVV is required"),
      otherwise: ()=> Yup.string().notRequired(),
    }),
    agreeTerms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
  });

  const [addItem, { isSuccess, isLoading, isError, error }] = useAddItemMutation();

  const handleSubmit = async (values) => {
    const storedData = JSON.parse(sessionStorage.getItem("passengerData")) || {};
    const newItem = {
      ...values,
      ip: ip,
      productID: item.id,
      ...storedData,
      pickUpDate: item.date,
      pickUpTime: item.time,
      firstName: storedData.firstName,
      lastName: storedData.lastName,
    };
    const endpointPayment = "reservation/payment";
    try {
      const newPayment = await addItem({ endpoint: endpointPayment, newItem }).unwrap();
      dispatch(clearItem());
      sessionStorage.removeItem("passengerData");
      setTimeout(() => navigate("/booking-receved", { state: newPayment.data }), 3000);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  // Inline styles for radio design


 

  return (
    <div className="box-row-tab justify-content-around row mt-50 mb-50">
      <div className="col-12 col-md-7">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">Billing Address</h3>
          <div className="form-contact form-comment wow fadeInUp">
            <Formik initialValues={initialValues}
             validationSchema={validationSchema} 
            onSubmit={handleSubmit}>
              {({ values, setFieldValue }) => (
                <Form>
                  <div className="row">
                    {/* Email Field */}
                    <div className="col">
                      <div className="form-group">
                        <label className="form-label" htmlFor="userEmail">
                          Email Address
                        </label>
                        <Field className="form-control" id="userEmail" name="userEmail" type="email" />
                        <ErrorMessage name="userEmail" component="div" className="text-danger" />
                      </div>
                    </div>
                    {/* Address Field */}
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label" htmlFor="address">
                          Address
                        </label>
                        <Field className="form-control" id="address" name="address" type="text" />
                        <ErrorMessage name="address" component="div" className="text-danger" />
                      </div>
                    </div>
                    {/* Identity Number Field */}
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label" htmlFor="userIdentity">
                          Identity Number
                        </label>
                        <Field className="form-control" id="userIdentity" name="userIdentity" type="text" />
                        <ErrorMessage name="userIdentity" component="div" className="text-danger" />
                      </div>
                    </div>
                    {/* Country Field */}
                    <div className="col-lg-6">
                      <div className="form-group">
                     
                        <Field
                          as="select"
                          className="form-control"
                          id="country"
                          name="country"
                          onChange={(e) => {
                            const selectedCountry = e.target.value;
                            setFieldValue("country", selectedCountry);
                            const selectedData = countriesData.find((country) => country.name === selectedCountry);
                            setCities(selectedData ? selectedData.cities : []);
                          }}
                        >
                          <option value="" disabled>
                            Select Country
                          </option>
                          {countriesData.map((country, index) => (
                            <option value={country.name} key={index}>
                              {country.name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage name="country" component="div" className="text-danger" />
                      </div>
                    </div>
                    {/* City Field */}
                    <div className="col-lg-6">
                      <div className="form-group">
                   
                        <Field as="select" className="form-control" id="city" name="city">
                          <option value="" disabled>
                            Select City
                          </option>
                          {cities.map((city, index) => (
                            <option value={city.name} key={index}>
                              {city.name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage name="city" component="div" className="text-danger" />
                      </div>
                    </div>
                    {/* Payment Way Selection */}
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="form-label" htmlFor="paymentWay">
                          Payment Way
                        </label>
                        <Field
                          as="select"
                          className="form-control"
                          id="paymentWay"
                          name="paymentWay"
                          onChange={(e) => {
                            const value = e.target.value;
                            setFieldValue("paymentWay", value);
                            setPaymentWay(value);
                          }}
                        >
                          <option value="1">Card</option>
                          <option value="0">Cash</option>
                        </Field>
                        <ErrorMessage name="paymentWay" component="div" className="text-danger" />
                      </div>
                    </div>

                    {/* If Card Payment is selected */}
                    {paymentWay === "1" && (
                      <>
                        {/* Custom-designed radio group */}
                        <div className="col-lg-12">
                          <div className="form-group d-flex  gap-4">
{data?.data?.payments.map((card,index)=><div className="d-flex border p-2 rounded shadow-sm align-items-center gap-2" key={index}>
  <img src={cardlogo} alt=""  width={'50px'}/>
                                <span>{card.lastFourDigits}</span>
                                <Field type="radio"  name="cardID" value={card.cardID}  />
                        </div>)   }
                        
                     
                     
                        <div  className="d-flex border p-2 rounded shadow-sm align-items-center gap-2">
                                <span>None</span>
                                <Field type="radio" name="cardID" value=""  />
                        </div>
                          
                           
                              
                       
                             
                          
                          </div>
                        </div>

                        {/* Render Card Details only if a card is selected */}
                        {values.cardID == "" && (
                          <>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <Field
                                  className="form-control"
                                  id="cardHolderName"
                                  name="cardHolderName"
                                  type="text"
                                  placeholder="Card Holder Name"
                                />
                                <ErrorMessage name="cardHolderName" component="div" className="text-danger" />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <Field
                                  className="form-control"
                                  id="cardNumber"
                                  name="cardNumber"
                                  type="text"
                                  placeholder="Card Number"
                                />
                                <ErrorMessage name="cardNumber" component="div" className="text-danger" />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="form-group">
                                <Field as="select" className="form-control" id="cardMonthExpire" name="cardMonthExpire">
                                  <option value="" disabled>
                                    Month
                                  </option>
                                  {[...Array(12).keys()].map((m) => (
                                    <option key={m + 1} value={m + 1}>
                                      {m + 1}
                                    </option>
                                  ))}
                                </Field>
                                <ErrorMessage name="cardMonthExpire" component="div" className="text-danger" />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="form-group">
                                <Field as="select" className="form-control" id="cardYearExpire" name="cardYearExpire">
                                  <option value="" disabled>
                                    Year
                                  </option>
                                  {[...Array(8).keys()].map((y) => (
                                    <option key={new Date().getFullYear() + y} value={new Date().getFullYear() + y}>
                                      {new Date().getFullYear() + y}
                                    </option>
                                  ))}
                                </Field>
                                <ErrorMessage name="cardYearExpire" component="div" className="text-danger" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <Field
                                  className="form-control"
                                  id="cardCVV"
                                  name="cardCVV"
                                  placeholder="CVV"
                                  type="text"
                                />
                                <ErrorMessage name="cardCVV" component="div" className="text-danger" />
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>

                  {/* Terms & Conditions */}
                  <div className="mt-30">
                    <label className="d-flex justify-content-start gap-2">
                      <Field type="checkbox" name="agreeTerms" />
                      I accept the Terms & Conditions *
                    </label>
                    <ErrorMessage name="agreeTerms" component="div" className="text-danger" />
                  </div>

                  <div className="mt-30">
                    <button type="submit" disabled={!values.agreeTerms} className="btn btn-primary btn-primary-big w-100">
                      Book Now
                    </button>
                  </div>

                  {isLoading && (
                    <div className="loaderParent">
                      <div className="loader"></div>
                    </div>
                  )}

                  {isSuccess && <ToastNotifi errorMsg={"Payment Success"} classData={"Success"} />}
                  {isError && <ToastNotifi errorMsg={error.data.error} classData={"error"} />}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column gap-2 col-md-4 col-12">
        <SearchBox disabled={true} />
        <SideBar item={item} />
      </div>
    </div>
  );
}
