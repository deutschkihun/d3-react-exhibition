import React from 'react'
import { Coordinate } from './Coordinate'
import {range} from 'd3'

export const DataCoordinate = ({
    width,
    height,
    margin,
    refresh
}) => (
    <>
        {range(4).map((k) => (
            <Coordinate
                width={width}
                height={height}
                margin={margin}
                refresh={refresh}
                index={k}
            />
        ))}
    </>
)

