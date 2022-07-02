import React from 'react'
import { ConfidenceInterval } from './ConfidenceInterval'
import { ConfidenceIntervalReverse } from './ConfidenceIntervalReverse'

export function ConfidenceIntervalBasic({ width, height, margin }) {
  return (
    <>
      <ConfidenceInterval width={width} height={height} margin={margin} />
      <ConfidenceIntervalReverse width={width} height={height} margin={margin} />
    </>
  )
}
