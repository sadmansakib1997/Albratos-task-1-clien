import React from "react";
import "./Service.css";
import { FaMobileAlt, FaLaptopCode, FaPalette } from "react-icons/fa";

const Service = () => {
  return (
    <div className="services">
      <div className="me">
        <h1 className="txt ">Service</h1>
        <div className="contain">
          <div className="row"></div>
          <div className="total">
            <div className="second ">
              <div className="service-item  padd-15">
                <div className="sevice-inner">
                  <div className="icon">
                    <FaMobileAlt />
                  </div>
                  <h1>Web Design</h1>
                  <p>
                    Responsive Web Design <br /> React Web App Development{" "}
                    <br /> MERN Stack Web App Development
                  </p>
                </div>
              </div>
              <div className="service-item  padd-15">
                <div className="sevice-inner">
                  <div className="icon">
                    <FaPalette />
                  </div>
                  <h1>Web Development</h1>
                  <p>
                    Clear and Effective CTAs <br /> 7. Optimized for Search
                    Engines <br /> Single Page Application (SPA)
                  </p>
                </div>
              </div>
              <div className="service-item  padd-15">
                <div className="sevice-inner">
                  <div className="icon">
                    <FaLaptopCode />
                  </div>
                  <h1>Web Application</h1>
                  <p>
                    Reporting & Analytics <br /> User Rights Management Document{" "}
                    <br />
                    Management System
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
