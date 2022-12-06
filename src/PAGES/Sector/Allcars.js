import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Allcar from "./Allcar";

const Allcars = () => {
  const [allcars, setallcars] = useState([]);
  useEffect(() => {
    fetch("https://last-assignment-server-eta.vercel.app/catagories")
      .then((res) => res.json())
      .then((data) => setallcars(data));
  }, []);
  return (
    <div className="mb-12 mx-6">
      <div>
        <h1 class="text-center text-4xl font-bold text-violet-500 mb-10">
          {" "}
          Our All Exclusive Cars
        </h1>
      </div>

      <div className="mx-6 grid grid-cols-3 gap-6">
        {allcars?.map((allcar) => (
          <Allcar
            key={allcar._id}
            allcar={allcar}
            setallcars={setallcars}
          ></Allcar>
        ))}
      </div>
    </div>
  );
};

export default Allcars;
