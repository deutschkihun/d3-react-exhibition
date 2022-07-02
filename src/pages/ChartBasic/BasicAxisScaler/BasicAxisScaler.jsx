import React from 'react'
import { LinearScaler } from './LinearScaler'
import { LogScaler } from './LogScaler'

export function BasicAxisScaler({ width, height, margin, pointer, band, refresh }) {
  return (
    <>
      <LinearScaler width={width} height={height} margin={margin} />
      <LogScaler width={width} height={height} margin={margin} pointer={pointer} band={band} refresh={refresh} />
    </>
  )
}
