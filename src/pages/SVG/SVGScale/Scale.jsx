import React from 'react'
import * as d3 from 'd3'

export function Scale({ width, height, centerX, centerY, stroke, radius }) {
  const scaler = d3.scaleLinear().domain([0, 100]).range([0, 100]) // 20
  const scalerModified = d3.scaleLinear().domain([0, 50]).range([0, 300]) // 120 (x2,x3)

  return (
    <svg width={width * 2} height={height * 2}>
      <g transform={`translate(${centerX},${centerY})`}>
        <circle fill="black" stroke={stroke} r={radius} cx={scaler(20)} cy={scaler(20)} />
        <circle fill="blue" stroke={stroke} r={radius} cx={scalerModified(20)} cy={scaler(20)} />
        <circle fill="yellow" stroke={stroke} r={radius} cx={scaler(20)} cy={scalerModified(20)} />
        <circle fill="red" stroke={stroke} r={radius} cx={scalerModified(20)} cy={scalerModified(20)} />
      </g>
    </svg>
  )
}
