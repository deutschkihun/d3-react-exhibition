import React from 'react'
import {CircleAdvance} from './CircleAdvance'
import {range} from 'd3'

export const SVGCircleAdvance = ({
    width,
    height,
    centerX,
    centerY,
    radius,
}) => (
    <>
        {range(6*3).map((i) => (
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
        ))}
    </>
)


