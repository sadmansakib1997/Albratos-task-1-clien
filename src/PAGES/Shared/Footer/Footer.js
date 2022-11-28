import React from "react";

const Footer = () => {
  return (
    <footer className="text-white bg-neutral mx-6 mb-5">
      <div className="footer p-10  mt-10">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover" href="s">
            SELLING
          </a>
          <a className="link link-hover" href="s">
            BUYING
          </a>
          <a className="link link-hover" href="s">
            MARKETING
          </a>
          <a className="link link-hover" href="s">
            ADVERTISEMENT
          </a>
        </div>
        <div>
          <span className="footer-title" href="s">
            SYNTHETIC CAR'S
          </span>
          <a className="link link-hover" href="s">
            ABOUT US
          </a>
          <a className="link link-hover" href="s">
            CONTACT
          </a>
          <a className="link link-hover" href="s">
            OUR SERVICE
          </a>
          <a className="link link-hover" href="s">
            NEW MODEL
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="text-center">
        <p>
          Copyright © 2022 - All right reserved by{" "}
          <span className="text-red-500">SYNTHETIC CAR'S</span> Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
