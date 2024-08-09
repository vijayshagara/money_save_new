import React from "react";
import Card from "../../component/card/Card";
import Header from "../../component/Header/Header";
import ApexChart from "../../component/chart/Chart";
import DonutChart from "../../component/chart/Donut";
import Table from "../../component/Table/Table";

const Home = () => {
  return (
    <div className="home">
      <h2 className="text-white">Dashboard</h2>
      <Card />
      <div className="parent_chart">
        <ApexChart />
        <DonutChart />
      </div>
      <div className="table">
        <Table />
      </div>
    </div>
  );
};

export default Home;
