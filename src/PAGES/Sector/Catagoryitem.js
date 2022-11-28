import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Bookingmodal from "./Bookingmodal/Bookingmodal";
import Differntcata from "./Differntcata";

const Catagoryitem = () => {
  const singleitems = useLoaderData();
  const [cars, setcars] = useState(null);
  return (
    <div>
      <h1 className="text-4xl font-bold text-purple-600 text-center mb-6">
        Choose Your Desire Cars
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {singleitems.map((singleitem) => (
          <Differntcata
            key={singleitem._id}
            singleitem={singleitem}
            setcars={setcars}
          ></Differntcata>
        ))}
      </div>
      {cars && <Bookingmodal cars={cars} setcars={setcars}></Bookingmodal>}
    </div>
  );
};

export default Catagoryitem;
