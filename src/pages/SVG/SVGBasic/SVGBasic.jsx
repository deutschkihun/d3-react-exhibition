import React from 'react'
import { ViewBox } from './ViewBox'
import { Path } from './Path'
import { Text } from './Text'
import { Gradation } from './Gradation'
import { Pattern } from './Pattern'
import { Mask } from './Mask'
import { Stroke } from './Stroke'

export function SVGBasic() {
  return (
    <>
      <ViewBox />
      <Path />
      <Text />
      <Gradation />
      <Pattern />
      <Mask />
      <Stroke />
    </>
  )
}
