import React from 'react'
import { AxisLabel } from './AxisLabel'
import { AxisLabelAdvance } from './AxisLabelAdvance'

export function CustomAxisLabel({ width, height, margin, pointer, band }) {
  return (
    <>
      <AxisLabel width={width} height={height} margin={margin} band={band} />
      <AxisLabelAdvance width={width} height={height} margin={margin} pointer={pointer} />
    </>
  )
}
