import React from 'react'
import { getRandomColor } from '../Face/Face'

export const CircleAdvance = ({width,height,centerX,centerY,stroke,radius}) => {
    return (
        <>
        <svg width={width} height={height}> 
            <g transform={`translate(${centerX},${centerY})`}>
                <circle fill={getRandomColor()} stroke={stroke} r={radius}></circle>
            </g>
        </svg>
    </>
    )
}

