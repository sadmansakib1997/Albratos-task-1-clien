import React from "react";
import { Outlet } from "react-router-dom";
import About from "../HOme/About/About";
import Contact from "../HOme/Contact/Contact";
import Footer from "../HOme/Footer/Footer";
import HOme from "../HOme/HOme";
import Navbar from "../HOme/Navbar/Navbar";
import Portfolio from "../HOme/Portfolio/Portfolio";
import Service from "../HOme/Service/Service";
import Side from "../HOme/Side/Side";
import Skill from "../HOme/Skills/Skill";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
