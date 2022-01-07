import React from 'react'
import { Axis } from './Axis'


export const CustomAxis = ({
    width,
    height,
    margin,
    pointer,
    band
}) => (
    <Axis
        width={width}
        height={height}
        margin={margin}
        pointer={pointer}
        band={band}
    />
)

