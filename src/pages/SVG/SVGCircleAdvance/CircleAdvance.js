import React from 'react'
import { randomColorGenerator } from '../../../helper/randomColorGenerator'

export const CircleAdvance = ({width,height,centerX,centerY,stroke,radius}) => {
    return (
        <svg width={width} height={height}> 
            <g transform={`translate(${centerX},${centerY})`}>
                <circle fill={randomColorGenerator()} stroke={stroke} r={radius}></circle>
            </g>
        </svg>
    )
}

