import React from 'react'
import { range } from 'd3'
import { Rectangle } from './Rectangle'

export function SVGRectangle({ width, height, centerX, centerY, stroke, strokeWidth, refresh }) {
  return (
    <>
      {range(6 * 3)
        .reverse()
        .map(i => (
          <Rectangle
            key={i}
            width={width * i * 0.2}
            height={height / 4}
            centerX={centerX}
            centerY={centerY}
            stroke={stroke}
            index={i}
            strokeWidth={strokeWidth}
            refresh={refresh}
          />
        ))}
    </>
  )
}
