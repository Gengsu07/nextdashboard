import React from "react";
import Card from "../components/card/card";
import Rightbar from "../components/rightbar/Rightbar";
import Transaction from "../components/transaction/Transaction";
import Chart from "../components/chart/chart";

const Dashboard = () => {
  return (
    <div className="mt-5 flex  max-sm:flex-col gap-3 justify-center ">
      <div className="flex  flex-col gap-5 flex-grow max-w-full">
        <div className="flex justify-between items-center  max-sm:flex-col max-sm:gap-3 gap-3 max-sm:max-w-full ">
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Transaction />
        </div>
        <div className="max-w-full h-full">
          <Chart />
        </div>
      </div>
      <div className="flex basis-1/4 ">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
