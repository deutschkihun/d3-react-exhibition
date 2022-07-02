import React from 'react'
import { range } from 'd3'
import { Axis } from './Axis'

export function AxisBasic({ width, height, margin, refresh }) {
  return (
    <>
      {range(4).map(i => (
        <Axis width={width} height={height} margin={margin} index={i} refresh={refresh} />
      ))}
    </>
  )
}
