import React from 'react'
import { CircleTop } from './CircleTop'
import { CircleBottom } from './CircleBottom.js'


export const SVGWithD3 = ({
    width,
    height,
    centerX,
    centerY,
    radius,
    index,
    opacity
}) => (
    <>
    <CircleTop
        width={width*2}
        height={height*2}
        centerX={centerX*2}
        centerY={centerY*2}
        radius={radius}
        index={index}
        opacity={opacity}
    />
    <CircleBottom
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
        radius={radius}
        index={index}
        opacity={opacity}
    />
    </>
)

