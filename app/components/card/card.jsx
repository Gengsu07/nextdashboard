import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex  justify-between gap-5 p-5 bgSoft rounded-xl cursor-pointer max-w-full hover:bg-[#2e374a] ">
      <MdSupervisedUserCircle size={30} />
      <div className="flex flex-col justify-between gap-2">
        <span className="font-bold">Total User</span>
        <span className="font-medium text-[#24px]">10.273</span>
        <span className="overflow-visible text-[12px]">
          <span className="text-lime-600 font-bold">12.3%</span> more than
          previous
        </span>
      </div>
    </div>
  );
};

export default Card;
