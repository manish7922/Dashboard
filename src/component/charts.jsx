import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';
import './chart.css';

class MyDonutChart extends Component {
  render() {
    const data = [
      { label: 'New Customers', value: 40, strokeWidth: 10, fill: 'linear-gradient(320deg, #8e44ad 50%, #ff00ff 50%)' },
      { label: '', isEmpty: true, value: 35, strokeWidth: 12, fill: 'transparent' },
      { label: 'New Customers', value: 25, strokeWidth: 10, fill: 'purple' },
    ];

    return (
      <div className="donut-chart-container">
        <DonutChart
          data={data}
          strokeWidth={25}
          width={200}
          height={200}
          legend={false}
          strokeColor={false}
          innerRadius={0.70}
          interactive={false}
          options={{}}
          style={{ width: '100%', height: '100%' }}
        >
 <div className="chart-inner-text d-flex flex-column">
          <p>65%</p>
          <p className="chart-inner-value"> (toplambiri kamvalue) (currency) new Customers </p>
        </div> 
        </DonutChart>
      </div>
    );
  }
}

export default MyDonutChart;
