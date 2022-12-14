import React from "react";
import "./About.css";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="About">
      <div className="me">
        <div className="containe pt-10 pb-10">
          <div className="row padd-15">
            <div className="text">
              <h1 className=" text1">About Me</h1>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h1>
                    I'm M.T.N Sakib and <span>I'm a Webdeveloper</span>
                  </h1>
                  <p>
                    I am convinced that my broad experience in my previous
                    career field has equipped me with a strong set of valuable
                    competencies that meet your needs. I am eager to combine my
                    previous experience with my passion for new career fields in
                    order to work hard and make a meaningful contribution to any
                    organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="yo">
          <ul className="item display flex justify-center mt-10 mb-10">
            <li>
              <a href="https://www.facebook.com/">
                <span>
                  <FaFacebookF />
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/m-t-n-sakib-40ab3b259/">
                <span>
                  <FaLinkedinIn />
                </span>
              </a>
            </li>
            <li>
              <a href="https://github.com/sadmansakib1997">
                <span>
                  <FaGithub />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
