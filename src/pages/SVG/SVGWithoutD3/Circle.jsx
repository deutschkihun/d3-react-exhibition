import React from 'react'
import { range } from 'd3'
import { randomColorGenerator } from '../../../helper/randomColorGenerator'

export function Circle({ width, height, centerX, centerY, stroke, radius }) {
  const array = range(6 * 3)
  return (
    <>
      {array.map(i => (
        <svg key={i} width={width} height={height}>
          <g transform={`translate(${centerX},${centerY})`}>
            <circle fill={randomColorGenerator()} stroke={stroke} r={radius * i} />
          </g>
        </svg>
      ))}
    </>
  )
}
