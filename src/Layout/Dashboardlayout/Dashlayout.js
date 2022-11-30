import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/Firebase/Authprovider";
import Useadmin from "../../Hooks/Useadmin";
import Useseller from "../../Hooks/Useseller";
import Navbar from "../../PAGES/Shared/Navbar/Navbar";

const Dashlayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = Useadmin(user?.email);
  const [isSeller] = Useseller(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content  ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            <li className="bg-black text-white">
              <Link to="/dash">MY ORDERS</Link>
            </li>
            {/* <li>
              <Link to="/dash/users">ALL USERS</Link>
            </li> */}

            {isAdmin && (
              <>
                <li className="bg-black mt-2 text-white">
                  <Link to="/dash/users">All BUYERS</Link>
                </li>
                {/* <li className="bg-black mt-2 text-white">
                  <Link to="/dash/doctor">Add Doctor</Link>
                </li>
                <li className="bg-black mt-2 text-white">
                  <Link to="/dash/managedoctor">Manage Doctor</Link>
                </li> */}
              </>
            )}

            {isSeller && (
              <>
                {/* <li className="bg-black mt-2 text-white">
                  <Link to="/dash/users">All BUYERS</Link>
                </li> */}
                <li className="bg-black mt-2 text-white">
                  <Link to="/dash/addproduct">Add Product</Link>
                </li>
                <li className="bg-black mt-2 text-white">
                  <Link to="/dash/myproduct">My Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashlayout;
