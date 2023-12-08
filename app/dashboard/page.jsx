import React from "react";
import Card from "../components/card/card";
import Rightbar from "../components/rightbar/Rightbar";
import Transaction from "../components/transaction/Transaction";
import Chart from "../components/chart/chart";

const Dashboard = () => {
  return (
    <div className="mt-5 flex items-center justify-center gap-5">
      <div className="flex  flex-col gap-5 flex-grow">
        <div className="flex justify-between items-center gap-2">
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
      <div className="flex basis-1/5">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
