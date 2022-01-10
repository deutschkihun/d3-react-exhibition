import React from 'react'
import { Axis } from './Axis'
import {range} from 'd3'

export const AxisBasic = ({
    width,
    height,
    margin,
    refresh
}) => (
    <>
        {range(4).map((i) => (
            <Axis
                width={width}
                height={height}
                margin={margin}
                index={i}
                refresh={refresh}
            />
        ))}
    </>
)

