import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Appointment from "../../PAGES/Appointment/Appointment";
import Dashboard from "../../PAGES/Dashboard/Dashboard";
import Home from "../../PAGES/HOME/Home/Home";
import Login from "../../PAGES/Login/Login";
import Allcars from "../../PAGES/Sector/Allcars";
import CATAGORY from "../../PAGES/Sector/CATAGORY";
import Catagoryitem from "../../PAGES/Sector/Catagoryitem";
import Errorpage from "../../PAGES/Shared/Errorpage";
import Signup from "../../PAGES/Signup/Signup";
import Privateroute from "../Pirvateroute/Privateroute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign",
        element: <Signup></Signup>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/allcars",
        element: <Allcars></Allcars>,
      },
      {
        path: "/catagory",
        element: <CATAGORY></CATAGORY>,
      },
      {
        path: "/catagory/:id",
        element: <Catagoryitem></Catagoryitem>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/catagory/${params.id}`),
      },
    ],
  },
  {
    path: "/dash",
    element: (
      <Privateroute>
        <Dashboard></Dashboard>
      </Privateroute>
    ),
  },
]);

export default router;
