import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex gap-4 h-screen  ">
      <div className="bgSoft flex basis-1/5 max-sm:hidden h-screen ">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow max-w-full py-5 pr-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
