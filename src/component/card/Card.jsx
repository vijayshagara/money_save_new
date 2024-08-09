import React, { useState } from "react";
import "./Card.css";
import dollar from "../../assets/dollar.png";
import order from "../../assets/order.png";
import balance from "../../assets/balance.png";
import total from "../../assets/total.png";
import Chart from "react-apexcharts";

let array = [
  {
    id: "1",
    img: dollar,
    title: "Total Orders",
    price: "$198K",
    increase: "37.8% ",
    time: "This month",
    color: "#70e970",
  },
  {
    id: "2",
    img: order,
    title: "Total Delivered",
    price: "$2.4K",
    increase: "2% ",
    time: "This month",
    color: "red",
  },
  {
    id: "3",
    img: balance,
    title: "Total Cancelled",
    price: "$2.4K",
    increase: "2% ",
    time: "This month",
    color: "red",
  },
  {
    id: "4",
    img: total,
    title: "Total Revenue",
    price: "$89K",
    increase: "11% ",
    time: "This week",
    color: "#70e970",
  },
];

const Card = () => {
  const [chartOptions] = useState({
    series: [44, 55, 41, 17, 15],
    legend: {
      show: false,
    },
    chart: {
      width: 380,
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });
  return (
    <>
    <h2 className="text-white pt-3 pb-3">Dashboard</h2>
    <div className="Parent_card">
      {array &&
        array.length > 0 &&
        array.map((v) => (
          <div className="card" style={{ width: "13rem" }} key={v.id}>
            <div className="card-body">
              <img src={v.img} alt={v.img} />
            </div>
            <div className="card_p_text">
              <p className="card-text" style={{ color: "white" }}>
                {v.title}
              </p>
              <p className="card-text"><h4>{v.price}</h4></p>
              <p className="card-text">
                <span style={{ color: `${v.color}` }}>{v.increase}</span>
                {v.time}
              </p>
            </div>
          </div>
        ))}
      {/* <div className="card-body-df"></div> */}
      <div className="card-body-df">
        <div className="p-3">
          <h4 className="card-body" style={{ color: "white" }}>
           Net Profit
          </h4>
          <div className="card-text" style={{color:"white", fontSize:"40px",fontWeight:"40px"}}>$&nbsp;6759.25</div>
          <p className="card-text">
          <span style={{ color: "#70e970" }}>3%</span>
          </p>
        </div>
        <div className="don_chart">
          <Chart
            options={chartOptions}
            series={chartOptions.series}
            type="donut"
            height={220}
            width={400}
          />
        </div>
      </div>
    </div>
       </>
  );
};

export default Card;
