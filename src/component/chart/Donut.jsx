import React, { useState } from "react";
import goals from "../../assets/goals.png";
import popular_dishes from "../../assets/popular_dishes.png";
import menus from "../../assets/menus.png";
import "react-icons";
import "react-bootstrap";

const DonutChart = () => {
  // const [chartOptions] = useState({
  //   series: [44, 55, 41, 17, 15],
  //   legend: {
  //     show: false,
  //   },
  //   chart: {
  //     width: 380,
  //     type: "donut",
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 480,
  //       options: {
  //         chart: {
  //           width: 200,
  //         },
  //         legend: {
  //           position: "bottom",
  //         },
  //       },
  //     },
  //   ],
  // });

  let data = [
    {
      id: "1",
      img: goals,
      title: "Goals",
    },
    {
      id: "2",
      img: popular_dishes,
      title: "Popular Dishes",
    },
    {
      id: "3",
      img: menus,
      title: "Menus",
    },
  ];

  return (
    <div className="chart_content">
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div key={item.id}>
            <div className="menu">
              <div>
                {" "}
                <img src={item.img} />
                <span className="p-2 text-white menu_text">{item.title}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-arrow-right-circle text-white"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DonutChart;
