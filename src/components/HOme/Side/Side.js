import React from "react";
import "./Side.css";
import TypeWriterEffect from "react-typewriter-effect";
import Typewriter from "typewriter-effect";
import {
  FaHome,
  FaUserAlt,
  FaList,
  FaBriefcase,
  FaComments,
  FaBars,
} from "react-icons/fa";
import img from "../../images/saki.png";
import { Link } from "react-router-dom";
import About from "../About/About";

const Side = () => {
  return (
    <div>
      <div className="right ">
        <div className="midle">
          <div className="home">
            <div className="container">
              <div className="row">
                <div className="home-info padd-15">
                  <h3 className="text-3xl display flex my-4 font-bold">
                    Hello, My Name Is{" "}
                    <span className="name ml-2">
                      {" "}
                      <Typewriter
                        options={{
                          strings: ["M.T.N Sakib"],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </h3>
                  <h3 className="job display flex text-3xl my-7 font-bold">
                    I'm a{" "}
                    <span className="job-title ml-2">
                      <Typewriter
                        options={{
                          strings: ["Frontend Webdeveloper"],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </h3>
                  <p className="mb-16 text-xl">
                    {" "}
                    I'm a Frontend Webdeveloper who loves coding, open source,
                    and the web platform
                  </p>
                  <a href="https://drive.google.com/file/d/1yjNzXl2dpMGlEIgmY7q3JjsuBEPXLG0-/view?usp=share_link">
                    <button className="btn btn-success text-xl">
                      See Resume
                    </button>
                  </a>
                </div>
                <div className="home-img padd-15">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
