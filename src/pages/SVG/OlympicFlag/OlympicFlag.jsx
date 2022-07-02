import React from 'react'
import { Flag } from './Flag'

export function OlympicFlag({ width, height, centerX, centerY, radius, strokeWidth }) {
  return (
    <Flag width={width} height={height} centerX={centerX} centerY={centerY} radius={radius} strokeWidth={strokeWidth} />
  )
}
