import { activeInputFocus } from "@/utlis/activeInputFocus";
import { useEffect, useState } from "react";
import '../../../public/assets/css/custom/contact.css'

import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
export default function ContactForm() {
    const [phone, setPhone] = useState("+966");

  useEffect(() => {
    // Focus event
    activeInputFocus();
  }, []);
  return (
    <section className="section px-2 my-5 flex jusity-center ">
      <div className="container-sub bg-Contact  rounded-25 p-5 rounded">
        <div className="">
          <h3 className="mb-10 text-center text-white fw-bold wow fadeInUp">
تواصل معنا الان          </h3>
          <div className="row gap-2 justify-content-center align-items-start">

          <div className="form-contact  wow fadeInUp col-12  col-md-6 form-comment wow rounded-5 rounded p-4 fadeInUp">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                  
                    <label className="form-label newLabel" htmlFor="FirstName">
                    الاسم
                    </label>
                    <input
                      className="form-control bg-transperncy border-0 "
                      id="FirstName"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
               
                <div className="col-lg-6 col-md-6">
                  <div className="form-group ">
                    <label className="form-label newLabel" htmlFor="email">
                      البريد الالكتروني
                    </label>
                    <input
                      className="bg-transperncy  border-0 form-control"
                      id="email"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="form-group">
                      <PhoneInput
                        country={"sa"}
                        value={phone}
                        onChange={(phone) => {
                          setPhone(phone);
                        }}
                        inputClass="form-control bg-transperncy  w-100 border-0"
                        placeholder="التليفون"
                        isValid={false}
                      />
                     
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label newLabel" htmlFor="website">
                      الموقع الالكتروني
                    </label>
                    <input
                      className="form-control bg-transperncy border-0"
                      id="website "
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="form-label newLabel" htmlFor="message">
                    رسالتك
                    </label>
                    <textarea className="bg-transperncy form-control border-0 textAreaField" id="message"></textarea>
                  </div>
                </div>
                <div className="col-lg-12 d-flex justify-content-center">
                  <button className="btnSend" type="submit">
                   ارسل الان
                
                  </button>
                </div>
                {/*
             
                <div className="d-flex justify-content-start w-100 p-2">

                <ReCAPTCHA sitekey={site_Key} onChange={val=>setCapVal(val)}/>
                </div>
             
                
                */}
              </div>
            </form>
          </div>

          </div>
        </div>
      </div>
  
    </section>
  );
}
