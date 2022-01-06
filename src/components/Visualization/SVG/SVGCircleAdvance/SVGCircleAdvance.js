import React from 'react'
import {CircleAdvance} from './CircleAdvance'


export const SVGCircleAdvance = ({
    width,
    height,
    centerX,
    centerY,
    radius,
}) => (
    <>
        <CircleAdvance
            width={width}
            height={height}
            centerX={centerX}
            centerY={centerY}
            radius={radius}
        />
        <CircleAdvance
            width={width}
            height={height}
            centerX={centerX * 8}
            centerY={centerY}
            radius={radius}
        />
        <CircleAdvance
            width={width}
            height={height}
            centerX={centerX * 16}
            centerY={centerY}
            radius={radius}
        />
</>
   
)


