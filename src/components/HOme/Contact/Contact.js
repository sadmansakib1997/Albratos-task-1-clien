import React from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelopeOpen,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="mea">
        <div className="container">
          <h1 className="txt ">Contact Me</h1>

          <div className="row"></div>
        </div>
        <div>
          <h1 className="c-title font-bold">Have You Any Question?</h1>
          <h1 className="c-sub font-bold">I'm At Your Services</h1>
        </div>
        <div className="cow display flex client-form">
          <div className="c-info-item padd-15">
            <div className="c-icon">
              <span>
                <FaPhoneAlt />
              </span>
            </div>
            <h1>Call Us Now</h1>
            <p>0178853966</p>
          </div>
          <div className="c-info-item padd-15">
            <div className="c-icon">
              <span>
                <FaMapMarkerAlt />
              </span>
            </div>
            <h1>Address</h1>
            <p>Dhaka,Bangladesh</p>
          </div>
          <div className="c-info-item padd-15">
            <div className="c-icon">
              <span>
                <FaEnvelopeOpen />
              </span>
            </div>
            <h1>Email</h1>
            <p>Sadmansakib670@gmail.com</p>
          </div>
          <div className="c-info-item padd-15">
            <div className="c-icon">
              <span>
                <FaGlobe />
              </span>
            </div>
            <h1>Website</h1>
            <p>Www.sakib.com</p>
          </div>
        </div>

        {/* <h1 className="c-title font-bold">Have You Any Question?</h1>
        <h1 className="c-sub font-bold">I'm At Your Services</h1>
        <div className="cow display flex">
          <div className="c-info-item padd-15">
            <div className="c-icon">
              <span>
                <FaPhoneAlt />
              </span>
            </div>
            <h1>Call Us Now</h1>
            <p>0178853966</p>
          </div>
          <div className="c-info-item padd-15">
            <div className="c-icon">
              <span>
                <FaMapMarkerAlt />
              </span>
            </div>
            <h1>Address</h1>
            <p>Dhaka,Bangladesh</p>
          </div>
          <div className="c-info-item padd-15">
            <div className="c-icon">
              <span>
                <FaEnvelopeOpen />
              </span>
            </div>
            <h1>Email</h1>
            <p>Sadmansakib670@gmail.com</p>
          </div>
          <div className="c-info-item padd-15">
            <div className="c-icon">
              <span>
                <FaGlobe />
              </span>
            </div>
            <h1>Website</h1>
            <p>Www.sakib.com</p>
          </div>
        </div> */}
        <h1 className="c-title font-bold">Send Me An Email</h1>
        <h1 className="c-sub font-bold">I'm very responsive to message</h1>
        <div className="client-form">
          <form
            className="mago"
            action="https://formsubmit.co/4888a65f4998a62f62b701591f22f288"
            method="POST"
          >
            <div className="display flex">
              <div className="ee form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-2xl font-semibold text-white ">
                    Email:
                  </span>
                </label>
                <input
                  type="email"
                  name="Email"
                  className="input border-fuchsia-500"
                />
              </div>
              <div className="ee form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white  text-2xl font-semibold">
                    Name:
                  </span>
                </label>
                <input
                  type="text"
                  name="Name"
                  className="input border-fuchsia-500"
                />
              </div>
            </div>
            <div className="display flex mb-5">
              <div className="ee form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white  text-2xl font-semibold">
                    Text:
                  </span>
                </label>
                <textarea
                  name="Text"
                  className="textarea textarea-accent"
                  placeholder="Text"
                ></textarea>
              </div>
              <div className="ee form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white  text-2xl font-semibold">
                    Subject:
                  </span>
                </label>
                <textarea
                  name="Subject"
                  className="textarea textarea-accent"
                  placeholder="Subject"
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-success text-white font-bold text-xl"
              value="send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

<div>
  <h1 className="c-title font-bold">Have You Any Question?</h1>
  <h1 className="c-sub font-bold">I'm At Your Services</h1>
</div>;
