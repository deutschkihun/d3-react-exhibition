import React from 'react'
import { range } from 'd3'
import { CircleTop } from './CircleTop'
import { CircleBottom } from './CircleBottom'

export function SVGWithD3({ width, height, centerX, centerY, radius, opacity, refresh }) {
  return (
    <>
      {range(6 * 3).map(i => (
        <>
          <CircleTop
            width={width * 2}
            height={height * 2}
            centerX={centerX * 2}
            centerY={centerY * 2}
            radius={radius}
            index={i}
            opacity={opacity}
            refresh={refresh}
          />
          <CircleBottom
            width={width}
            height={height}
            centerX={centerX}
            centerY={centerY}
            radius={radius}
            index={i}
            opacity={opacity}
            refresh={refresh}
          />
        </>
      ))}
    </>
  )
}
