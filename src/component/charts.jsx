import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';

class MyDonutChart extends Component {
  render() {
    const data = [
      { label: 'New Customers', value: 65, stroke: '#3498db' }, // blue
      { label: 'Remaining', value: 35, stroke: '#8e44ad' }, // purple
    ];

    return (
        <div className=""></div>
    //   <div className="position-relative w-100" style={{ paddingTop: '100%' }}>
    //     <div className="position-absolute w-75 h-75 rounded-circle shadow-lg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} >
    //     <DonutChart
    //       data={data}
    //       className="position-absolute w-100 h-100"
    //       strokeWidth={25}
    //       style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    //       hideLabels={false}
    //     />

    //     </div>
    //   </div>
    );
  }
}

export default MyDonutChart;












