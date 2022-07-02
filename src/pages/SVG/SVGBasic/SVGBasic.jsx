import React from 'react'
import { ViewBox } from './ViewBox'
import { Path } from './Path'
import { Text } from './Text'
import { Gradation } from './Gradation'

export function SVGBasic() {
  return (
    <>
      <ViewBox />
      <Path />
      <Text />
      <Gradation />
    </>
  )
}
