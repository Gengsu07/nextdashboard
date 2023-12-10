import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center">
      <button className="bg-slate-50 text-slate-500 hover:text-white px-3 py-1 rounded-md border-0 outline-none hover:bg-slate-500 cursor-pointer">
        Prev
      </button>
      <button className="bg-slate-50 text-slate-500 hover:text-white px-3 py-1 rounded-md border-0 outline-none hover:bg-slate-500 cursor-pointer">
        Next
      </button>
    </div>
  );
};

export default Pagination;
