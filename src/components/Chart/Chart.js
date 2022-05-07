import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = props => {
    let valuearr = props.dataPoints.map(datapoint => datapoint.value);
    let maxvalue = Math.max(...valuearr);
    return (
        <div className="chart">
            {props.dataPoints.map( (dataPoint) => (
                <ChartBar 
                    key = {dataPoint.label}
                    value = {dataPoint.value}
                    label = {dataPoint.label}
                    maxValue = {maxvalue} 
                />
            ))}
        </div>
    )
}

export default Chart;