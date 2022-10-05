import React from "react";
import './ChartBar.css'
export default function ChartBar(props) {
  let chartBarLen = "0%";
  if (props.maxvalue > 0) {
    chartBarLen = Math.round((props.value/props.maxvalue)*100);
  }
  console.log(chartBarLen);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: chartBarLen }}></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
}
