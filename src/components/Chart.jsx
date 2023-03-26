import React from "react";
import Chart from "react-apexcharts";

const chart = ({options, series, type, width}) => {


  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type={type}
            width={width}
          />
        </div>
      </div>
    </div>
  );

}


export default chart;