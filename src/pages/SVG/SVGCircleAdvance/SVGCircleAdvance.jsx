import React from 'react'
import { range } from 'd3'
import { CircleAdvance } from './CircleAdvance'

export function SVGCircleAdvance({ width, height, centerX, centerY, radius }) {
  return (
    <>
      {range(6 * 3).map(i => (
        <>
          <CircleAdvance width={width} height={height} centerX={centerX} centerY={centerY} radius={radius} />
          <CircleAdvance width={width} height={height} centerX={centerX * 8} centerY={centerY} radius={radius} />
          <CircleAdvance width={width} height={height} centerX={centerX * 16} centerY={centerY} radius={radius} />
        </>
      ))}
    </>
  )
}
