import React from 'react'
import {Circle} from './Circle'

export const SVGWithoutD3 = ({
    width,
    height,
    centerX,
    centerY,
    stroke,
    radius
}) => ( 
    <Circle
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
        stroke={stroke}
        radius={radius}
    />
)



