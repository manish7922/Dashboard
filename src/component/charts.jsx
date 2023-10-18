import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';
import "./chart.css"
class MyDonutChart extends Component {
  render() {
    const data = [
    { label: 'Remaining', value: 35, stroke: '#fff', fill: 'white' }, // white
    { label: 'New Customers', value: 50, stroke: '#8e44ad', fill: '#8e44ad' }, // purple
    { label: 'Remaining', value: 15, stroke: '#ff00ff', fill: '#ff00ff' }, // pink
  ];
  const chartData = [
    {
      label: 'Give you up',
      value: 25,
    },
    {
      label: '',
      value: 75,
      isEmpty: true,
    },
  ];



    return (
      <div className="position-relative w-100" style={{ paddingBottom: '100%', position: 'relative' }}>
        <div className="position-absolute w-75 h-75 rounded-circle shadow-lg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          
        <div className="" style={{marginTop:"-1.8em"}}>
        <DonutChart
            data={data}
            className="position-absolute w-100 h-100"
            strokeWidth={25}
            // style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            // // hideLabels={false}
            legend={false}
            
          />
    </div>


            </div>
        </div>
    //   </div>
    );
  }
}

export default MyDonutChart;




// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7], // CSS-style declaration
// ];










