import React from 'react'
import { range } from 'd3';
import { randomColorGenerator } from '../../../helper/randomColorGenerator';


export const Circle = ({width,height,centerX,centerY,stroke,radius}) => {
    const array = range(6*3)
    return (
        <>
        {array.map((i) => (
            <svg width={width} height={height}> 
            <g transform={`translate(${centerX},${centerY})`}>
                <circle fill={randomColorGenerator()} stroke={stroke} r={radius*i}></circle>
            </g>
            </svg>
    ))}
    </>
    )
}

