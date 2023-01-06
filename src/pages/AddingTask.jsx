import React from "react";

const AddingTask = ({ alltask }) => {
  return (
    <div className=" flex justify-center ">
      <div class="bg-gray-800 pt-2  w-2/4 flex flex-col gap-4 items-center justify-center">
        <a
          href
          class="rounded-sm w-3/5 grid grid-cols-12 mb-3 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
        >
          <div class="col-span-12 md:col-span-1"></div>

          <div class="col-span-11 xl:-ml-5">
            <p class="text-blue-600 font-semibold">{alltask.task}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AddingTask;
