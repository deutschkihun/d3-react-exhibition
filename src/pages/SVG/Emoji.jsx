import React from 'react'
import { FaceContainer } from './FaceContainer'

export function Emoji({ width, height, centerX, centerY, type }) {
  return (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
      strokeWidth={9}
      eyeOffsetX={29}
      eyeOffsetY={35}
      eyeRadius={10}
      mouthWidth={10}
      mouthRadius={35}
      type={type}
    />
  )
}
