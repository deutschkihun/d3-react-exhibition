import React from 'react'
import { range } from 'd3'
import { Coordinate } from './Coordinate'

export function DataCoordinate({ width, height, margin, refresh }) {
  return (
    <>
      {range(4).map(k => (
        <Coordinate width={width} height={height} margin={margin} refresh={refresh} index={k} />
      ))}
    </>
  )
}
