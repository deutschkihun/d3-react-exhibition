import React from 'react'
import { Circle } from './Circle'

export function SVGWithoutD3({ width, height, centerX, centerY, stroke, radius }) {
  return <Circle width={width} height={height} centerX={centerX} centerY={centerY} stroke={stroke} radius={radius} />
}
