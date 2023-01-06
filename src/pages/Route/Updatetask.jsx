import React, { useEffect } from "react";
import { useState } from "react";
import { set } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Updatetask = () => {
  const [task, settask] = useState([]);
  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    gettaskdetails();
  }, []);

  const gettaskdetails = async () => {
    let result = await fetch(
      `https://albratoss-server-side-1.vercel.app/Alltask/${params.id}`
    );
    result = await result.json();

    console.log(result);
    settask(result.task);

 
  };

  const updatedtas = async () => {
    let result = await fetch(
      `https://albratoss-server-side-1.vercel.app/Alltask/${params.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ task }),
      }
    );

    result = await result.json();
    if(result.acknowledged){
        navigate('/mytask')
    }
    console.log(result);
  };

  return (
    <div className=" flex justify-center ">
      <div class="bg-gray-800 pt-2  w-2/4 flex gap-4 items-center justify-center">
        <a
          href
          class="rounded-sm w-3/5 grid grid-cols-12 mb-3 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
        >
          <div class="col-span-12 md:col-span-1"></div>

          <div class="col-span-11 xl:-ml-5">
            <input
              type="text"
              name="task"
              value={task}
              onChange={(e) => {
                settask(e.target.value);
              }}
              id="large-input"
              placeholder="add some of your task"
              class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </a>
        <div class=" flex justify-center items-center">
          <button
            onClick={updatedtas}
            type="button"
            class="px-4 py-3 bg-yellow-300 rounded-md text-black outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
          >
            <span class="ml-2 text-xl font-bold">Updated</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Updatetask;
