import React from 'react'
import { arc } from 'd3'

export function SmileMouth({ mouthRadius, mouthWidth }) {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2)

  return <path d={mouthArc()} />
}

export function BadMouth({ mouthRadius, mouthWidth }) {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle((Math.PI * 3) / 2)
    .endAngle((Math.PI * 5) / 2)

  return <path d={mouthArc()} style={{ transform: 'translate(0px, 40px)' }} />
}

export function CryingMouth({ mouthRadius, mouthWidth }) {
  const mouthArc = arc()
    .innerRadius(mouthRadius + mouthWidth * 2)
    .outerRadius(mouthRadius + mouthWidth * 2.5)
    .startAngle((Math.PI * 3.5) / 2)
    .endAngle((Math.PI * 4.5) / 2)

  return <path d={mouthArc()} style={{ transform: 'translate(0px, 70px)' }} />
}

export function AngryMouth({ mouthRadius, mouthWidth }) {
  const mouthArc = arc()
    .innerRadius(mouthRadius / 6 + mouthWidth * 2)
    .outerRadius(mouthRadius / 6 + mouthWidth * 2.5)
    .startAngle((Math.PI * 3.5) / 2)
    .endAngle((Math.PI * 4.5) / 2)

  return <path d={mouthArc()} style={{ transform: 'translate(0px, 60px)' }} />
}
