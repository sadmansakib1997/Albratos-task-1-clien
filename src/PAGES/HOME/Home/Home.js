import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CATAGORY from "../../Sector/CATAGORY";
import Banner from "../Banner/Banner";
import Testimonial from "../testimonials/Testimonial";

const Home = () => {
  const [items, setitems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setitems(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="mt-10 ">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-6">
          Explore Most Desire Cars
        </h1>
      </div>
      <div className="mx-6 grid grid-cols-3 gap-6 mb-10">
        {items.map((item) => (
          <CATAGORY key={item.id} item={item}></CATAGORY>
        ))}
      </div>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
