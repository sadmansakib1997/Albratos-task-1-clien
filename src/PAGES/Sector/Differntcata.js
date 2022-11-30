import React from "react";

const Differntcata = ({ singleitem, setcars }) => {
  return (
    <div>
      <div className="card card-compact w-auto bg-base-300 shadow-xl">
        <figure>
          <img className=" rounded-xl" src={singleitem.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{singleitem.name}</h2>
          <p>{singleitem.description}</p>
          <p className=" text-xl">Orginal Price: {singleitem.orginalprice}</p>
          <p className=" text-xl">Resale Price:{singleitem.resale}</p>
          <p className=" text-xl">Time:{singleitem.time}</p>
          <p className=" text-xl">Years:{singleitem.years}</p>
          <p className=" text-xl">price:{singleitem.price}</p>
          <h1 className=" text-xl">Seller Name: {singleitem.sellername}</h1>
          <div className="card-actions justify-end">
            <label
              onClick={() => setcars(singleitem)}
              htmlFor="booking-modal"
              className="btn btn-primary"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Differntcata;
