import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'
export default function Chart(props) {
    const dataPointsValue=props.chartDataPoints.map(datapoint=>datapoint.value);
    const totalMaximum = Math.max (...dataPointsValue)
    console.log(props.chartDataPoints);
  return (
    <div className="chart">
      {props.chartDataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxvalue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}
