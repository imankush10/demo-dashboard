import React from "react";
import { FaAngleRight } from "react-icons/fa6";
const Box = ({ icon, heading, desc, btn, pro }) => {
  return (
    <div className="p-4 border-[2px] w-80 h-full flex flex-col gap-3 items-start text-wrap bg-white transition-all dark:border-none dark:shadow-neutral-900 shadow-gray-200 shadow-md dark:bg-neutral-900 dark:text-white">
      <div className="bg-gray-200 dark:bg-neutral-700 h-fit w-fit p-3 rounded-md">{icon}</div>
      <div className="flex gap-4 w-full">
        <h1 className="text-xl font-semibold">{heading}</h1>
        {pro && <h1 className="bg-gray-200 dark:bg-neutral-700 dark:text-white text-blue-600 text-xs font-semibold flex items-center justify-center w-9 h-6">Pro</h1>}
      </div>
      <h1 className="text-sm font-normal">{desc}</h1>
      <button className="text-blue-600 dark:text-red-400 text-sm font-semibold flex items-center gap-3">
        {btn}
        {"   "}<FaAngleRight/>
      </button>
    </div>
  );
};

export default Box;
