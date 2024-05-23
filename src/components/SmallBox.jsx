import React from "react";
import { IoMdMore } from "react-icons/io";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

const SmallBox = ({ icon, heading, price, percentage }) => {
  return (
    <div className="p-4 border-[2px] flex flex-col gap-1 bg-white rounded-lg dark:bg-neutral-900 transition-all dark:shadow-neutral-900 dark:border-none dark:text-white shadow-gray-200 shadow-md w-40 h-40 justify-center">
      <div className="flex justify-between w-full">
        <img src={icon} width={40}/>
        <IoMdMore />
      </div>
    <h1 className="text-gray-600 font-semibold dark:text-white">{heading}</h1>
      <h1 className="text-lg font-bold text-gray-700 dark:text-white">${price}</h1>
      <div className="flex text-green-500 items-center gap-1">
        {
            percentage>0?<FaArrowUp size={12}/>:<FaArrowDown size={12}/>
        }
      <h1 className="text-sm">{percentage>0? '+': ''}{percentage}</h1>
      </div>
    </div>
  );
};

export default SmallBox;
