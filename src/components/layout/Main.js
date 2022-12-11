import React from "react";
import { Outlet } from "react-router-dom";
import About from "../HOme/About/About";
import HOme from "../HOme/HOme";
import Side from "../HOme/Side/Side";
import Skill from "../HOme/Skills/Skill";

const Main = () => {
  return (
    <div>
      <Side></Side>
      <About></About>
      <Skill></Skill>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
