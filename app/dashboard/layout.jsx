import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Footer from "./../components/footer";

const Layout = ({ children }) => {
  return (
    <div className="flex gap-5 h-screen  ">
      <div className="bgSoft flex basis-1/5 max-sm:hidden h-screen ">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow basis-4/5 w-full mr-5 mt-2">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
