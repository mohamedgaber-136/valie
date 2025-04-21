import { activeInputFocus } from "@/utlis/activeInputFocus";
import { useEffect, useState } from "react";
import '../../../public/assets/css/custom/contact.css'
import right from '../../../public/assets/imgs/rightContact.png'
import left from '../../../public/assets/imgs/leftContact.png'
export default function ContactForm() {

  useEffect(() => {
    // Focus event
    activeInputFocus();
  }, []);
  return (
    <section className="section px-2 my-5 flex jusity-center  " >
      <div className="container-sub bg-Contact  position-relative rounded-25  p-4 p-md-5 rounded">
      <img src={left} alt=""  className="leftImgContact"/>
      <img src={right} alt="" className="rightImgContact" />
        <div className="">
          <h3 className="mb-10 text-center  text-white fw-bold wow fadeInUp" style={{                     fontFamily: 'ge-light',
}}>
تواصل معنا الان          </h3>
          <div className="row gap-2  justify-content-center align-items-start">

          <div style={{zIndex:2}} className="form-contact position-relative  wow fadeInUp col-12 p-md-4  col-md-6 form-comment wow rounded-5 rounded p-2 fadeInUp">
          
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                  
                    <label className="form-label newLabel" htmlFor="FirstName" style={{                     fontFamily: 'ge-light',
}}>
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
                    <label className="form-label newLabel" htmlFor="email" style={{                     fontFamily: 'ge-light',
}}>
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
                <label className="form-label newLabel fw-light" htmlFor="phone" style={{                     fontFamily: 'ge-light',
}}>
                       التليفون
                    </label>
                    <input
                      className="form-control bg-transperncy border-0"
                      id="phone "
                      type="text"
                      placeholder=""
                    />
                     
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label newLabel" htmlFor="website" style={{                     fontFamily: 'ge-light',
}}>
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
                    <label className="form-label newLabel" htmlFor="message" style={{                     fontFamily: 'ge-light',
}}>
                    رسالتك
                    </label>
                    <textarea className="bg-transperncy form-control border-0 textAreaField" id="message"></textarea>
                  </div>
                </div>
                <div className="col-lg-12 d-flex justify-content-center">
                  <button className="btnSend" type="submit" style={{                     fontFamily: 'ge-light',
}}>
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
