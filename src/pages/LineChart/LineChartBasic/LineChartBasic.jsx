import React from 'react'
import { KO } from './KO'
import { PEPSI } from './PEPSI'
import { APPL } from './APPL'
import { PG } from './PG'

export function LineChartBasic({ width, height, margin }) {
  return (
    <>
      <KO width={width} height={height} margin={margin} />
      <PEPSI width={width} height={height} margin={margin} />
      <APPL width={width} height={height} margin={margin} />
      <PG width={width} height={height} margin={margin} />
    </>
  )
}
