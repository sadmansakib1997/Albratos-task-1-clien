import React from "react";

const Allcar = ({ allcar }) => {
  return (
    <div>
      <div className="card card-compact w-auto bg-base-300 shadow-xl">
        <figure>
          <img className=" rounded-xl" src={allcar?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{allcar?.name}</h2>
          <p>{allcar?.description}</p>
          <p className=" text-xl">Orginal Price: {allcar?.orginalprice}</p>
          <p className=" text-xl">Resale Price:{allcar?.resale}</p>
          <p className=" text-xl">Time:{allcar?.time}</p>
          <p className=" text-xl">Years:{allcar?.years}</p>
          <h1 className=" text-xl">Seller Name: {allcar?.sellername}</h1>
        </div>
      </div>
    </div>
  );
};

export default Allcar;
