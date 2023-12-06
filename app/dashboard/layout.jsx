import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex gap-4">
      <div className="bgSoft flex basis-1/4 max-sm:hidden ">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow max-w-full p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
