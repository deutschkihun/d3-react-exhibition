import React from 'react'
import { BrushingBoth } from './BrushingBoth'
import { BrushingX } from './BrushingX'
import { BrushingY } from './BrushingY'

export const Brushing = ({
    width, 
    height,
    margin,
}) => (
    <>
        <BrushingBoth
            width={width}
            height={height}
            margin={margin}
        />
         <BrushingX
            width={width}
            height={height}
            margin={margin}
        />
         <BrushingY
            width={width}
            height={height}
            margin={margin}
        />
    </>
)

