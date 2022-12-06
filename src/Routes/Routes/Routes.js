import { createBrowserRouter } from "react-router-dom";
import Dashlayout from "../../Layout/Dashboardlayout/Dashlayout";
import Main from "../../Layout/Main/Main";
import Appointment from "../../PAGES/Appointment/Appointment";
import Addproduct from "../../PAGES/Dashboard/Addproduct/Addproduct";
import Allsellers from "../../PAGES/Dashboard/Allsellers/Allsellers";
import Dashboard from "../../PAGES/Dashboard/Dashboard";
import Myorders from "../../PAGES/Dashboard/Myappointment/Myorders";
import Myproducts from "../../PAGES/Dashboard/Myproducts/Myproducts";
import Payment from "../../PAGES/Dashboard/Payment/Payment";
import Home from "../../PAGES/HOME/Home/Home";
import Login from "../../PAGES/Login/Login";
import Allcars from "../../PAGES/Sector/Allcars";
import CATAGORY from "../../PAGES/Sector/CATAGORY";
import Catagoryitem from "../../PAGES/Sector/Catagoryitem";
import Errorpage from "../../PAGES/Shared/Errorpage";
import Signup from "../../PAGES/Signup/Signup";
import Adminprivateroute from "../Adminprivateroute";
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
        element: (
          <Privateroute>
            <Catagoryitem></Catagoryitem>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://last-assignment-server-eta.vercel.app/catagory/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dash",
    element: (
      <Privateroute>
        <Dashlayout></Dashlayout>
      </Privateroute>
    ),
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/dash",
        element: <Myorders></Myorders>,
      },
      {
        path: "/dash/users",
        element: (
          <Adminprivateroute>
            <Allsellers></Allsellers>
          </Adminprivateroute>
        ),
      },
      {
        path: "/dash/addproduct",
        element: <Addproduct></Addproduct>,
      },
      {
        path: "/dash/myproduct",
        element: <Myproducts></Myproducts>,
      },

      {
        path: "/dash/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://last-assignment-server-eta.vercel.app/booking/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
