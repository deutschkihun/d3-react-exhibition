import React from 'react'
import {Rectangle} from './Rectangle'
import {range} from 'd3'

export const SVGRectangle = ({
    width,
    height,
    centerX,
    centerY,
    stroke,
    strokeWidth,
    refresh
}) => (
    <>
    {range(6*3).reverse().map((i) => (
        <Rectangle
            width={width * i*0.2}
            height={height / 4}
            centerX={centerX}
            centerY={centerY}
            stroke={stroke}
            index={i}
            strokeWidth={strokeWidth}
            refresh={refresh}
        />
    ))}
    </>
)


