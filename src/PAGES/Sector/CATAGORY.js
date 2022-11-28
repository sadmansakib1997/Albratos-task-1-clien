import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Catagoryitem from "./Catagoryitem";

const CATAGORY = ({ item }) => {
  return (
    <div>
      <div className="card w-auto bg-base-200 shadow-xl">
        <figure className="px-8 pt-8">
          <img className=" rounded-xl" src={item?.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{item?.name}</h2>
          <p>{item?.details}</p>
          <div className="card-actions justify-end">
            <Link to={`/catagory/${item?.id}`}>
              <button className="btn btn-warning text-xl font-bold">
                MORE CARS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CATAGORY;
