import React from 'react'
import {LinearScaler} from './Scaler/LinearScaler'
import {LogScaler} from './Scaler/LogScaler'
import { PointScaler } from './Scaler/PointScaler'
import { BandScaler } from './Scaler/BandScaler'

export const CustomAxis = ({
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
             <BandScaler
                width={width}
                height={height}
                margin={margin}
                pointer={pointer}
                band={band}
                refresh={refresh}
            />
             <PointScaler
                width={width}
                height={height}
                margin={margin}
                pointer={pointer}
                band={band}
                refresh={refresh}
            />
    </>
)

