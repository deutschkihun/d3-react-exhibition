import React from 'react'

export function Tears({ eyeOffsetX, eyeOffsetY, eyeRadius }) {
  return (
    <>
      <circle cx={eyeOffsetX - 9} cy={-eyeOffsetY + 30} r={eyeRadius - 2} />
      <circle cx={eyeOffsetX - 9} cy={-eyeOffsetY + 40} r={eyeRadius - 2} />
      <circle cx={eyeOffsetX - 9} cy={-eyeOffsetY + 50} r={eyeRadius - 2} />
      <circle cx={eyeOffsetX - 9} cy={-eyeOffsetY + 60} r={eyeRadius - 2} />
    </>
  )
}
