import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  var optimalColumnWidthPercent = 30
  const [chartData] = useState({
    series: [
      {
        name: "Inflation",
        data: [5.1, 3.1, 10.1, 7.1, 8.0, 3.6, 7.2, 10.1, 9.1, 5.8, 5.5, 6.2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: { show: false},
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 12,
          dataLabels: {
            position: "top",
          },
          columnWidth: optimalColumnWidthPercent + "%"
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["white"],
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "white",
              colorTo: "white",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
        style: {
          // fontSize: "12px",
          colors: ["white"],
        },
      },
      colors: ["#5f8fd3"
        // function ({ value, seriesIndex, dataPointIndex, w }) {
        //     if (dataPointIndex == 8) {
        //       // return "#1E90FF";
        //     } else {
        //       // return "#A9A9A9";
        //     }
        //   }
      ],
      responsive: [
        {
          breakpoint: 480, 
          options: {
            chart: {
              width: 380,
              height: 350
            }
          }
        },
        {
          breakpoint: 600, 
          options: {
            chart: {
              width: 500,
              height: 350
            }
          }
        },
        {
          breakpoint: 801, 
          options: {
            chart: {
              width: 700,
              height: 350
            }
          }
        },
        {
          breakpoint: 1025, 
          options: {
            chart: {
              width: 902,
              height: 350
            }
          }
        },
        {
          breakpoint: 1281, 
          options: {
            chart: {
              width: 1150,
              height: 350
            }
          }
        },
      ],
      autoScale: true,
      yaxis: {
        // axisBorder: {
        //   show: false,
        // },
        // axisTicks: {
        //   show: false,
        // },
        // labels: {
        //   show: false,
        //   formatter: function (val) {
        //     return val + "%";
        //   },
        // },
        color:["white"]
      },
      title: {
        // text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });

  return (
    <div>
      <div id="chart-Bar">
        <div className="top_chart">
          <div>
            <strong style={{color:'white'}}>Activity</strong>
            {/* <p style={{color:'white'}}>monthly Earning</p> */}
          </div>
          <div>
            <select name="" id="" style={{color:'GrayText', borderRadius: "25px"}}>
              <option value="a">Annual</option>
              <option value="a">Quarterly</option>
              <option value="a">Monthly</option>
            </select>
          </div>
        </div>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={250}
          width={1048}
          
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
