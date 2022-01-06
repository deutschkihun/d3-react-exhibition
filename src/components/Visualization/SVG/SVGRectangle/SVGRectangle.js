import React from 'react'
import {Rectangle} from './Rectangle'

export const SVGRectangle = ({
    width,
    height,
    centerX,
    centerY,
    stroke,
    index,
    strokeWidth
}) => (
    <Rectangle
        width={width * index*0.2}
        height={height / 4}
        centerX={centerX}
        centerY={centerY}
        stroke={stroke}
        index={index}
        strokeWidth={strokeWidth}
    />
)


