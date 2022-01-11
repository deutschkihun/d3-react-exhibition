import React from 'react'
import {LinearScaler} from './Scaler/LinearScaler'
import {LogScaler} from './Scaler/LogScaler'

export const BasicAxisScaler = ({
    width,
    height,
    margin,
    pointer,
    band,
    refresh
}) => (
    <>
        <LinearScaler
            width={width}
            height={height}
            margin={margin}
        />
        <LogScaler
            width={width}
            height={height}
            margin={margin}
            pointer={pointer}
            band={band}
            refresh={refresh}
        />
    </>
)

