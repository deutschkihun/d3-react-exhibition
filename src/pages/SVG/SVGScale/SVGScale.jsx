import React from 'react'
import { Scale } from './Scale'

export function SVGScale({ width, height, centerX, centerY, stroke, radius }) {
  return <Scale width={width} height={height} centerX={centerX} centerY={centerY} stroke={stroke} radius={radius} />
}
