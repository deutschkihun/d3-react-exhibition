import React from 'react'
import { CircleTop } from './CircleTop'
import { CircleBottom } from './CircleBottom.js'
import {range} from 'd3'


export const SVGWithD3 = ({
    width,
    height,
    centerX,
    centerY,
    radius,
    opacity,
    refresh,
}) => (
    <>
    {range(6*3).map((i) => (
        <div key={i}>
            <CircleTop
            width={width*2}
            height={height*2}
            centerX={centerX*2}
            centerY={centerY*2}
            radius={radius}
            index={i}
            opacity={opacity}
            refresh={refresh}
            />
            <CircleBottom
                width={width}
                height={height}
                centerX={centerX}
                centerY={centerY}
                radius={radius}
                index={i}
                opacity={opacity}
                refresh={refresh}
            />
        </div>
    ))}
       
        
    </>
)

