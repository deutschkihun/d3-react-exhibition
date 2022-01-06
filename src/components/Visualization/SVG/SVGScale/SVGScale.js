import React from 'react'
import {Scale} from './Scale'

export const SVGScale = ({
    width,
    height,
    centerX,
    centerY,
    stroke,
    radius
}) => (
    <Scale
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
        stroke={stroke}
        radius={radius}
    />
)



