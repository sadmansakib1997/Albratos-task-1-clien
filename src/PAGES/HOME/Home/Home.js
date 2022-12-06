import React from "react";

import { useState } from "react";
import CATAGORY from "../../Sector/CATAGORY";
import Loading from "../../Shared/LOading/Loading";
import Banner from "../Banner/Banner";
import Testimonial from "../testimonials/Testimonial";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const {
    data: items = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["items"],
    queryFn: async () =>
      fetch("https://last-assignment-server-eta.vercel.app/items").then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

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
          <CATAGORY key={item.id} item={item} refetch={refetch}></CATAGORY>
        ))}
      </div>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
