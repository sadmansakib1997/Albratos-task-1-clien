import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useEffect } from "react";
import { set, useForm } from "react-hook-form";
import Addingtask from "./Addingtask";

const Addtask = () => {
  const [alltasks, setalltask] = useState([]);
  const {
    register,
    // handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

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

  // useEffect(() => {
  //   fetch("https://albratoss-server-side-1.vercel.app/Alltask")
  //     .then((res) => res.json())
  //     .then((data) => setalltask(data));
  // }, []);

  /////////////
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const task = form.task.value;

    const addtask = {
      taskname: task,
    };
    console.log(task);
    fetch("https://albratoss-server-side-1.vercel.app/Alltask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addtask),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();

        reset();
        console.log(data);
      });
  };

  return (
    <div className="mb-10">
      <h1 className="text-center mt-20 mb-10 text-5xl font-bold text-fuchsia-700">
        ADD TASK
      </h1>
      <div className="flex justify-center">
        <form class="  w-3/4" onSubmit={handleSubmit}>
          <label
            for="large-input"
            class="block mb-2 mt-4 text-xl font-semibold text-gray-900 dark:text-white"
          >
            Add Task:
          </label>
          <input
            type="text"
            name="task"
            {...register("task", { required: true })}
            id="large-input"
            placeholder="add some of your task"
            class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.task && (
            <span className="text-red-800">This field is required</span>
          )}{" "}
          <br />
          <input
            type="submit"
            className="mt-1 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            value="Enter"
          />
        </form>
      </div>
      <div className="">
        {data?.map((alltask) => (
          <Addingtask key={alltask._id} alltask={alltask}></Addingtask>
        ))}
      </div>
    </div>
  );
};

export default Addtask;
