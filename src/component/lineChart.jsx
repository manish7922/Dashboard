import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
export default class LineChart extends Component {
  render() {
    const labels = [
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
    ];
    const data = {
      labels: labels,
      datasets: [
        {
            label:"dataShet",
            backgroundColor: labels.map(label => (label === "Aug" ? "blue" : "#f1f2f3")),
        //   backgroundColor: "rgb(255,99,132)",
          borderSkipped:"true",
        //   borderColor: "rgb(255,99,132)",
          data: [65, 59, 80, 90, 56, 55, 80, 90, 60, 50, 70, 65],
          borderRadius: 10,
        },
      ],
    };
    return (
      <div className="">
        <Bar
        height={200}
          data={data}
          options={{
            scales: {
              x: {
                beginAtZero: true,
               border:{
                display:false,
               },
                grid: {
                    // zeroLineWidth: 0,
                  display: false,
                //   drawBorder: false,
                drawOnChartArea: false,
                drawTicks:false,
                },
              },
              y: {
                beginAtZero: true,
                display: false,
                grid: {
                  display: false,
                //   zeroLineWidth: 0,
                //   drawBorder: false,
                  drawOnChartArea: false,
                },
              },
            },
            plugins: {
                roundedBars: true,
                legend: {
                    display: false, 
                  },
              },
            maintainAspectRatio: false, 
            responsive: true,
            aspectRatio: 1, 
            height: 200,
        
          }}
        />

      </div>
    );
  }
}
