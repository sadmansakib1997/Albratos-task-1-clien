import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../PAGES/Shared/Navbar/Navbar";

const Dashlayout = () => {
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
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            <li>
              <Link to="/dash">MY ORDERS</Link>
            </li>
            <li>
              <Link to="/dash/users">ALL USERS</Link>
            </li>

            {/* {isAdmin && (
              <>
                <li>
                  <Link to="/dash/users">All users</Link>
                </li>
                <li>
                  <Link to="/dash/doctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dash/managedoctor">Manage Doctor</Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashlayout;
