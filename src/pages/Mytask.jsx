import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Mytask = () => {
  const {
    data = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        "https://albratoss-server-side-1.vercel.app/Alltask"
      );

      const data = await res.json();
      return data;
    },

  });
const mytasssk = data.filter(rony => rony.status === false)


  const deletetask = (Alltask) => {
    console.log(Alltask);
    fetch(`https://albratoss-server-side-1.vercel.app/Alltask/${Alltask}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <>
      {mytasssk.map((alltask) => (
        <div className=" flex justify-center ">
          <div class="bg-gray-800 pt-4  w-full flex gap-8 items-center justify-center">
            <a
              href
              class="rounded-sm w-60 grid grid-cols-12 mb-3 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
            >
              <div class="col-span-12 md:col-span-1"></div>

              <div class="col-span-11 xl:-ml-5">
                <p class="text-blue-600 font-semibold text-xl text-center">
                  {alltask.task}
                </p>
              </div>
            </a>
            <div class=" flex justify-center items-center">
              <button
                onClick={() => deletetask(alltask._id)}
                type="button"
                class="px-4 py-3 bg-red-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
              >
                <span class="ml-2 text-xl font-semibold">Delete</span>
              </button>
            </div>

            <div class=" flex justify-center items-center">
              <Link to={`/update/${alltask._id}`}>
                {" "}
                <button
                  type="button"
                  class="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                >
                  <span class="ml-2 text-xl font-bold">Update</span>
                </button>
              </Link>
            </div>
            <div class=" flex justify-center items-center">
              <button
                type="button"
                class="px-4 py-3 bg-yellow-300 rounded-md text-black outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
              >
                <span class="ml-2 text-xl font-bold">Completed</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Mytask;
