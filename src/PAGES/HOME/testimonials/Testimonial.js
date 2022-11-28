import React from "react";
import img1 from "../../../assets/images/caique-nascimento-KJE--xk4AWE-unsplash.jpg";
import img2 from "../../../assets/images/oscar-sutton-D6uPSk8VK-4-unsplash.jpg";
import img3 from "../../../assets/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";

const Testimonial = () => {
  return (
    <div className="mx-6 mt-15">
      <h1 className="text-4xl font-bold text-red-600 text-center my-6">
        Our Client Says
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="card card-side bg-base-300 shadow-xl">
          <figure>
            <img className="rounded-xl" src={img1} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sadman Sakib</h2>
            <p>
              “Take care of your car in the garage, and the car will take care
              of you on the road.”
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-300 shadow-xl">
          <figure>
            <img className="rounded-xl" src={img2} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ronaldo</h2>
            <p>
              “Take care of your car in the garage, and the car will take care
              of you on the road.”
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-300 shadow-xl">
          <figure>
            <img className="rounded-xl" src={img3} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">James Bond</h2>
            <p>
              “Take care of your car in the garage, and the car will take care
              of you on the road.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
