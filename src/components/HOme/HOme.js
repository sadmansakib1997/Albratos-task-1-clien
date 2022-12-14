import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";
import Service from "./Service/Service";
import Side from "./Side/Side";
import Skill from "./Skills/Skill";

const HOme = () => {
  return (
    <div>
      <Side></Side>
      <About></About>
      <Skill></Skill>
      <Service></Service>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
};

export default HOme;
