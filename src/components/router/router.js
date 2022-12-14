import { createBrowserRouter } from "react-router-dom";
import About from "../HOme/About/About";
import Contact from "../HOme/Contact/Contact";
import Footer from "../HOme/Footer/Footer";
import HOme from "../HOme/HOme";
import Portfolio from "../HOme/Portfolio/Portfolio";
import Service from "../HOme/Service/Service";
import Side from "../HOme/Side/Side";
import Skill from "../HOme/Skills/Skill";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HOme></HOme>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/skill",
        element: <Skill></Skill>,
      },
    ],
  },
]);

export default router;
